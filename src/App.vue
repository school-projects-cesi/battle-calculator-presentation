<template>
	<div class="reveal">
		<div class="slides">
			<section>
				<Blank />
				<Intro />
			</section>
			<Sommaire />
			<Objectifs />
			<section>
				<BackEnd />
				<BackEndTechnologies />
				<BackEndTools />
				<BackEndLibraries />
			</section>
			<section>
				<FrontEnd />
				<FrontEndTechnologies />
				<FrontEndTools />
				<FrontEndLibraries />
			</section>
			<Support />
			<!-- 05-Pilotage -->
			<section>
				<PilotageProject />
				<PilotageIssueHistory />
				<PilotageIssueName />
				<PilotageIssuePullRequest />
			</section>
			<!-- 06-Developpement -->
			<Mcd />
			<DeveloppementCodeFront />
			<DeveloppementCodeBack />
			<DeveloppementCss />
			<DeveloppementPresentation />
			<DeveloppementVideo />
			<!-- 07-Conclusion -->
			<ConclusionAtouts />
			<ConclusionDefauts />
			<ConclusionExtensions />
			<section>
				<ConclusionLimites />
				<ConclusionLimitesSecurity />
				<ConclusionLimitesSecurityFin />
			</section>
			<section>
				<Outro />
				<OutroLink />
			</section>
		</div>
	</div>
</template>

<script>
import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown'
import Highlight from 'reveal.js/plugin/highlight/highlight'
// slides
import Blank from './slides/01-Intro/00-Blank.vue'
import Intro from './slides/01-Intro/01-Intro.vue'
import Sommaire from './slides/02-Sommaire/01-Sommaire.vue'
import Objectifs from './slides/03-Objectifs/01-Objectifs.vue'
import BackEnd from './slides/04-OutilsTechnologies/01-BackEnd.vue'
import BackEndTechnologies from './slides/04-OutilsTechnologies/02-BackEnd-Technologies.vue'
import BackEndTools from './slides/04-OutilsTechnologies/03-BackEnd-Tools.vue'
import BackEndLibraries from './slides/04-OutilsTechnologies/04-BackEnd-Libraries.vue'
import FrontEnd from './slides/04-OutilsTechnologies/05-FrontEnd.vue'
import FrontEndTechnologies from './slides/04-OutilsTechnologies/06-FrontEnd-Technologies.vue'
import FrontEndTools from './slides/04-OutilsTechnologies/07-FrontEnd-Tools.vue'
import FrontEndLibraries from './slides/04-OutilsTechnologies/08-FrontEnd-Libraries.vue'
import Support from './slides/04-OutilsTechnologies/09-Support'
import PilotageProject from './slides/05-Pilotage/01-Project.vue'
import PilotageIssueName from './slides/05-Pilotage/02-Issue-Name.vue'
import PilotageIssueHistory from './slides/05-Pilotage/03-Issue-History.vue'
import PilotageIssuePullRequest from './slides/05-Pilotage/04-Issue-PullRequest.vue'
import Mcd from './slides/06-Developpement/01-Mcd.vue'
import DeveloppementCodeFront from './slides/06-Developpement/02-ExtraitCodeFront.vue'
import DeveloppementCodeBack from './slides/06-Developpement/03-ExtraitCodeBack.vue'
import DeveloppementCss from './slides/06-Developpement/04-Css.vue'
import DeveloppementPresentation from './slides/06-Developpement/05-Presentation.vue'
import DeveloppementVideo from './slides/06-Developpement/06-Video.vue'
import ConclusionAtouts from './slides/07-Conclusion/01 01-Atouts.vue'
import ConclusionDefauts from './slides/07-Conclusion/02 01-Defauts.vue'
import ConclusionExtensions from './slides/07-Conclusion/03 01-Extensions.vue'
import ConclusionLimites from './slides/07-Conclusion/04 01-Limites.vue'
import ConclusionLimitesSecurity from './slides/07-Conclusion/04 02-Limites-Security.vue'
import ConclusionLimitesSecurityFin from './slides/07-Conclusion/04 03-Limites-SecurityFin.vue'
import Outro from './slides/08-Outro/01-Outro.vue'
import OutroLink from './slides/08-Outro/02-Links.vue'

// main
export default {
	name: 'app',
	components: {
		Blank,
		Intro,
		Sommaire,
		Objectifs,
		BackEnd,
		BackEndTechnologies,
		BackEndTools,
		BackEndLibraries,
		FrontEnd,
		FrontEndTechnologies,
		FrontEndTools,
		FrontEndLibraries,
		Support,
		Mcd,
		PilotageProject,
		PilotageIssueName,
		PilotageIssueHistory,
		PilotageIssuePullRequest,
		DeveloppementCodeFront,
		DeveloppementCodeBack,
		DeveloppementCss,
		DeveloppementPresentation,
		DeveloppementVideo,
		ConclusionAtouts,
		ConclusionDefauts,
		ConclusionExtensions,
		ConclusionLimites,
		ConclusionLimitesSecurity,
		ConclusionLimitesSecurityFin,
		Outro,
		OutroLink
	},
	mounted() {
		Reveal.initialize({
			plugins: [Markdown, Highlight],
			hash: true,
			viewDistance: 10,
			slideNumber: 'c/t',
			dependencies: [
				{ src: 'http://localhost:3001/socket.io/socket.io.js', async: true },
				{ src: 'http://localhost:3001/remote.js', async: true }
			]
		})

		window.Reveal = Reveal
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
