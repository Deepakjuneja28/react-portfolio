import React from "react";
import ecomerce from "../assets/portfolio/ecomerce.jpg";
import movie from "../assets/portfolio/movie.jpg";
import tushar from "../assets/portfolio/tushar.png";
import giffy from "../assets/portfolio/giffy.png";
import weathify from "../assets/portfolio/weathify.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ecomerce,
      href: "https://deepakjuneja28.github.io/Ecommerce-website/",
      link: "https://github.com/Deepakjuneja28/Ecommerce-website",
    },
    {
      id: 2,
      src: tushar,
      href: "https://next-portfolio-blue-seven.vercel.app/",
      link: "https://github.com/Deepakjuneja28/next-portfolio",
    },
    {
      id: 3,
      src: movie,
      href: "https://deepakjuneja28.github.io/Movie-overviewer/",
      link: "https://github.com/Deepakjuneja28/Movie-overviewer",
    },
    {
      id: 4,
      src: giffy,
      href: "https://giffy-genrator-git-main-deepakjuneja28.vercel.app/",
      link: "https://github.com/Deepakjuneja28/giffy-genrator",
    },
    {
      id: 4,
      src: weathify,
      href: "https://shimmering-khapse-3c158e.netlify.app/",
      link: "https://github.com/Deepakjuneja28/Weathify",
    },
  ];

  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen"
    >
      <div className="max-w-screen-lg p-4c mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className=" rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={href} target="_blank" rel="noreferrer">
                  {" "}
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>

                <a href={link} target="_blank" rel="noreferrer">
                  {" "}
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
