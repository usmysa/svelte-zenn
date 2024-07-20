<script>
import "../app.css";
import Footer from "$lib/components/layouts/Footer.svelte";
import Header from "$lib/components/layouts/Header.svelte";
</script>

<div>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>