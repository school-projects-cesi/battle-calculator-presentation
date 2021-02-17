<script>
	// svelte
	import { onMount } from 'svelte'
	// reveal
	import Reveal from 'reveal.js'
	import Markdown from 'reveal.js/plugin/markdown/markdown'
	import Highlight from 'reveal.js/plugin/highlight/highlight'
	// slides
	import Presentation from './views/01-Presentation.svelte'
	import Sommaire from './views/02-Sommaire.svelte'
	import Algorithme from './views/08-Algorithme.svelte'

	// life cycles
	onMount(() => {
		Reveal.initialize({
			hash: true,
			plugins: [Markdown, Highlight],
		})
	})
</script>

<main id="app">
	<div class="reveal">
		<div class="slides">
			<Presentation />
			<Sommaire />
			<Algorithme />
		</div>
	</div>
</main>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		/* margin-top: 60px; */
		height: 100vh;
	}
</style>
