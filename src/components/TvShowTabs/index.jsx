import { useState } from "react"

import Overview from "./Overview"
import Trailer from "./Trailer"
import Actors from "./Actors"
import Companies from "./Companies"
import { BsFillStarFill } from "react-icons/bs"

function TvShowTabs({ tvShow, similarTvShows, trailer, actors }) {
  const [activeTab, setActiveTab] = useState(0)
  const [releseYear] = tvShow.first_air_date.split("-")

  const tabItems = [
    {
      label: "OVERVIEW",
      content: <Overview tvShow={tvShow} similar={similarTvShows} />,
    },
    { label: "TRAILER", content: <Trailer trailer={trailer} /> },
    { label: "ACTORS", content: <Actors actors={actors} /> },
    { label: "COMPANIES", content: <Companies tvShow={tvShow} /> },
  ]

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  return (
    <>
      <h1 className="dark:text-white xl:text-4xl text-3xl mb-4 font-bold flex justify-between">
        {tvShow.name}
        <span className="flex items-center gap-2">
          {tvShow.vote_average} <BsFillStarFill className="text-yellow-500" />
        </span>
      </h1>
      <p className="text-gray-400 text-sm flex items-center gap-2 mb-10">
        <span>{releseYear}</span>|
        <span>{tvShow.number_of_seasons} seasons</span>|
        <span>{tvShow.adult ? "18+" : "16+"}</span>
      </p>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap ">
          {tabItems.map((tab, index) => (
            <li
              onClick={() => handleTabClick(index)}
              key={index}
              className={`${
                activeTab === index
                  ? "active text-red-600 border-red-600 border-b-4 "
                  : "border-transparent"
              } w-1/4 py-4 border-b-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-center cursor-pointer`}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>
      <div>{tabItems[activeTab].content}</div>
    </>
  )
}

export default TvShowTabs
