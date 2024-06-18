<script lang="ts">
    import MetaHeaders from '$lib/components/MetaHeaders.svelte';
    import NameBlinker from '$lib/components/NameBlinker.svelte';
    import { Heading, P, A, Card } from 'flowbite-svelte';

    const calculateAge = (birthday: Date) => {
        //@ts-expect-error I don't want to argue with typescript anymore.
        return new Date(new Date() - new Date(birthday)).getFullYear() - 1970;
    };

    // Date format: yyyy-mm-dd ( Add one day bcs calculation is slightly off. )
    let age = calculateAge(new Date('2008-04-02'));
</script>

<svelte:head>
    <MetaHeaders />
</svelte:head>

<!-- Heading -->
<section class="mx-auto w-[calc(100%-10%)] sm:w-[calc(100%-35%)]">
    <Heading class="text-left" style="margin-bottom: 5rem;">
        Hi, I'm
        <NameBlinker />
    </Heading>
    <hr class="my-6 border-gray-500 dark:border-primary-600 sm:mx-auto lg:my-8" />
    <P>
        Hi, you've seen my name above so I'll skip that part. I'm a {age} year old girl who's into technology
        stuff.<br />
        I'm autistic, and technology (anything computers) is my hyperfixation, so I spend all of my time
        on it. Mainly I like to play with obscure computers, and make devices to stuff they weren't intended
        to, like the obligatory neofetch!<br />
        If you're against LGBTQ+ in any way, GTFO. I'm transgender and strongly want to fight for transgender
        rights.
    </P>
    <br />
    <Card class="w-max max-w-fit bg-primary-50 dark:border-primary-700 dark:bg-primary-800">
        <P>
            Want to know how to address me properly? Check out: <A
                target="_blank"
                href="https://prns.realfx.rocks/@sometime">prns.realfx.rocks/@sometime</A
            >
        </P>
    </Card>
</section>
