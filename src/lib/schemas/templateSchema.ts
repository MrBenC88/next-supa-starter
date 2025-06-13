import { z } from "zod";

export const starterschema = z.object({});

export type StartType = z.infer<typeof starterschema>;
