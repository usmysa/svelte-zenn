import { CATEGORY_MAP, TOP_PAGE_URL, categoryEnum } from "@/constants";
import { parseNextData } from "@/libs";
import { NextResponse } from "next/server";

type Params = {
  category: string;
};

export async function GET(_: Request, { params }: { params: Params }) {
  const parsed = categoryEnum.safeParse(params.category);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid parameter" }, { status: 400 });
  }

  try {
    const res = await fetch(TOP_PAGE_URL);
    const html = await res.text();

    return NextResponse.json(parseNextData(html, CATEGORY_MAP[parsed.data]));
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error", message: (err as Error).message },
      { status: 500 },
    );
  }
}
