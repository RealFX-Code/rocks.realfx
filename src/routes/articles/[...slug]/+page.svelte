<script lang="ts">
    import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
    import MetaHeaders from '$lib/components/MetaHeaders.svelte';
    import type iMeta from '$lib/types/IMeta';
    import { onMount } from 'svelte';

    export let data;

    let meta: iMeta = {
        title: 'Loading...',
        description: 'Loading...'
    };
    
    if (data.story) {
        meta.title = data.story.full_slug;
        meta.description = data.story.name;
    } else {
        meta.title = "Nothing";
        meta.description = "No such article was found, Maybe you're looking for something hidden? Well, You won't find it here."
    }

    onMount(function(){
        if(data.story){
            useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
        }
    });

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
