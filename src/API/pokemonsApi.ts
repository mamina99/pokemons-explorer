import axios from "axios";
import { QueryFunctionContext } from "react-query";

type arrayOfUrls = { url: string } ;
interface apiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results:any
}

const initUrl = "https://pokeapi.co/api/v2/pokemon?offest=20";

export async function fetchPokemons({ pageParam = initUrl  }: QueryFunctionContext): Promise<apiResponse> {
  const result = await axios.get(pageParam);
  const {
    data: { count, next, previous, results },
  } = result;

  return { count, next, previous, results };
}

export async function fetchArrayOfPokemons(urls: arrayOfUrls[]) {
  const result = await axios.all(urls.map(({ url }) => axios.get(url)));
  return result.map(({ data }) => data);
}
