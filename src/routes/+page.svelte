<script lang="ts">
    import NameBlinker from '$lib/components/NameBlinker.svelte';
    import { Heading, P, Card } from 'flowbite-svelte';
</script>

<!-- Heading -->
<section class="mx-auto w-[calc(100%-10%)] sm:w-[calc(100%-35%)]">
    <Heading class="text-left" style="margin-bottom: 5rem;">
        Hi, I'm
        <NameBlinker />
    </Heading>
    <hr class="my-6 border-gray-500 dark:border-primary-600 sm:mx-auto lg:my-8" />
    <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cumque exercitationem
        quaerat reiciendis quo numquam enim dicta et quis minus officiis, optio explicabo dolorum
        tempora, atque in laudantium. Itaque, vel!
    </P>
    <br />
    <Card class="w-max max-w-fit bg-primary-50 dark:border-primary-700 dark:bg-primary-800">
        <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eos totam numquam
            adipisci facere omnis aspernatur quod tempore maxime corrupti quaerat earum doloremque?
            Corrupti quibusdam sequi deleniti assumenda laboriosam dignissimos?
        </P>
    </Card>
</section>
