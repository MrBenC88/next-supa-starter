"use client";

import { useState, useEffect } from "react";
import { starterDataRepository } from "@/lib/repositories/starter-repository";
import { StartType } from "@/lib/schemas/templateSchema";

export function useSupabaseDBController() {
  const [startData, setStarterData] = useState<StartType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const data = await starterDataRepository.getData();
    setStarterData(data);
    setLoading(false);
  };

  const createNewEntry = async (data: StartType) => {
    await starterDataRepository.createNewEntry(data);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { startData, loading, createNewEntry };
}
