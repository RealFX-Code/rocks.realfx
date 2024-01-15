<script lang="ts">

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

</script>

<div class="navbar">
    <div class="links">
        {#each NavBarLinks as NavBarLink}
            <a class="link" href={NavBarLink.href}>{NavBarLink.friendlyName}</a>
        {/each}
    </div>
</div>

<style>

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