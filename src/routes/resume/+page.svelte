<script lang="ts">
    import { StoryblokComponent, useStoryblokBridge } from '@storyblok/svelte';

    export let data;

    import { onMount } from 'svelte';


    onMount(function(){
        if(data.story){
            useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
        }
    });

</script>

<section class="mx-auto w-[calc(100%-10%)] sm:w-[calc(100%-35%)]">
    <div>
        {#if data.story}
            <StoryblokComponent blok={data.story.content} />
        {/if}
    </div>
</section>