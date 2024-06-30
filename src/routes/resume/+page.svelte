<script lang="ts">
    import { StoryblokComponent, useStoryblokBridge } from '@storyblok/svelte';

    import type iMeta from '$lib/types/IMeta.js';
    import MetaHeaders from '$lib/components/MetaHeaders.svelte';

    export let data;

    import { onMount } from 'svelte';

    onMount(function () {
        // remove big and ugly auth
        // I know you're technically not supposed to do this, but it works and that's what matters.
        // It's not like this is super sensitive either.
        window.history.pushState('', '', '/resume');

        if (data.story) {
            useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
        }
    });

    const meta: iMeta = {
        title: 'My resume.',
        description: "Short about who I am, and what I've done!"
    };
</script>

<svelte:head>
    <MetaHeaders {meta} />
</svelte:head>

<section class="mx-auto w-[calc(100%-10%)] sm:w-[calc(100%-35%)]">
    <div>
        {#if data.story}
            <StoryblokComponent blok={data.story.content} />
        {/if}
    </div>
</section>
