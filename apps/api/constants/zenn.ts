import { ObjectKeysEnum } from "@/libs";

export const TOP_PAGE_URL = "https://zenn.dev";

export const CATEGORY_MAP = {
  book: "dailyBooks",
  featured: "featuredArticles",
  idea: "dailyIdeaArticles",
  tech: "dailyTechArticles",
} as const;

export const categoryEnum = ObjectKeysEnum(CATEGORY_MAP);
