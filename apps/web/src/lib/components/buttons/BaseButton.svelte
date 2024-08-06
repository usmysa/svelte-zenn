<script lang="ts">
import clsx from "clsx";

export let onClick: () => void;
export const type: HTMLButtonElement["type"] = "button";
</script>

<button class={clsx("bg-[--c-button-primary] flex font-semibold hover:bg-[--c-button-primary-hover] items-center justify-center rounded-full text-[15px]", $$props.class)} on:click={onClick} type={type}>
  <slot />
</button>