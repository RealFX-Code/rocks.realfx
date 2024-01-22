<script lang="ts">
	export let data;
</script>

<!--
    		<li>
            <fieldset>
                <legend>
                    <h2>
                        <a href={post.path}>
                            {post.meta.title}
                        </a>
                    </h2>
                </legend>
                <p>
                    {post.meta.desc}
                </p>
                <small>
                    Published: {post.meta.date}
                </small>
            </fieldset>
		</li>
-->

<h1>Articles</h1>

<ul>
	<hr />
	{#each data.posts as post}
		<li>
			<article>
				<h1 class="title"><a href={post.path}>{post.meta.title}</a></h1>
				<section>
					<p>
						{post.meta.desc}
					</p>
					<small>Published: {post.meta.date}</small>
				</section>
				<hr />
			</article>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
		padding: 0px;
	}

	h1.title {
		font-size: 5vmin;
	}

	article > section > small {
		margin: 16px 0;
	}

	article > section > p {
		font-size: 1.125rem;
	}

	article > hr {
		height: 1px;
		border: 0;
		border-top: 1px solid var(--fg-1);
		margin: 1em 0;
	}
</style>
