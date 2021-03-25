<template>
	<section>
		<small>Développement</small>
		<h2 class="r-fit-text">Extrait du code Front-End</h2>
		<pre><code data-trim data-noescape class="language-javascript">

async created() {
    // Formattage des dates en français
    moment().locale('fr')

    // Récupération des 10 meilleurs games à la création de la page
    this.games = await this.getGames(this.level)
},

methods: {
    // Méthode récupération des 10 meilleurs games
    getGames: async (level) => {

        // Réponse de l'API
        const response = await service.best(level)

        // Si erreur
        if (response.status !== 200) {
            this.$swal(
                { 
                    title: 'Une erreur est survenue pendant le chargement du top score' 
                }
            )
            return undefined
        }

        // On retourne les données des 10 meilleurs games
        return response.data.result
    },
},

		</code></pre>
	</section>
</template>
