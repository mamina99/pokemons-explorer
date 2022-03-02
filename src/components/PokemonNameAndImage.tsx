import { useSelector } from "react-redux";
import { selectedPokemon } from "../slices/pokemonSlice";

export default function PokemonNameAndImage() {
const {pokemon: { sprites, name }} =  useSelector(selectedPokemon);

  return (
    <div className="left-wrapper">
      <div className="image-wrapper">
        <img
          className="pokemonIcon"
          src={
            sprites.other["official-artwork"]["front_default"]
              ? sprites.other["official-artwork"]["front_default"]
              : sprites["front_shiny"]
              ? sprites["front_shiny"]
              : "https://media2.giphy.com/media/DRfu7BT8ZK1uo/200.webp?cid=ecf05e47svqa05w3manovg6j7e81ths2633hgcrfn4vp1y1a&rid=200.webp&ct=g"
          }
          alt=""
        />
      </div>
      <div className="name-wrapper">
        <h5 className="pokemonName-modal">{name}</h5>
      </div>
    </div>
  );
}
