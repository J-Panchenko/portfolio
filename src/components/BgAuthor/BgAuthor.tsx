import { externalLinks } from 'data';
import './BgAuthor.scss';

function BgAuthor() {

  return (
    <div className="bg-author">
      <p className="bg-author__bg-text">
        <span>Background photo by </span>
        <a className="bg-author__bg-link" href={externalLinks.bgCreator}>Annie Spratt</a>
        <span> on </span>
        <a className="bg-author__bg-link" href={externalLinks.bgSite}>Unsplash</a>
      </p>
    </div>
  );
}

export default BgAuthor;
