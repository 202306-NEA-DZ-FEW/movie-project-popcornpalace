import Link from "next/link"

import { IMAGE_BASE_URL } from "@/util/API"
import Image from "next/image"

function Actors({ actors }) {
  return (
    <div className="grid grid-cols-3 xl:grid-cols-4 gap-8 py-8 xl:h-[540px] md:h-[440px] overflow-y-scroll no-scrollbar">
      {actors.map((actor) => (
        <div
          className="flex flex-col items-center justify-start gap-2"
          key={actor.id}
        >
          <Image
            width={300}
            height={300}
            src={`${IMAGE_BASE_URL}${actor.profile_path}`}
            className="h-[60px] w-[60px] object-cover rounded-[50%] border-red-500 border-4"
            alt={actor.name}
          />

          <Link href={`/actors/${actor.id}`} className="text-center">
            <p className="dark:text-white text-sm font-semibold">
              {actor.character}
            </p>
            <p className="dark:text-white text-xs  text-gray-400">
              {actor.name}
            </p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Actors
