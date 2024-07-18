<script lang="ts">
    import { storyblokEditable, type SbBlokData } from '@storyblok/svelte';

    import { A, P } from 'flowbite-svelte';
    import { onMount } from 'svelte';

    export let blok: SbBlokData;

    let url: string;
    let title: string;

    onMount(function () {
        // These do exist, but since they're dynamically added to "blok" they have no intellisense afaik.
        // If you'd like to know what is in these just add a "console.log(blok);" after "blok" is updated and you'll find out.

        //@ts-expect-error fdsnkjnfsdkjnlfsdjknl
        url = blok?.link?.url;
        //@ts-expect-errorfskdnjlkjnkjn
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
