import { Link, useParams } from 'react-router-dom';
import MusicHeader from '../MusicHeader';
import AlbumIdeaGenerator from './AlbumIdeaGenerator/AlbumIdeaGenerator';
import SongIdeaGenerator from './SongIdeaGenerator/SongIdeaGenerator';

export default function IdeaGenerator() {
  const { slug } = useParams();

  const tabList = [
    {
      id: 0,
      label: 'album',
      url: '/idea-generator/album',
    },
    {
      id: 1,
      label: 'song',
      url: '/idea-generator/song',
    },
  ];

  return (
    <div className="u-music-container idea-generator">
      <MusicHeader />
      <div className="idea-generator__inner">
        <div className="idea-generator__tab-container">
          {tabList.map(t => (
            <Link
              className={slug === t.label ? 'active' : null}
              disabled={slug === t.label}
              key={t.id}
              to={t.url}
            >
              {t.label}
            </Link>
          ))}
        </div>
        {slug === 'song' ? <SongIdeaGenerator /> : <AlbumIdeaGenerator />}
      </div>
    </div>
  );
}
