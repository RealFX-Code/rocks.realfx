<script lang="ts">
    1;
    import { Heading, Card } from 'flowbite-svelte';

    export let data;
</script>

<section class="mx-auto w-[calc(100%-10%)] sm:w-[calc(100%-35%)]">
    <Heading class="text-left" style="margin-bottom: 5rem;">Articles</Heading>

    {#if data}
        {#each data.Blocks as blok}
            <Card href={blok.link.story.full_slug} class="my-10">
                <Heading tag="h2" class="text-primary-300 hover:text-primary-400 hover:underline"
                    >{blok.link.story.name}</Heading
                >
            </Card>
        {/each}
    {/if}
</section>
