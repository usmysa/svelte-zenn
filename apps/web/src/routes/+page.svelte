<script lang="ts">
import ExploreNav from "components/layouts/ExploreNav.svelte";

const sections = [
  { title: "Tech", helpText: "プログラミングなどの技術についての知見" },
  { title: "Ideas", helpText: "キャリア、チーム、仕事論など" },
  { title: "Books", helpText: undefined },
  { title: "Featured", path: undefined },
];
</script>

<svelte:head>
	<title>Zenn | エンジニアのための情報共有コミュニティ</title>
	<meta name="description" content="Zennはエンジニアが技術・開発についての知見をシェアする場所です。本の販売や、読者からのバッジの受付により対価を受け取ることができます。" />
</svelte:head>

<div class="flex flex-col">
	<ExploreNav />
	{#each sections as section}
		<section>
			<h3>{section.title}</h3>
			{#if section.helpText}
				<p>{section.helpText}</p>
			{/if}
		</section>
	{/each}
</div>
