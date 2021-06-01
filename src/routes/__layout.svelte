<script>
	import Header from '$lib/Header.svelte';
	import '../assets/css/main.css';
	import '../assets/css/tokens.css';
</script>

<Header />

<main>
    <slot></slot>
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>
