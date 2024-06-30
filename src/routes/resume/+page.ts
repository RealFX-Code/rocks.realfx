export async function load({ parent }) {
    const { storyblokApi } = await parent();
    const path = 'cdn/stories/resume';
    const dataStory = await storyblokApi.get(path, {
        version: 'draft'
    });
    return {
        story: dataStory.data.story
    };
}
