import React, { useState } from "react";
import { Heading } from "../common/Heading";
import { portfolio } from "../data/dummydata";
import ChatIcon from "@mui/icons-material/Chat";
import GitHubIcon from "@mui/icons-material/GitHub";

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))];

export const Portfolio = () => {
  const [list, setLists] = useState(portfolio);
  const [category] = useState(allCategory);

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category);
    setLists(newItems);
    if (category === "all") {
      setLists(portfolio);
      return;
    }
  };

  return (
    <>
      <article>
        <div className='container'>
          <Heading title='Portfolio' />
          <div className='catButton'>
            {category.map((category, index) => (
              <button
                className='primaryBtn'
                key={index}
                onClick={() => filterItems(category)}
                data-aos='zoom-out-down'
              >
                {category}
              </button>
            ))}
          </div>
          <div className='content grid2'>
            {list.map((item) => (
              <div className='box' key={item.id} data-aos='fade-up'>
                <div className='img'>
                  <img src={item.cover} alt={item.title} />
                </div>
                <div className='overlay'>
                  <div className="overlay-content">
                    <div className='title'><h3>{item.title}</h3></div>
                    <p className='contributors'>{item.contributors}</p>
                    <p className='techStack'>{item.techStack}</p>
                    <div className='buttons'>
                      <a href={item.webLink} target='_blank' rel='noreferrer'>
                        <ChatIcon />
                      </a>
                      <a href={item.gitLink} target='_blank' rel='noreferrer'>
                        <GitHubIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};
