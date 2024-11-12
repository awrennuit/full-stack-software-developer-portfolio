import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { storyData } from '../utils/storyData';
import Header from './Header';

export default function Story() {
  const { slug } = useParams();
  const [story, setStory] = useState({});

  useEffect(() => {
    setStory(storyData.find(s => s.slug === slug));
  }, [slug]);
  return (
    <>
      <Header />
      <main className="main-container story">
        <Link to="/stories">
          <span>←</span> Back
        </Link>
        <h1>{story?.title}</h1>
        <p>{story?.content}</p>
      </main>
    </>
  );
}
