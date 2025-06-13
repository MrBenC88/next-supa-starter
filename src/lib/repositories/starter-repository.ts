import { StarterRepository } from "./starter-interface-repository";
import { supabase } from "@/lib/supabase";

const TABLE_NAME = "data";

export const starterDataRepository: StarterRepository = {
  async createNewEntry(data) {
    const { error } = await supabase.from(TABLE_NAME).insert({
      // data: data.firstName,
    });
    if (error) throw error;
  },

  async getData() {
    const { data, error } = await supabase.from(TABLE_NAME).select("*");
    if (error) throw error;

    return data.map((p) => ({
      // data: data.firstName,
    }));
  },
};
