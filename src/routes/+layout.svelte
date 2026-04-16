<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="h-screen flex flex-col">
	<nav class="border-b px-2 py-1 flex justify-between items-end gap-2 bg-teal-600">
		<p>Audio Test App</p>

		<div>
			<!-- other page links -->
		</div>
	</nav>

	<main class="px-4 py-2 flex-grow bg-gray-100">
		{@render children()}
	</main>

	<footer class="text-center text-sm p-2 border-t bg-teal-600 text-white">
		<p>Audio files managed with: <a href="https://www.cloudflare.com/" target="_blank">Cloudflare</a></p>
	</footer>
</div>