<script lang="ts">

    import {onMount} from "svelte";

    interface INavBarLink {
        friendlyName : String,
        href         : String
    };

    let NavBarLinks : Array<INavBarLink> = [
        {
            friendlyName : "Home",
            href         : "/"
        },
        {
            friendlyName : "Articles",
            href         : "/articles"
        }
    ];

    let path;

    onMount(function(){
        path = window.location.pathname
    });

    function handlePageClick(e){
        path = e.view.location.pathname;
    }

</script>

<svelte:window on:click={handlePageClick} />

<div class="navbar">
    <div class="links">
        {#each NavBarLinks as NavBarLink}
            <a
                data-sveltekit-reload
                class="link {path === NavBarLink.href ? "active" : ""}"
                href={NavBarLink.href}
            >
                {NavBarLink.friendlyName}
            </a>
        {/each}
    </div>
</div>

<style>

    a.active {
        text-decoration-line: underline;
    }

    a {
        text-decoration-line: none;
    }

    div.navbar {
        padding: 16px;
        margin: 0px;
        background-color: var(--bg-2);
    }

    div.navbar > div.links {
        width: 100%;
        
    }

    div.navbar > div.links > a.link {
        display: inline-block;
        padding: 0px 1rem;
    }

</style>