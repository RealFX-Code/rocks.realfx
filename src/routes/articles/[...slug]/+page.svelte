<script lang=ts>
    import { onMount } from 'svelte';
    import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
    import MetaHeaders from '$lib/components/MetaHeaders.svelte';
    import type iMeta from '$lib/types/IMeta';

    export let data;

    let meta : iMeta = {
        title: "Loading...",
        description: "Loading..."
    }
    
    onMount(() => {
        if (data.story) {
            meta.title = data.story.full_slug;
            meta.description = data.story.name;
            useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
        }
    });

</script>

<svelte:head>
    <MetaHeaders meta={meta} />
</svelte:head>

<section class="mx-auto w-[calc(100%-10%)] sm:w-[calc(100%-35%)]">
    <div>
        {#if data.story}
            <StoryblokComponent blok={data.story.content} />
        {/if}
    </div>
</section>
