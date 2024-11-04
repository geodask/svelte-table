<script lang="ts">
	import Footer from '$lib/components/organisms/layout/footer.svelte';
	import Header from '$lib/components/organisms/layout/header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<Header />
	<div class="grow">
		{@render children()}
	</div>
	<Footer />
</div>
