<script>
	export let data;
</script>

<article>
	<h1 class="title">{data.title}</h1>
	<section>
		<p>
			{data.desc}
		</p>
		<small>Published: {data.date}</small>
	</section>
	<hr />
	<svelte:component this={data.content} />
</article>

<style>
	h1.title {
		font-size: 10vmin;
	}

	article > section > small {
		margin: 16px 0;
	}

	article > section > p {
		font-size: 1.5rem;
	}

	article > hr {
		height: 1px;
		border: 0;
		border-top: 1px solid var(--fg-1);
		margin: 1em 0;
	}
</style>
