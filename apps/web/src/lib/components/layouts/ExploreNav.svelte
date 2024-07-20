<script lang="ts">
import List from "$lib/components/displays/List.svelte";

const links = [
  {
    path: "/",
    label: "Trending",
  },
  {
    path: "/",
    label: "Explore",
  },
];
</script>

<div class="flex px:40">
  <List list={links} let:value>
    <a href={value.path}>{value.label}</a>
  </List>
</div>