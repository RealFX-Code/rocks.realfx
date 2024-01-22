export async function load({ params }) {
	const post = await import(`./../content/${params.slug}.md`);
	const { title, desc, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
        desc,
		date
	};
}