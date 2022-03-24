import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '../../store/store';
import BackToTop from '../BackToTop';
import usePokemon from '../hooks/usePokemons';

// Solves TypeScript Errors
const mockedUsePokemon = usePokemon as jest.Mock<any>; 

// Mock the module
jest.mock("../hooks/usePokemons");


describe("test back-to-top button", () => {

    beforeEach(() => {
		mockedUsePokemon.mockImplementation(() => ({ isLoading: true }));
	});
	afterEach(() => {
		jest.clearAllMocks();
	});

    it("shouldn't render the back-to-top button initially", () => {
        
        render(<Provider store={store}><BackToTop /></Provider>);
        const backToTopBtn =  screen.getByTestId("buttonContainer");   

        expect(backToTopBtn).toBeEmptyDOMElement()
        
    })

    it("should render the back-to-top button when we scroll to certain height",  () => {
        
        render(<Provider store={store}><BackToTop /></Provider>);
        const backToTopBtn =  screen.getByTestId("buttonContainer");  

        expect(backToTopBtn).toBeInTheDocument();

        fireEvent.scroll(window , { target: { pageYOffset: 305 } });

        expect(backToTopBtn).not.toBeEmptyDOMElement();
    })

    it("should send us back to the top of the page when the backToTopBtn is clicked", () => {

        const mockOnClick = jest.fn()
        render(<Provider store={store}><BackToTop /></Provider>);
        const backToTopContainer =  screen.getByTestId("buttonContainer");  

        expect(backToTopContainer).toBeInTheDocument();
        
        fireEvent.scroll(window , { target: { pageYOffset: 305 } });
        
        const backToTopBtn = screen.getByRole('button', {
                name: /backToTop/i
              }).onclick = mockOnClick;
        
         expect(backToTopContainer).not.toBeEmptyDOMElement();
    })
})