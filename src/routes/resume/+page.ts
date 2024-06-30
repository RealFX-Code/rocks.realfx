export async function load({ params, parent }) {
    const { storyblokApi } = await parent();
    let path = 'cdn/stories/resume';
    const dataStory = await storyblokApi.get(path, {
        version: 'draft'
    });
    return {
        story: dataStory.data.story
    };
}
