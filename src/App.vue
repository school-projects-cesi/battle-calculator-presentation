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
				<PilotageIssueName />
				<PilotageIssueHistory />
				<PilotageIssuePullRequest />
				<DeveloppementCss />
				<DeveloppementVideo />
				<ConclusionLimites />
				<ConclusionLimitesSecurity />
				<ConclusionLimitesSecurityFin />
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
import Intro from './slides/01-Intro/01-Intro.vue'
import Sommaire from './slides/02-Sommaire/01-Sommaire.vue'
import Objectifs from './slides/03-Objectifs/01-Objectifs.vue'
import BackEndTechnologies from './slides/04-OutilsTechnologies/01-BackEnd-Technologies.vue'
import BackEndTools from './slides/04-OutilsTechnologies/02-BackEnd-Tools.vue'
import BackEndLibraries from './slides/04-OutilsTechnologies/03-BackEnd-Libraries.vue'
import FrontEndTechnologies from './slides/04-OutilsTechnologies/04-FrontEnd-Technologies.vue'
import FrontEndTools from './slides/04-OutilsTechnologies/05-FrontEnd-Tools.vue'
import FrontEndLibraries from './slides/04-OutilsTechnologies/06-FrontEnd-Libraries.vue'
import Support from './slides/04-OutilsTechnologies/07-Support'
import Mcd from './slides/05-Mcd/01-Mcd.vue'
import PilotageProject from './slides/06-Pilotage/01-Project.vue'
import PilotageIssueName from './slides/06-Pilotage/02-Issue-Name.vue'
import PilotageIssueHistory from './slides/06-Pilotage/03-Issue-History.vue'
import PilotageIssuePullRequest from './slides/06-Pilotage/04-Issue-PullRequest.vue'
import DeveloppementCss from './slides/07-Developpement/01-Css.vue'
import DeveloppementVideo from './slides/07-Developpement/10-Video.vue'
import ConclusionLimites from './slides/08-Conclusion/04 01-Limites.vue'
import ConclusionLimitesSecurity from './slides/08-Conclusion/04 02-Limites-Security.vue'
import ConclusionLimitesSecurityFin from './slides/08-Conclusion/04 03-Limites-Security.vue'
import Outro from './slides/12-Outro/01-Outro.vue'

// main
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
		PilotageIssueName,
		PilotageIssueHistory,
		PilotageIssuePullRequest,
		DeveloppementCss,
		DeveloppementVideo,
		ConclusionLimites,
		ConclusionLimitesSecurity,
		ConclusionLimitesSecurityFin,
		Outro
	},
	mounted() {
		Reveal.initialize({
			plugins: [Markdown, Highlight],
			hash: true,
			viewDistance: 10
		})
	}
}
</script>

<style lang="scss">
// reveal
@import 'node_modules/reveal.js/css/reveal.scss';
@import 'node_modules/reveal.js/css/theme/source/blood.scss';
@import '@/assets/styles/reveal-theme.scss';
// hightlight
@import '@/assets/styles/highlight-theme.scss';

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
