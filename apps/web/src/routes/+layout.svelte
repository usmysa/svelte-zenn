<script>
import "../app.css";
import Footer from "components/layouts/Footer.svelte";
import Header from "components/layouts/Header.svelte";
</script>

<div>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>