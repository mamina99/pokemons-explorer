import {useState} from 'react';
import { fetchPokemons, fetchArrayOfPokemons } from "../../API/pokemonsApi";
import Pokemon from "../interfaces/pokemon";
import { useInfiniteQuery } from "react-query";

export default function usePokemon ()  {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

   const {isError, isLoading, fetchNextPage, hasNextPage, isFetching, error, data, isSuccess} = useInfiniteQuery("allPokemons", fetchPokemons, {
    getNextPageParam:(lastPage: any) => {
      if (lastPage.next !== null) {
        return lastPage.next;
      }
      return undefined;
    },
    onSuccess:async ({pages}: any) => {
      const newPokemons = await fetchArrayOfPokemons([
        ...pages[pages.length - 1].results,
      ]);
      setPokemons((oldPokemons) => [...oldPokemons, ...newPokemons]);
    }
  });

  return { pokemons, isError, isLoading, fetchNextPage, hasNextPage, isFetching, error, data, isSuccess}
};
