import Image from "next/image";
import { FC } from "react";

import { getTopAnime } from "@/app/lib/data";
import Pagination from "@/app/ui/pagination";
import Link from "next/link";

interface Props {
  searchParams?: Promise<{ page?: string }>;
}

const page: FC<Props> = async (props) => {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;

  const animes = await getTopAnime(currentPage);

  return (
    <div className="w-full overflow-hidden">
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(0,_250px))] p-6 justify-center">
        {animes.data.map((item) => (
          <Link key={item.mal_id} href={`anime/${item.mal_id}`}>
            <div
              className="flex flex-col p-4 bg-white rounded-lg gap-y-2 w-[250px] h-[400px] hover:bg-gray-200 transition-all duration-[0.3s] cursor-pointer"
            >
              <div className="w-full h-[300px] relative">
                <Image
                  src={item.images.webp.image_url}
                  fill={true}
                  alt="Anime Image"
                />
              </div>
              <span className="text-gray-500">Rank: {item.rank}</span>
              <span className="text-gray-500">{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-5 flex w-full justify-center bg-gray-500 p-6 box-content">
        <Pagination totalPages={animes.pagination.last_visible_page} />
      </div>
    </div>
  );
};

export default page;
