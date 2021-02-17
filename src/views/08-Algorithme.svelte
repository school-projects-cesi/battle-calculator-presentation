<script>
	import LevelOperations from '../components/LevelOperations.svelte'
	import LevelOperation from '../components/LevelOperation.svelte'
	import LevelExemple from '../components/LevelExemple.svelte'
</script>

<section data-auto-animate>
	<h3>Algorithme</h3>
	<div class="fragment">
		<LevelOperations />
	</div>
	<div class="fragment" style="position: absolute">
		<LevelOperation />
	</div>
</section>

<section data-auto-animate>
	<h3>Algorithme</h3>
	<LevelExemple />
</section>
