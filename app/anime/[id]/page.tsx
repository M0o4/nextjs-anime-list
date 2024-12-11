import Image from "next/image";
import { FC } from "react";

import { getAnimeById } from "@/app/lib/data";

interface Props {
  params: Promise<{ id: string }>;
}

const Page: FC<Props> = async (props) => {
  const { id } = await props.params;
  const anime = await getAnimeById(Number(id));

  return (
    <div className="overflow-hidden p-6 box-border w-full">
      <div className="w-full box-border flex gap-6 p-6 bg-gray-700">
        <div className="w-[260px] h-[318px] relative">
          <Image
            src={anime.data.images.webp.large_image_url}
            fill
            alt="Anime Image"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex-col gap-6 flex w-full box-border">
            <div className="w-full border-solid border-b-2 border-gray-800 p-2 box-border">
              <span className="text-lg font-semibold">{anime.data.title}</span>
            </div>

            <div className="flex gap-2">
              <div className="p-2 box-border flex-col gap-1 w-fit items-center justify-center flex">
                <div className="bg-blue-500 p-1 w-fit rounded-md">Score</div>
                <span className="text-sm font-medium">{anime.data.score}</span>
              </div>

              <div className="flex gap-1 p-2">
                <span className="text-sm font-semibold">Ranked #{anime.data.rank}</span>
              </div>
            </div>

            <div className="w-full border-solid border-t-2 border-gray-800 p-2 box-border">
              <div className="w-full p-2 box-border">
                <span className="text-lg font-semibold">Synopsis</span>
              </div>

              <span className="text-sm font-medium">{anime.data.synopsis}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
