<script>
    // eslint-disable-next-line
    // @ts-nocheck

    import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';

    /**
     * @type {import("@storyblok/svelte").SbBlokData}
     */
    export let blok;
</script>

{#key blok}
    <div use:storyblokEditable={blok}>
        {#each blok.body as blok}
            <StoryblokComponent {blok} />
        {/each}
    </div>
{/key}
