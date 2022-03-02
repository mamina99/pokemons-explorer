import axios from "axios";
import { QueryFunctionContext } from "react-query";

type arrayOfUrls = { url: string } ;


const initUrl = "https://pokeapi.co/api/v2/pokemon?offest=20";

export async function fetchPokemons({ pageParam = initUrl  }: QueryFunctionContext) {
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
