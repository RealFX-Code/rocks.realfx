<script lang="ts">
    
    import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
    import MetaHeaders from '$lib/components/MetaHeaders.svelte';
    import type iMeta from '$lib/types/IMeta';
    import { onMount } from 'svelte';

    export let data;

    let meta: iMeta = {
        title: data.story.full_slug,
        description: data.story.name
    };

    onMount(async function () {
        if (data.story) {
            useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
        }
    });

    const content = data?.story?.content;
</script>

<svelte:head>
    <MetaHeaders {meta} />
</svelte:head>

<section class="mx-auto w-[calc(100%-10%)] sm:w-[calc(100%-35%)]">
    <div>
        {#if data.story}
            <StoryblokComponent blok={content} />
        {/if}
    </div>
</section>
