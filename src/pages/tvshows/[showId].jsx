import TvShowTabsTabs from "@/components/TvShowTabs"
import {
  IMAGE_BASE_URL_ORIGINAL,
  getShowById,
  getSimilarTVShows,
  getTVShowActorsById,
  getTVShowTrailerById,
} from "@/util/API"
import Image from "next/image"
import { BsFillStarFill } from "react-icons/bs"

function ShowDetails({ show, similarShows, trailer, actors }) {
  const [releseYear] = show.first_air_date.split("-")

  console.log(trailer)
  return (
    <main className="p-4 grid xl:grid-cols-6 xl:p-10 xl:my-10 grid-cols-1 sm:grid-col-1 gap-6 md:grid-cols-2 md:mt-16">
      <div className="w-full h-[620px] md:min-h-[600px] xl:min-h-[660px] xl:col-span-2 relative">
        <div className="absolute w-full h-[20%] bg-gradient-to-b from-black opacity-60 to-transparent z-10"></div>
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className=" object-cover"
          src={`${IMAGE_BASE_URL_ORIGINAL}${show?.poster_path}`}
          alt="cover image"
          priority
        />
        <div className="absolute bottom-0 w-full h-[20%] bg-gradient-to-t from-black opacity-60 to-transparent z-10"></div>
      </div>
      <div className="xl:col-span-4">
        <h1 className="dark:text-white text-4xl mb-4 font-bold flex justify-between">
          {show.original_name}
          <span className="flex items-center gap-2">
            {show.vote_average} <BsFillStarFill className="text-yellow-500" />
          </span>
        </h1>
        <p className="text-gray-400 text-sm flex items-center gap-2 mb-10">
          <span>{releseYear}</span>|<span>{show.adult ? "18+" : "16+"}</span>
        </p>
        {/* Tabs */}
        <TvShowTabsTabs
          show={show}
          similarMovies={similarShows}
          trailer={trailer}
          actors={actors}
        />
      </div>
    </main>
  )
}

export default ShowDetails

export async function getServerSideProps(context) {
  const { showId } = context.query
  const show = await getShowById(showId)
  const similarShows = await getSimilarTVShows(showId)
  const trailer = await getTVShowTrailerById(showId)
  const actors = await getTVShowActorsById(showId)

  return {
    props: {
      show,
      similarShows,
      trailer,
      actors,
    },
  }
}
