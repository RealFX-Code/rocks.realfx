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
</script>

<svelte:head>
    <script
        defer
        src="https://eu.umami.is/script.js"
        data-website-id="b6f3c066-b2b3-4c6b-9ec2-35f8b32da9ee"
    ></script>
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
                <FooterLink href="https://eu.umami.is/share/Ozvwzdl4vYAWCAxX/www.realfx.rocks"
                    >Tracking Information</FooterLink
                >
                <FooterLink href="https://github.com/RealFX-Code/rocks.realfx"
                    >Website Repo</FooterLink
                >
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
