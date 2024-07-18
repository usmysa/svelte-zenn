import { NextResponse } from "next/server";
import {
  categoryEnum,
  CATEGORY_MAP,
  TOP_PAGE_URL,
  type CategoryType,
} from "@/constants";
import { parseNextData } from "@/libs";

type Params = {
  category: CategoryType;
};

export async function GET(_: Request, { params }: { params: Params }) {
  const parsed = categoryEnum.safeParse(params.category);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid parameters" }, { status: 400 });
  }

  try {
    const res = await fetch(TOP_PAGE_URL);
    const html = await res.text();

    return NextResponse.json(parseNextData(html, CATEGORY_MAP[parsed.data]));
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 }
    );
  }
}
