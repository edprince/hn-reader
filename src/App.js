import React, { useState, useEffect } from 'react';
import "./App.css";
import { getStory, getTopStories } from "./Requests";
import Story from "./Story";

function App() {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    let storedItems = localStorage.getItem('storedItems')
    if (storedItems) {
      storedItems = JSON.parse(storedItems);
      setTopStories(storedItems);
    }
    async function fetchData() {
      let stories = [];

      let topStoriesData = await getTopStories();
      let storedStories = localStorage.getItem('topStories');
      if (storedStories === JSON.stringify(topStoriesData)) {
        console.log("Using local version");

        setTopStories(storedItems);
      } else {
        topStoriesData.forEach(async (story, i) => {
          let data = await getStory(story);
          stories = [data, ...stories];
          if (i === (topStoriesData.length - 1)) {
            setTopStories(stories);
            let string_stories = JSON.stringify(stories);
            localStorage.setItem('storedItems', string_stories);
          }
        });
        localStorage.setItem('topStories', JSON.stringify(topStoriesData));
      }

    }


    fetchData();
  }, []);


  return (
    <div className="App bg-gray-100 pb-10 px-2">
      <h2 className="text-indigo-600 text-center text-3xl leading-9 font-extrabold pt-4 mb-8">tech news</h2>
      {console.log(topStories)}
      { topStories.map((story) =>  <Story key={story.id} story={story} /> )}
    </div>
  );
}

export default App;
