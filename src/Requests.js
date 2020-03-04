export let getStory = async (id) => {
    let url = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
    return await req(url);
}

export let getTopStories = async () => {
    let url = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
    let results = await req(url);
    results.splice(50);
    return results;
}

async function req(url) {
    let response = await fetch(url)
    let data = await response.json();
    return data;
}
