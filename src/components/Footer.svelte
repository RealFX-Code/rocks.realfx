<script>
	// nice n big footer
</script>

<footer id="footer-footer" class="divided">
	<div class="footerContent">
		<div class="footerSection link">
			<a href="https://www.realfx.rocks"> www.realfx.rocks </a>
		</div>
		<div class="footerSection">
			<div class="contrib">
				<p>
					Contributor? &rarr; <a href="https://github.com/RealFX-Code/rocks.realfx/"
						>Check out this project's repo!</a
					>
				</p>
			</div>
		</div>
	</div>
	<div class="footerContent">
		<div class="poweredBy">
			<p>This website is powered by:</p>
			<ul class="stack">
				<li>CloudFlare Pages</li>
				<li>SvelteKit</li>
				<li>GitHub</li>
				<li>Plausible</li>
			</ul>
		</div>
		<div class="footerSection data">
			<p>
				I collect some data. &rarr; <a href="/handling-your-data">Here's what I collect.</a>
			</p>
		</div>
	</div>
</footer>

<style>
	a:hover {
		text-decoration: underline;
	}

	a,
	a:visited {
		text-decoration: none;
		text-decoration-color: #ffffff;
		color: #ffffff;
		transition: letter-spacing 0.25s ease;
	}

	.footerSection {
		justify-self: center;
		align-self: center;
	}

	.link {
		font-size: 2rem;
		font-weight: 400;
	}

	footer {
		background-color: #010203;
		color: #ffffff;
	}

	.poweredBy,
	.contrib {
		justify-self: center;
		align-self: center;
	}

	.poweredBy,
	.data,
	.data > p > a {
		color: #777777;
	}

	.data > p > a:hover {
		text-decoration-color: #777777;
	}

	.footerContent {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}

	.divided {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}
</style>
