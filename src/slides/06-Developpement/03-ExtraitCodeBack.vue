<template>
	<section>
		<small>Développement</small>
		<h2 class="r-fit-text">Extrait du code Back-End</h2>
		<pre><code data-trim data-noescape class="language-csharp">
[HttpGet(&quot;[action]/{level:int}&quot;)]
public async Task&lt;IEnumerable&lt;BestUserResponse&gt;&gt; Best(int? level)
{
    // Vérification si le numéro du niveau existe
    if (Level.CheckType(level, out LevelType levelType))
        throw new ApiProblemDetailsException(
            $&quot;Level with type {level} not exist.&quot;,
            StatusCodes.Status404NotFound
        );

    // Récupération des 10 meilleurs games par niveau
    IEnumerable&lt;(int, Game)&gt; result = await _service.GetBestUsersByLevelAsync((LevelType)level);

    // On retourne les 10 meilleurs games au format BestUserResponse
    return result.Select(g =&gt; new BestUserResponse
    {
        Position = g.Item1,
        IdUser = g.Item2.UserId,
        UserName = g.Item2.User.Username,
        Score = g.Item2.TotalScore,
        Date = g.Item2.EndedAt.Value
    });
}

		</code></pre>
	</section>
</template>
