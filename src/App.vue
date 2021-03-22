<template>
	<div id="app">
		<div class="reveal">
			<div class="slides">
				<Intro />
				<Sommaire />
				<Objectifs />
				<BackEndTechnologies />
				<BackEndTools />
				<BackEndLibraries />
				<FrontEndTechnologies />
				<FrontEndTools />
				<FrontEndLibraries />
				<Support />
				<Mcd />
				<PilotageProject />
				<DeveloppementCss />
				<Outro />
			</div>
		</div>
	</div>
</template>

<script>
import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown'
import Highlight from 'reveal.js/plugin/highlight/highlight'
// slides
import Intro from './views/01-Intro.vue'
import Sommaire from './views/02-Sommaire.vue'
import Objectifs from './views/03-Objectifs.vue'
import BackEndTechnologies from './views/04 01-OutilsTechnologies-BackEnd-Technologies.vue'
import BackEndTools from './views/04 02-OutilsTechnologies-BackEnd-Tools.vue'
import BackEndLibraries from './views/04 03-OutilsTechnologies-BackEnd-Libraries.vue'
import FrontEndTechnologies from './views/04 04-OutilsTechnologies-FrontEnd-Technologies.vue'
import FrontEndTools from './views/04 05-OutilsTechnologies-FrontEnd-Tools.vue'
import FrontEndLibraries from './views/04 06-OutilsTechnologies-FrontEnd-Libraries.vue'
import Support from './views/04 07-OutilsTechnologies-Support'
import Mcd from './views/05-Mcd.vue'
import PilotageProject from './views/06 01-Pilotage-Project.vue'
import DeveloppementCss from './views/07 01-Developpement-Css.vue'
import Outro from './views/12-Outro.vue'

export default {
	name: 'app',
	components: {
		Intro,
		Sommaire,
		Objectifs,
		BackEndTechnologies,
		BackEndTools,
		BackEndLibraries,
		FrontEndTechnologies,
		FrontEndTools,
		FrontEndLibraries,
		Support,
		Mcd,
		PilotageProject,
		DeveloppementCss,
		Outro
	},
	mounted() {
		Reveal.initialize({
			plugins: [Markdown, Highlight],
			hash: true
		})
	}
}
</script>

<style lang="scss">
@import 'node_modules/reveal.js/css/reveal.scss';
@import 'node_modules/reveal.js/css/theme/source/blood.scss';
@import '@/assets/styles/theme.scss';

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
