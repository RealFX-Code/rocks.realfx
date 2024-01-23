<script lang="ts">
	import { onMount } from 'svelte';

	interface INavBarLink {
		friendlyName: string;
		href: string;
	}

	let LeftAlignNavBarLinks: Array<INavBarLink> = [
		{
			friendlyName: 'Home',
			href: '/'
		},
		{
			friendlyName: 'Articles',
			href: '/articles'
		}
	];

	let RightAlignNavBarLinks: Array<INavBarLink> = [
		{
			friendlyName: 'Github',
			href: '/redirect/github'
		},
		{
			friendlyName: 'Discord',
			href: '/redirect/discord'
		}
	];

	let path: string;

	onMount(function () {
		path = window.location.pathname;
	});

	//@ts-expect-error idk what type this uses so here it's implicitly any.
	function handlePageClick(e) {
		path = e.view.location.pathname;
	}
</script>

<svelte:window on:click={handlePageClick} />

<div class="navbar">
	<div class="links">
		<div class="left">
			{#each LeftAlignNavBarLinks as NavBarLink}
				<a
					data-sveltekit-reload
					class="link {path === NavBarLink.href ? 'active' : ''}"
					href={NavBarLink.href}
				>
					{NavBarLink.friendlyName}
				</a>
			{/each}
		</div>
		<div class="right">
			{#each RightAlignNavBarLinks as NavBarLink}
				<a
					data-sveltekit-reload
					class="link {path === NavBarLink.href ? 'active' : ''}"
					href={NavBarLink.href}
				>
					{NavBarLink.friendlyName}
				</a>
			{/each}
		</div>
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

	div.navbar > div.links {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		grid-auto-columns: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas: '. .';
	}

	div.navbar > div.links > div.right {
		text-align: right;
	}

	div.navbar > div.links > div > a.link {
		display: inline-block;
		padding: 0px 1rem;
	}

	@media only screen and (max-width: 600px) {
		div.navbar > div.links > div.right {
			display: none;
		}
		div.navbar > div.links > div.left {
			text-align: center;
		}
		div.navbar > div.links {
			grid-template-columns: 1fr;
			grid-template-areas: '.';
		}
	}
</style>
