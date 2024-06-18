<script lang="ts">
    import type iMeta from '$lib/types/IMeta';

    export let meta: iMeta = {
        title: 'rocks.realfx',
        description:
            "Hi, I'm Leah! I like to do tech stuff. My website does contain some stuff I've done, so be sure to check it out if you're into tech.",
        image: 'https://www.realfx.rocks/media/image-001.webp'
    };
</script>

<svelte:head>
    <title>{meta.title}</title>
    <meta name="description" content={meta.description} />
    <!-- Open Graph Meta Tags -->
    <meta property="og:url" content="http://rocks.realfx" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={meta.title} />
    <meta property="og:description" content={meta.description} />
    <meta property="og:image" content={meta.image} />
    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="rocks.realfx" />
    <meta property="twitter:url" content="http://rocks.realfx" />
    <meta name="twitter:title" content={meta.title} />
    <meta name="twitter:description" content={meta.description} />
    <meta name="twitter:image" content={meta.image} />
</svelte:head>
