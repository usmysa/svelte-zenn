import { describe, expect, test } from "bun:test";
import { parseNextData } from "./parseNextData";

describe("parseNextData", () => {
  const validHtml = `
    <html lang="ja">
      <head>
        <title>test</title>
      </head>
      <body>
        <script id="__NEXT_DATA__" type="application/json">
          {"props":{"pageProps":{"mock1":{"id":"mock-id-1","name":"mock-name-1"}}}}
        </script>
      </body>
    </html>
  `;

  test("should return successfully", async () => {
    expect(parseNextData(validHtml, "mock1")).toEqual({
      id: "mock-id-1",
      name: "mock-name-1",
    });
  });

  test("should return empty object when arg is not html", async () => {
    expect(parseNextData("invalid", "mock1")).toEqual({});
  });

  test("should return empty object when html do not contain 'script[id=\"__NEXT_DATA__\"]'", async () => {
    const html = `
      <html lang="ja">
        <head>
          <title>test</title>
        </head>
        <body>
          <script id="test"></script>
        </body>
      </html>
    `;

    expect(parseNextData(html, "mock1")).toEqual({});
  });

  test("should return empty object when NEXT_DATA is invalid format", async () => {
    const html = `
      <html lang="ja">
        <head>
          <title>test</title>
        </head>
        <body>
          <script id="__NEXT_DATA__" type="application/json">
            {"props":{"data":"invalid"}}
          </script>
        </body>
      </html>
    `;

    expect(parseNextData(html, "mock1")).toEqual({});
  });

  test("should return empty object when json do not have key", async () => {
    expect(parseNextData(validHtml, "invalid")).toEqual({});
  });

  test("should throw error when NEXT_DATA is not json", async () => {
    const html = `
    <html lang="ja">
      <head>
        <title>test</title>
      </head>
      <body>
        <script id="__NEXT_DATA__" type="application/json">
          ["key" => "value"]
        </script>
      </body>
    </html>
  `;

    expect(() => parseNextData(html, "mock1")).toThrow();
  });
});
