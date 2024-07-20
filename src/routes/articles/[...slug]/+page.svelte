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
            // useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
        }
    });

    const content = {
        _uid: '26eaf0df-6eaa-4145-834f-4364853f2a09',
        body: [
            {
                _uid: '0d99d04d-ab20-4aae-8b05-7b58b1aead51',
                content: 'Dumping CD/DVD-ROM from Linux!',
                component: 'heading',
                _editable:
                    '<!--#storyblok#{"name": "heading", "space": "284753", "uid": "0d99d04d-ab20-4aae-8b05-7b58b1aead51", "id": "513583570"}-->'
            }
        ],
        component: 'page',
        _editable:
            '<!--#storyblok#{"name": "page", "space": "284753", "uid": "26eaf0df-6eaa-4145-834f-4364853f2a09", "id": "513583570"}-->'
    };

    $: console.log(content);
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
