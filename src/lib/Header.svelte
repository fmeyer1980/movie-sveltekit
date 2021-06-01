<script>
	export let segment;
</script>
<header>
    <nav>
		<ul>
			<li aria-current="{segment === undefined ? 'page' : undefined}"><a sveltekit:prefetch href="/">Home</a></li>
		</ul>
	</nav>
</header>