<script lang="ts">
    import { storyblokEditable, type SbBlokData } from '@storyblok/svelte';

    export let blok: SbBlokData;
</script>

<div use:storyblokEditable={blok}>
    <div class="my-10" />
</div>
