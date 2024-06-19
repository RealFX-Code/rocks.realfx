<script lang="ts">
    import { storyblokEditable } from '@storyblok/svelte';

    import { A, P } from 'flowbite-svelte';
    import { onMount } from 'svelte';

    export let blok;

    let url : string;
    let title : string;

    onMount(function () {

        // These do exist, but since they're dynamically added to "blok" they have no intellisense afaik.
        // If you'd like to know what is in these just add a "console.log(blok);" after "blok" is updated and you'll find out.
        url = blok?.link?.url;
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
