<script>
    import { storyblokEditable } from '@storyblok/svelte';

    import { A, P } from 'flowbite-svelte';
    import { onMount } from 'svelte';

    /**
     * @type {import("@storyblok/svelte").SbBlokData}
     */
    export let blok;

    /**
     * @type {string}
     */
    let url;

    /**
     * @type {string}
     */
    let title;

    onMount(function () {
        // @ts-ignore
        url = blok?.link?.url;

        // @ts-ignore
        title = blok?.title;
    });
</script>

<div use:storyblokEditable={blok}>
    {#key url}
        {#if url}
            <A href={url}>
                {title}
            </A>
        {:else}
            <P>Loading link...</P>
        {/if}
    {/key}
</div>
