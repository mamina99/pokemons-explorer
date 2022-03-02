import {store} from "../../store/store";
import { selectPokemon } from "../../slices/pokemonSlice";

test("check that the init state is empty", () => {
  let state = store.getState().pokemon;
  expect(state.pokemon).toEqual({id: 0,
    abilities: [],
    base_experience: 0,
    height: 0,
    weight: 0,
    name: "",
    stats: [],
    types: [],
    sprites: []});
});

test("check that the init state changes when we dispatch a new action", () => {
  const pokemon = { name: "pikachu", height: 10 };

  store.dispatch(selectPokemon(pokemon));
  let state = store.getState().pokemon;

  expect(state.pokemon.name).toBe("pikachu");
});
