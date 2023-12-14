import PosterImagePlaceHolder from "@/components/PosterImage/PosterImagePlaceHolder"
import TabsPlaceHolder from "@/components/Tabs/TabsPlaceHolder"
import {
  IMAGE_BASE_URL_ORIGINAL,
  getShowById,
  getSimilarTVShows,
  getTVShowActors,
  getTVShowTrailer,
} from "@/util/API"
import dynamic from "next/dynamic"
import Head from "next/head"
import Image from "next/image"
import { BsFillStarFill } from "react-icons/bs"

// lazy UI
const PosterImage = dynamic(() => import("@/components/PosterImage"), {
  loading: () => <PosterImagePlaceHolder />,
})

const TvShowTabs = dynamic(() => import("@/components/TvShowTabs"), {
  loading: () => <TabsPlaceHolder />,
})

function ShowDetails({ show, similarShows, trailer, actors }) {
  return (
    <>
      <Head>
        <title>{show.name}</title>
        <meta name="description" content={show.overview} />
      </Head>
      <main className="p-4 grid xl:grid-cols-9 xl:p-20 md:p-8 grid-cols-1 sm:grid-col-1 gap-24 md:grid-cols-2 md:mt-16">
        <PosterImage URL={`${IMAGE_BASE_URL_ORIGINAL}${show?.poster_path}`} />
        <div className="xl:col-span-5">
          {/* Tabs */}
          <TvShowTabs
            tvShow={show}
            similarTvShows={similarShows}
            trailer={trailer}
            actors={actors}
          />
        </div>
      </main>
      {/* <main>
        <div className="h-[200px]"></div>
        <Image
          width={200}
          height={200}
          alt="tvshowimage"
          // className="w-[200px] h-[400px] object-cover"
          src={`${IMAGE_BASE_URL_ORIGINAL}${show?.poster_path}`}
        />
        <h1 className="dark:text-white text-4xl mb-4 font-bold flex justify-between">
          {show.name}
          <span className="flex items-center gap-2">
            {show.vote_average} <BsFillStarFill className="text-yellow-500" />
          </span>
        </h1>
        <div>
          {similarShows.map((show) => (
            <h1
              key={show.id}
              className="dark:text-white text-4xl mb-4 font-bold flex justify-between"
            >
              {show.name}
            </h1>
          ))}
        </div>
      </main> */}
    </>
  )
}

export default ShowDetails

export async function getServerSideProps(context) {
  const { showId } = context.query
  const show = await getShowById(showId)
  const similarShows = await getSimilarTVShows(showId)
  const trailer = await getTVShowTrailer(showId)
  const actors = await getTVShowActors(showId)
  return {
    props: {
      show,
      similarShows,
      trailer,
      actors,
    },
  }
}
