import { describe, expect, test } from "bun:test";
import { CATEGORY_MAP, TOP_PAGE_URL } from "@/constants";
import fetchMock from "fetch-mock";
import { GET } from "./route";

describe("GET", () => {
  test.each(Object.keys(CATEGORY_MAP))(
    "should return data with status 200 when category is %s",
    async (category: string) => {
      const res = await GET({} as Request, { params: { category } });
      const json = await res.json();

      expect(res.status).toBe(200);
      expect(json).not.toEqual({});
    },
  );

  test("should return error with status 400 when category is invalid", async () => {
    const res = await GET({} as Request, { params: { category: "invalid" } });
    const json = await res.json();

    expect(res.status).toBe(400);
    expect(json).toEqual({ error: "Invalid parameter" });
  });

  test("should return error with status 500 when server error occurred", async () => {
    fetchMock.get(TOP_PAGE_URL, () => {
      throw new Error("error occurred");
    });

    const res = await GET({} as Request, { params: { category: "tech" } });
    const json = await res.json();

    expect(res.status).toBe(500);
    expect(json).toEqual({
      error: "Internal Server Error",
      message: "error occurred",
    });
  });
});
