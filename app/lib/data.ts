import { AnimeFullInfo, AnimePagination, TopAnime } from "@/app/lib/definitions";

export async function getTopAnime(page: number): Promise<{ data: TopAnime[], pagination: AnimePagination }> {
  try {
    const res = await fetch(`${process.env.BASE_URL}v4/top/anime?` + new URLSearchParams({ page: String(page) }));
    const jsonData: { data: TopAnime[], pagination: AnimePagination } = await res.json();
    const sortedData = jsonData.data.sort((a, b) => a.rank - b.rank);

    return { data: sortedData, pagination: jsonData.pagination };
  } catch (error) {
    console.error('Endpoint Error: ', error);
    throw new Error('Failed to fetch data');
  }
}

export async function getAnimeById(id: number): Promise<{ data: AnimeFullInfo }> {
  try {
    const res = await fetch(`${process.env.BASE_URL}v4/anime/${id}`);

    return res.json();
  } catch (error) {
    console.log('Endpoint Error: ', error);
    throw new Error('Failed to featch data');
  }
}
