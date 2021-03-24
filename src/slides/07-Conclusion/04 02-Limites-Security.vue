<template>
	<section>
		<small>Conclusion - Limite</small>
		<h2>Sécurité</h2>
		<pre><code data-trim data-noescape class="language-javascript" data-line-numbers="0-200|1-6|8-11|14-23|26|0-200">
// récupère le token d'authentification
const authTokenRequest = await axios.post('/auth/login', {
	username: 'hacker@viacesi.fr',
	password: 'password',
})
const authToken = authTokenRequest.data.result.token

// création d'une game
const createGameRequest = await axios.post('/games', { level: 1 }, authHeader(authToken))
const { id: gameId } = createGameRequest.data.result
let score = createGameRequest.data.result.score

// boucle pour générer des scores valides
const iteration = 50
for (let i = 0; i &#60; iteration; i++) {
	const scoreRequest = await axios.patch(
		`/games/${gameId}/scores/${score.id}`,
		{ result: score.result },
		authHeader(authToken)
	)
	score = scoreRequest.data.result.next
	console.log('+1 Score')
}

// fin d'une game
await axios.patch(`/games/${gameId}/end`, {}, authHeader(authToken))

console.log(`${iteration} points ajoutés`)
		</code></pre>
	</section>
</template>
