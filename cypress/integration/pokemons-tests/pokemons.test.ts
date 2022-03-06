// <reference types="cypress" />

describe("Pokemon end to end test", () => {
  it("Renders without crashing", () => {
    cy.visit("/");
  });

  // //! fetch pokemons on scroll
  it("fetch more Pokémons every time we reach the bottom of the screen", () => {
    cy.visit("/");
    cy.get(".pokemonCard")
      .should("have.length.greaterThan", 5)
      .then((pokemons) => {
        cy.window().scrollTo("bottom");
        cy.get(".pokemonCard").should("have.length", pokemons.length * 2);

        cy.window().scrollTo("bottom");
        cy.get(".pokemonCard").should("have.length", pokemons.length * 3);

        cy.window().scrollTo("bottom");
        cy.get(".pokemonCard").should("have.length", pokemons.length * 4);
      });
  });

  // ! back to top position
  it("brings us up to the top of the screen when we click back-to-top button  ", () => {
    cy.visit("/");
    cy.window().its("scrollY").should("equal", 0);

    cy.window().scrollTo("bottom");
    cy.get(".pokemonCard").should("have.length", 20);
    cy.window().its("scrollY").should("greaterThan", 0);

    cy.get(".back-to-top").click();
    cy.window().its("scrollY").should("equal", 0);
  });

  // ! test modal
  it("open and close the modal", () => {
    cy.visit("/");
    cy.get(".pokemonName-container").find("h2").first().click();
    cy.get(".modal-container").should("exist");
    cy.get(".modal-container").parent().click(0, 0);
    cy.get(".modal-container").should("not.exist");

    cy.get(".pokemonName-container").find("h2").last().click();
    cy.get(".modal-container").should("exist");
    cy.get(".modal-container").parent().click(0, 0);
    cy.get(".modal-container").should("not.exist");
  });
});
