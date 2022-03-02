import { createSlice } from "@reduxjs/toolkit";
import { RootState} from "../store/store";
import Pokemon from "../components/interfaces/pokemon"

const myPokemon: Pokemon = {
    id: 0,
    abilities: [],
    base_experience: 0,
    height: 0,
    weight: 0,
    name: "",
    stats: [],
    types: [],
    sprites: []
};

const initialState = {
    pokemon: myPokemon
}; 

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        selectPokemon(state, payload){
            Object.assign(state.pokemon, payload.payload)
        }
    }
})


export const { selectPokemon } = pokemonSlice.actions;

export const selectedPokemon = ({ pokemon }: RootState) => pokemon;

export default pokemonSlice.reducer;