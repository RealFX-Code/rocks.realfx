<script>
	export let title = 'www.realfx.rocks';
	export let subtitle = 'This website.';
	export let description = 'My homepage, Developed to show off.';
	export let repo = 'https://github.com/RealFX-Code/rocks.realfx';
</script>

<div class="project">
	<div class="title">
		<a href={repo}>
			<h1>
				{title}
			</h1>
		</a>
		<small>
			{subtitle}
		</small>
	</div>
	<hr />
	<h2>
		{description}
	</h2>
</div>

<style>
	.project {
		width: 50vmax;
	}

	.title {
		display: flex;
		flex-direction: column;
	}

	h1 {
		margin: 1rem auto;
	}

	h1,
	.title > small {
		color: white;
		font-weight: 400;
		font-size: 5rem;
	}

	.title > small {
		font-size: 3rem;
	}

	hr {
		margin: 5rem 0px;
	}

	h2 {
		display: flex;
		flex-direction: column;
		font-weight: 400;
		margin: 0px 10rem;
		color: white;
	}

	a,
	a:visited {
		text-decoration-thickness: 0.25rem;
		text-decoration-color: #ffffff;
		color: #77aaff;
		transition: letter-spacing 0.25s ease;
	}
</style>
