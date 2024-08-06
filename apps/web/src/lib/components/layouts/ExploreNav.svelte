<script lang="ts">
import List from "components/displays/List.svelte";
import clsx from "clsx";

const links = [
  {
    path: "/",
    label: "Trending",
    isActive: true,
  },
  {
    path: "/",
    label: "Explore",
    isActive: false,
  },
];
</script>

<nav class="border-[--c-neutral-border-lighter] border-b sticky top-0">
  <div class="flex justify-between items-center max-w-screen-xl w-[100%] mx-auto my-0 lg:px-[40px] md:px-[25px] sm:px-[20px] px-[14px]">
    <List class="flex flex-row gap-7" list={links} let:value>
      <a class={clsx("font-hero font-semibold inline-flex border-b-2 py-2", value.isActive ? "border-[--c-text-body]" : "border-white text-[--c-text-low-priority]")} href={value.path}>{value.label}</a>
    </List>
    <a class="align-[-.2em] hover:underline text-[.8rem] text-[--c-text-link-primary]" href="">
      <span class="hidden md:inline text-[.8rem] underline-offset-[.2em]">すべてのPublicationでメンバーの記事をレビュー可能に</span>
      <span class="inline md:hidden leading-tight text-[.8rem] underline-offset-[.2em]">メンバーの記事を<br/>レビュー</span>
      <!-- arrow -->
      <svg viewBox="0 0 24 24" fill="currentColor" class="inline-block h-[1.1em] w-[1.1em] -rotate-45"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg>
    </a>
  </div>
</nav>