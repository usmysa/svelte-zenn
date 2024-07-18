import { z } from "zod";
import { ObjectKeysEnum } from "@/libs";

export const TOP_PAGE_URL = "https://zenn.dev";

export const CATEGORY_MAP = {
  books: "dailyBooks",
  idea: "dailyIdeaArticles",
  tech: "dailyTechArticles",
} as const;

export const categoryEnum = ObjectKeysEnum(CATEGORY_MAP);

export type CategoryType = z.infer<typeof categoryEnum>;
