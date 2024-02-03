import React from 'react';
import "./know.css"
const Knowledge = () => {
  const topics = [
    { id: 1, title: 'Carbon Footprint ?', link: 'https://www.wikipedia.org/' },
    { id: 2, title: 'Live Sustainable ', link: 'https://www.wikipedia.org/v' },
    { id: 3, title: 'Fast Fashion and Carbon Emission', link: 'https://www.wikipedia.org/' },
  ];

  return (
    <div>
    <h1 className='display-3 p-3'>Know More</h1>
    <ul className="list-unstyled">
      {topics.map((topic) => (
        <li key={topic.id}>
          <h5>
          <a href={topic.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none" id='text'>
            {topic.title}
          </a>
          </h5>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default Knowledge;
