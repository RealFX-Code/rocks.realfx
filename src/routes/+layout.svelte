<script lang="js">
	import './../styles/global.css';
	import { Hamburger } from 'svelte-hamburgers';
	import { fly, fade } from 'svelte/transition';
	import KnowSomeMore from '../components/KnowSomeMore.svelte'; // analytics :D
	import SiteInfo from '../components/SiteInfo.svelte';
	import Footer from '../components/Footer.svelte';

	export let open;

	let navLinks = [
		{
			label: 'Home',
			href: '/'
		},
		{
			label: 'Projects',
			href: '/projects'
		},
		{
			label: 'Contact Me',
			href: '/contact'
		}
	];

	export function openNav() {
		open = true;
	}

	export function closeNav() {
		open = false;
	}
</script>

<KnowSomeMore />
<SiteInfo />

<div id="app" data-nav={open}>
	<nav>
		<div id="burgr">
			<Hamburger --color="white" type="spring-r" bind:open />
		</div>
		{#if open}
			<div class="fullscreenNav" transition:fade>
				<div class="navContent">
					<h1 transition:fly={{ y: -15, delay: 50 }}>Site contents</h1>
					<ul>
						{#each navLinks as link, i}
							<li transition:fly={{ y: -15, delay: 50 * (i + 1) }}>
								<a on:click={closeNav} href={link.href}>
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		{/if}
	</nav>
	<main>
		<slot />
	</main>
	<footer id="layout-footer">
		<Footer />
	</footer>
</div>

<style>
	#burgr {
		width: fit-content;
		position: fixed;
		z-index: 3;
	}

	nav {
		position: fixed;
		width: fit-content;
		height: fit-content;
	}

	.fullscreenNav > * {
		color: white;
	}

	.fullscreenNav {
		position: absolute;
		top: 0;
		background-color: #000000aa;
		backdrop-filter: blur(50px);
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		z-index: 2;
	}

	.fullscreenNav > .navContent {
		text-align: center;
		margin: auto;
	}

	.fullscreenNav > .navContent > ul,
	.fullscreenNav > .navContent > ul > li {
		list-style-type: none;
		padding: 0px;
		text-align: center;
	}

	.fullscreenNav > .navContent > ul > li > a,
	.fullscreenNav > .navContent > ul > li > a:visited {
		padding: 0px;
		margin: 0px;
		font-size: 2rem;
		text-decoration: none;
		color: white;
		transition: letter-spacing 0.25s ease;
	}

	.fullscreenNav > .navContent > ul > li > a:hover {
		letter-spacing: 0.05rem;
	}
</style>
