import { StartType } from "@/lib/schemas/templateSchema";

export interface StarterRepository {
  getData(): Promise<StartType[]>;
  createNewEntry(data: StartType): Promise<void>;
}
