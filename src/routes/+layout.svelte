<script lang="ts">
    import '../app.pcss';
    import { page } from '$app/stores';

    import {
        Banner,
        P,
        DarkMode,
        Navbar,
        NavBrand,
        NavHamburger,
        NavUl,
        NavLi,
        Footer,
        FooterCopyright,
        FooterLinkGroup,
        FooterLink
    } from 'flowbite-svelte';

    $: activeUrl = $page.url.pathname;

    interface INavBarLink {
        friendlyName: string;
        href: string;
    }

    let NavBarLinks: Array<INavBarLink> = [
        {
            friendlyName: 'Home',
            href: '/'
        },
        {
            friendlyName: 'Articles',
            href: '/articles'
        },
        {
            friendlyName: 'Contact',
            href: '/contact'
        }
    ];

    interface iMeta {
        title: string,
        description: string,
        image: string
    }

    const meta : iMeta = {
        title: "rocks.realfx",
        description: "Hi, I'm Leah! I like to do tech stuff. My website does contain some stuff I've done, so be sure to check it out if you're into tech.",
        image: "https://www.realfx.rocks/media/image-001.webp"
    }

</script>

<svelte:head>
    <title>{meta.title}</title>
    <meta name="description" content="{meta.description}">
    <!-- Open Graph Meta Tags -->
    <meta property="og:url" content="http://rocks.realfx">
    <meta property="og:type" content="website">
    <meta property="og:title" content="{meta.title}">
    <meta property="og:description" content="{meta.description}">
    <meta property="og:image" content="{meta.image}">
    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta property="twitter:domain" content="rocks.realfx">
    <meta property="twitter:url" content="http://rocks.realfx">
    <meta name="twitter:title" content="{meta.title}">
    <meta name="twitter:description" content="{meta.description}">
    <meta name="twitter:image" content="{meta.image}">

    <script
        defer
        src="https://eu.umami.is/script.js"
        data-website-id="b6f3c066-b2b3-4c6b-9ec2-35f8b32da9ee"
    ></script>
    <link rel="preconnect" href="https://fonts.bunny.net" />
    <link
        href="https://fonts.bunny.net/css?family=atkinson-hyperlegible:400,700|jetbrains-mono:500"
        rel="stylesheet"
    />
</svelte:head>

<main>
    <!-- remove when done-->
    <Banner position="fixed" bannerType="bottom">
        <P>This website is under construction, Expect some features to be broken / missing.</P>
    </Banner>
    <Navbar class="bg-primary-50 dark:bg-primary-800">
        <NavBrand href="/">
            <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-primary-100">
                www.realfx.rocks
            </span>
        </NavBrand>
        <NavHamburger class="hover:bg-primary-100 dark:hover:bg-primary-700"></NavHamburger>
        <NavUl {activeUrl}>
            {#each NavBarLinks as NavBarLink}
                <NavLi
                    href={NavBarLink.href}
                    activeclass="dark:text-primary-100"
                    nonactiveclass="dark:text-primary-200"
                >
                    {NavBarLink.friendlyName}
                </NavLi>
            {/each}
        </NavUl>
    </Navbar>
    <div class="w-screen bg-primary-100 py-20 dark:bg-primary-900">
        <slot />
    </div>
    <Footer footertype="default" class="rounded-none bg-primary-50 dark:bg-primary-800">
        <div class="sm:flex sm:items-center sm:justify-between">
            <FooterLinkGroup
                ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
            >
                <DarkMode
                    class="m-4 w-min rounded-lg border p-2.5 text-sm text-primary-500 hover:bg-primary-100 focus:outline-none dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-700"
                />
                <FooterLink href="https://cloud.umami.is/share/d0HQmHbPbt9EiV29/www.realfx.rocks"
                    >Tracking Information</FooterLink
                >
                <FooterLink href="https://github.com/RealFX-Code/rocks.realfx"
                    >Website Repo</FooterLink
                >
                <FooterLink href="https://unsplash.com/photos/a-black-and-white-photo-of-a-curved-object-16KAzCV7UVI">
                    OpenGraph image
                </FooterLink>
            </FooterLinkGroup>
        </div>
        <hr class="my-6 border-gray-200 dark:border-primary-600 sm:mx-auto lg:my-8" />
        <FooterCopyright
            href="/redirect/github"
            by="Leah"
            spanClass="text-center mx-auto text-primary-400 w-full block"
        />
    </Footer>
</main>
