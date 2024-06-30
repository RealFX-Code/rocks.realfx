<script lang="ts">
    import { storyblokEditable, type SbBlokData } from '@storyblok/svelte';

    import { Span } from 'flowbite-svelte';

    export let blok: SbBlokData;
</script>

<div use:storyblokEditable={blok}>
    <Span
        class="mx-auto block w-full whitespace-pre-wrap bg-primary-800 p-5 font-mono text-primary-50"
    >
        {blok.content?.toString()}
    </Span>
</div>
