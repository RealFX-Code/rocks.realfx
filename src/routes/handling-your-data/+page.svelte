<script>
	import FullscreenSection from '../../components/FullscreenSection.svelte';
</script>

<div class="app">
	<FullscreenSection
		centerContent="true"
		background="linear-gradient(65deg, rgba(36,36,36,0.25) 0%, rgba(255,255,255,0.1) 50%, rgba(36,36,36,0.25) 100%)"
	>
		<div class="content">
            <div class="title">
                <h1>
                    I use some
                    <span class="bold">tracking</span>
                </h1>
            </div>
			<div class="hrule">
				<hr />
			</div>
			<p>
				Or, I try. A lot of ad-blockers block my tracking. Don't worry though, I don't track alot,
				and what I do track is anonymous.
			</p>
		</div>
	</FullscreenSection>
	<FullscreenSection
		centerContent="true"
		background="linear-gradient(150deg, rgba(36,36,36,0.25) 0%, rgba(255,0,255,0.1) 50%, rgba(36,36,36,0.25) 100%)"
	>
		<div class="content plausible-ad">
			<h2>
				I use
				<a href="https://plausible.io/"> Plausible </a>
				.
			</h2>
			<div class="hrule">
				<hr />
			</div>
			<p>
				What this means is that all data i collect is stored securely and processed safely.
				Plausible is also open-source so you can see exactly how your data is processed.
			</p>
			<p>
				The list may seem a bit big, but it really isn't that big compared to other tracking
				solutions. But anyway, here's the complete list of what I collect:
			</p>
			<ul>
				<li>Visitor amount</li>
				<li>
					Site refferer / origin
					<ul>
						<li>Search Terms used to find my site</li>
					</ul>
				</li>
				<li>
					What path you visit
					<ul>
						<li>What path you first landed on</li>
						<li>What path you closed the site on</li>
						<li>The most viewed path</li>
					</ul>
				</li>
				<li>
					Geo-location
					<ul>
						<li>Country</li>
						<li>Region</li>
					</ul>
				</li>
				<li>
					Device
					<ul>
						<li>What browser you use</li>
						<li>What OS you use</li>
						<li>What screen-size you use</li>
					</ul>
				</li>
			</ul>
			<p>
				This data can't be used to / isn't being used to identify anyone. Neither am I using any of
				this data for anything other than curiosity. I am not selling your data, neither am I using
				it in any way that could be malicious.
			</p>
		</div>
	</FullscreenSection>
</div>

<style>
	.content {
		width: 50vw;
	}

	p,
	a,
	ul,
	li {
		color: white;
		font-size: 1.5rem;
	}

	.app {
		margin: 0px;
		padding: 0px;
		background-color: #000000;
	}

	h1 {
		color: white;
		font-weight: 400;
		font-size: 5rem;
	}
    
    @media screen and (max-width: 1600px) {
        .title > h1 {
            display: flex !important;
            flex-direction: column !important;
        }
    }

    .title > h1 {
        display: block;
    }

    .title > h1 > span.bold {
        justify-self: left;
        width: fit-content;
    }

	h1 > span.bold {
		font-weight: 400;
		transition: font-weight ease 0.25s, margin ease 0.5s;
	}

	h1 > span.bold:hover {
		font-weight: 700;
		margin: 0px 0.75rem;
	}

	h2,
	h2 > a {
		font-weight: 400;
		color: white;
		font-size: 4rem;
	}

	a,
	a:visited {
		text-decoration-color: #ffffff;
		color: #ffffff;
		transition: letter-spacing 0.25s ease;
	}
</style>
