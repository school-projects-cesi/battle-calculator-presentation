<template>
	<div id="app">
		<div class="reveal">
			<div class="slides">
				<Presentation />
				<Sommaire />
			</div>
		</div>
	</div>
</template>

<script>
import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown'
import Highlight from 'reveal.js/plugin/highlight/highlight'
// slides
import Presentation from './views/01-Presentation.vue'
import Sommaire from './views/02-Sommaire.vue'

export default {
	name: 'app',
	components: {
		Presentation,
		Sommaire
	},
	mounted() {
		Reveal.initialize({
			plugins: [Markdown, Highlight]
		})
	}
}
</script>

<style lang="scss">
@import 'node_modules/reveal.js/css/reveal.scss';
@import 'node_modules/reveal.js/css/theme/source/blood.scss';
@import './styles/theme.scss';

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
