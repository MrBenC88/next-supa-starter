import React, { useRef, useEffect } from "react";
import { useTrendingGifs } from "./useTrendingGifs";
import SearchInput from "./SearchInput";

const HomeComponent = () => {
  const {
    gifs,
    loading,
    error,
    fetchGifs,
    hasMore,
    handleSearch,
    searchQuery,
  } = useTrendingGifs();
  const observerRef = useRef<HTMLDivElement | null>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null); // Ref for debouncing API calls

  const debouncedFetchGifs = (offset: number, query: string) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current); // Clear the previous timeout
    }
    debounceRef.current = setTimeout(() => {
      fetchGifs(offset, query); // Call the actual API function
    }, 300); // Set a 300ms delay
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !loading) {
          debouncedFetchGifs(gifs.length, searchQuery); // Use the debounced API call
        }
      },
      { root: null, rootMargin: "0px", threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [gifs.length, hasMore, loading, searchQuery]);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="mb-4">
        <SearchInput
          value={searchQuery}
          onChange={(value) => handleSearch(value)} // Directly call handleSearch without debouncing
          placeholder="Search GIFs..."
        />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {gifs.map((gif: any) => (
          <img
            key={gif.id}
            src={gif.images.fixed_height.url}
            alt={gif.title}
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
        ))}
        {loading && <p>Loading...</p>}
        <div ref={observerRef} style={{ height: "1px" }} />{" "}
        {/* Observer target */}
      </div>
    </div>
  );
};

export default HomeComponent;
