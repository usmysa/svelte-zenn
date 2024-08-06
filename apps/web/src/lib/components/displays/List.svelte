<script lang="ts" generics="T extends Record<string, any>">
export let list: T[];
</script>

<ul class={$$props.class}>
  {#each list as value}
    <li>
      <slot {value} />
    </li>
  {/each}
</ul>