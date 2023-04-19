<script>
	import FullscreenSection from '../components/FullscreenSection.svelte';

	const calculateAge = (birthday) => {
		return new Date(new Date() - new Date(birthday)).getFullYear() - 1970;
	};

	// Date format: yyyy-mm-dd ( Add one day bcs calculation is slightly off. )
	let x = calculateAge('2008-04-02');
</script>

<svelte:head>
	<title>736F6D6574696D65</title>
</svelte:head>

<div class="app">
	<FullscreenSection
		centerContent="true"
		background="linear-gradient(225deg, rgba(36,36,36,0.25) 0%, rgba(255,119,170,0.1) 50%, rgba(36,36,36,0.25) 100%)"
	>
		<h1>
			I'm <span class="bold" id="sometime-span">sometime</span>.
		</h1>
	</FullscreenSection>
	<FullscreenSection
		centerContent="true"
		background="linear-gradient(180deg, rgba(255,119,170,0.03) 0%, rgba(1,2,3,1) 100%)"
	>
		<h2>
			I'm a {x} year old kid who plays around with
			<span class="item">web-development</span>,
			<span class="item">Linux</span>, and <span class="item">Gaming</span> in my free-time.
		</h2>
	</FullscreenSection>
	<FullscreenSection
		centerContent="true"
		background="linear-gradient(190deg, rgba(1,2,3,1) 0%, rgba(255,119,170,0.1) 100%)"
	>
		<h2>
			Check out some of what I've done <a href="/projects">Here</a>!
		</h2>
	</FullscreenSection>
</div>

<style>
	.app {
		padding: 0px;
		margin: 0px;
		background-color: black;
	}

	h1 {
		color: white;
		font-weight: 400;
		font-size: 5rem;
	}

	h1 > span.bold {
		font-weight: 400;
		transition: font-weight ease 0.25s, margin ease 0.5s;
	}

	h1 > span.bold:hover {
		font-weight: 700;
		margin: 0px 0.75rem;
	}

	h2 {
		font-weight: 400;
		margin: 0px 10rem;
		color: white;
	}

	span.item {
		font-weight: 700;
		transition: color 0.25s ease, text-shadow 0.5s ease;
	}

	span.item:hover {
		color: #ff77aa;
		text-shadow: #ff77aa77 0px 0px 10px;
	}

	a,
	a:visited {
		text-decoration-color: #ffffff;
		color: #ffffff;
		transition: letter-spacing 0.25s ease;
	}
</style>
