import { useState, useEffect, useRef } from "react";

const API_KEY = "SAMPLE"; // Replace with the API key from the README
const TRENDING_ENDPOINT = "https://api.giphy.com/v1/gifs/trending";
const SEARCH_ENDPOINT = "https://api.giphy.com/v1/gifs/search";

export const useTrendingGifs = () => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0); // Tracks the current offset for pagination
  const [hasMore, setHasMore] = useState(true); // Tracks if more gifs are available
  const [searchQuery, setSearchQuery] = useState(""); // Tracks the current search query
  const debounceRef = useRef<NodeJS.Timeout | null>(null); // Ref for debouncing API calls

  const fetchGifs = async (newOffset: number, query: string = "") => {
    try {
      setLoading(true);
      const endpoint = query ? SEARCH_ENDPOINT : TRENDING_ENDPOINT;
      const response = await fetch(
        `${endpoint}?api_key=${API_KEY}&limit=20&offset=${newOffset}&q=${query}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch GIFs");
      }
      const data = await response.json();

      // Always replace GIFs when starting fresh (newOffset === 0) OR when switching between search/trending
      const isNewQuery = newOffset === 0 || query !== searchQuery;
      setGifs(isNewQuery ? data.data : [...gifs, ...data.data]);

      setOffset(newOffset + 20); // Update the offset for the next fetch
      setHasMore(data.pagination.total_count > newOffset + 20); // Check if more gifs are available
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchGifs = (newOffset: number, query: string) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current); // Clear the previous timeout
    }
    debounceRef.current = setTimeout(() => {
      fetchGifs(newOffset, query); // Call the actual API function
    }, 300); // Set a 300ms delay
  };

  useEffect(() => {
    fetchGifs(0); // Initial fetch for trending GIFs
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setOffset(0);
    debouncedFetchGifs(0, query); // Use the debounced API call
  };

  return {
    gifs,
    loading,
    error,
    fetchGifs,
    hasMore,
    handleSearch,
    searchQuery,
  };
};
