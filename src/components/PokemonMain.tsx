// @flow 
// @ts-ignore: Object is possibly 'null'
import {useState , useEffect} from 'react';
import Pokemon from "./interfaces/pokemon";
import usePokemons from "./hooks/usePokemons"
import Header from './Header';
import BackToTop  from './BackToTop';
import PokemonDetails from "./PokemonDetails";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { selectPokemon } from "../slices/pokemonSlice";
import { type } from 'os';

export default function  PokemonMain () {

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const choosePokemon = (pokemon: Pokemon) => {
    setOpen(true);
    dispatch(selectPokemon(pokemon));
  };

  const handleClose = () => setOpen(false);

  const {pokemons , isError, isLoading, fetchNextPage, hasNextPage, isFetching } = usePokemons();
  // ? when we reach the bottom of the page
  const handleScroll= () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
      fetchNextPage();
    }
  };
  useEffect(() => {
    if (hasNextPage) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage]);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <p>ERROR</p>;
  }

    return (
        <div className="mainContainer">
      <Header />
      <p data-testid="t">testing with jest</p>
      <div className="cardContainer">
        {pokemons.map((pokemon) => {
          return (
            <div key={pokemon.id} className="pokemonCard">
              <div className="pokemonIcon-container">
                <img
                  className="pokemonIcon"
                  src={
                    pokemon.sprites.other["official-artwork"]["front_default"]
                      ? pokemon.sprites.other["official-artwork"][
                          "front_default"
                        ]
                      : pokemon.sprites["front_shiny"]
                      ? pokemon.sprites["front_shiny"]
                      : "https://media2.giphy.com/media/DRfu7BT8ZK1uo/200.webp?cid=ecf05e47svqa05w3manovg6j7e81ths2633hgcrfn4vp1y1a&rid=200.webp&ct=g"
                  }
                  alt=""
                />
              </div>
              <div className="pokemonName-container">
                <h2
                data-testid="pokemonName"
                  onClick={() => choosePokemon(pokemon)}
                  className="pokemonName"
                >
                  {pokemon.name}
                </h2>
              </div>
            </div>
          );
        })}
        
        {open && <PokemonDetails show={open} close={handleClose} />}
        
      </div>
      <BackToTop />
    </div>
    );
};
