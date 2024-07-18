import { z } from "zod";

export const ObjectKeysEnum = <K extends string>(
  object: Record<K, any>
): z.ZodEnum<[K, ...K[]]> => {
  const [firstKey, ...otherKeys] = Object.keys(object) as K[];
  if (typeof firstKey !== "string") throw new Error("key is not string");
  return z.enum([firstKey, ...otherKeys]);
};
