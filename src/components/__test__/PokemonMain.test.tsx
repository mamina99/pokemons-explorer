import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '../../store/store';
import usePokemon from '../hooks/usePokemons';
import PokemonMain from '../PokemonMain';
import { mockedData } from './utils/mocked-pokemons';

// Solves TypeScript Errors
const mockedUsePokemon = usePokemon as jest.Mock<any>; 

// Mock the module
jest.mock("../hooks/usePokemons");


describe("testing PokemonMain component", () => {

    beforeEach(() => {
		mockedUsePokemon.mockImplementation(() => ({ isLoading: true }));
	});
	afterEach(() => {
		jest.clearAllMocks();
	});

    it("Renders without crashing", () => {
        render(<Provider store={store}><PokemonMain /></Provider>);
    });


    it("render error message", async() => {
        mockedUsePokemon.mockImplementation(() => ({
			isError: true,	
	}));

        render(<Provider store={store}><PokemonMain /></Provider>);

        expect(await screen.findByText(/ERROR/i)).toBeInTheDocument();
    })

    it("should display some pokemons", async() => {
    
        mockedUsePokemon.mockImplementation(() => ({ isLoading: false ,pokemons: mockedData }));

        render(<Provider store={store}><PokemonMain /></Provider>);
        expect(await screen.findByText(/pikachuu/i)).toBeInTheDocument();

    })

    it("should open a modal when we click on the pokemon name", async() => {

        mockedUsePokemon.mockImplementation(() => ({ isLoading: false ,pokemons: mockedData }));

        render(<Provider store={store}><PokemonMain /></Provider>);
        expect(await screen.findByText(/pikachuu/i)).toBeInTheDocument();

        const btn = screen.getByTestId("pokemonName");

        fireEvent.click(btn);

        const modal = screen.getByRole("presentation"); 

        expect(modal).toBeVisible();

    })

})