<script lang="ts">
    import { page } from '$app/stores';

    import { A, Heading, P } from 'flowbite-svelte';
</script>

<section class="mx-auto w-[calc(100%-10%)] sm:w-[calc(100%-35%)]">
    <Heading class="text-primary-900 dark:text-primary-50">
        {$page.status}: {$page.error?.message}
    </Heading>
    <hr class="my-10 border-primary-800 dark:border-primary-500" />
    <P>
        You seem lost, Why not go back to <A href="/#">the known area</A>?
    </P>
</section>
