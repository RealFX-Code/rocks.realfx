<script>
	export let url = 'https://www.realfx.rocks';
	export let title = 'sometimeeee';
	export let description = 'the one and only !!';
	export let type = 'website';

	// internal component magic
	let urlDomain = new URL(url).host;
</script>

<svelte:head>
	<meta name="description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:type" content={type} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={urlDomain} />
	<meta property="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="" />
</svelte:head>
