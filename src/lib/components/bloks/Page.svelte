<script lang="ts">
    // Look @ line 14 for explanation.

    //eslint-ignore-next-line
    //@ts-nocheck

    import { storyblokEditable, StoryblokComponent, type SbBlokData } from '@storyblok/svelte';

    export let blok: SbBlokData;
</script>

{#key blok}
    <div use:storyblokEditable={blok}>
        {#each blok.body as blok}
            <StoryblokComponent {blok} />
        {/each}
    </div>
{/key}
