import usePokemon from "../hooks/usePokemons";
import PokemonMain from "../PokemonMain";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import {store} from "../../store/store";

// Solves TypeScript Errors
const mockedUsePokemon = usePokemon as jest.Mock<any>; 

// Mock the module
jest.mock("../hooks/usePokemons");

const mockedData =[ { 
    id: 1,
    abilities: [{
        "ability": {
        "name": "overgrow",
        "url": "https://pokeapi.co/api/v2/ability/65/"
        },
        "is_hidden": false,
        "slot": 1
        }],
    base_experience: 1,
    height: 110,
    weight: 110,
    name: "pikachu",
    stats: [{
        "base_stat": 60,
        "effort": 0,
        "stat": {
        "name": "hp",
        "url": "https://pokeapi.co/api/v2/stat/1/"
        }
        }],
    types: [{
        "slot": 1,
        "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
        }
        }],
    sprites: {
        other: {
            "official-artwork": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
                }
        }
    }
}];


describe("testing PokemonMain component", () => {

    beforeEach(() => {
		mockedUsePokemon.mockImplementation(() => ({ isLoading: true }));
	});
	afterEach(() => {
		jest.clearAllMocks();
	});

    //? pass
    it.skip("Renders without crashing", () => {
        render(<Provider store={store}><PokemonMain /></Provider>);
    });

     // ? pass
    it("render error message", async() => {
        mockedUsePokemon.mockImplementation(() => ({
			isError: true,	
	}));

        const view = render(<Provider store={store}><PokemonMain /></Provider>);

        expect(await view.findByText(/ERROR/i)).toBeInTheDocument();
    })

    it("display some data hopefully", async() => {
        

        mockedUsePokemon.mockImplementation(() => ({ isLoading: false ,pokemons: mockedData }));

        const view = render(<Provider store={store}><PokemonMain /></Provider>);
        expect(await view.findByText(/pikachu/i)).toBeInTheDocument();

        const btn = view.getByTestId("pokemonName");

        fireEvent.click(btn);

        expect(await view.getByRole("presentation")).toBeVisible();
    })
})