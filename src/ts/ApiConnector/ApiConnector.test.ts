import { type Pokemon } from "../types/types";
import ApiConnector from "./ApiConnector";

describe("Given an instance of ApiConnector", () => {
  describe("When buildPokemonUrl(2) is called", () => {
    test("Returns 'https://pokeapi.co/api/v2/pokemon/2'", () => {
      const connector = new ApiConnector();
      const pokemonId = 2;
      const expectedUrl = "https://pokeapi.co/api/v2/pokemon/2";

      const actualUrl = connector.buildPokemonUrl(pokemonId);

      expect(actualUrl).toBe(expectedUrl);
    });

    describe("When buildPokemonListUrl(0, 20) is called", () => {
      test("Returns 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')", () => {
        const connector = new ApiConnector();
        const offsetFromListStart = 0;
        const numberOfPokemonsToDisplay = 20;
        const expectedUrl =
          "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";

        const actualUrl = connector.buildPokemonListUrl(
          offsetFromListStart,
          numberOfPokemonsToDisplay,
        );

        expect(actualUrl).toBe(expectedUrl);
      });
    });

    describe("When getPokemonList('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20') is called)", () => {
      test("Returns an array of length 20", async () => {
        const connector = new ApiConnector();
        const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
        const expectedResponseLength = 20;
        const pokemonResponse = await connector.getPokemonList(url);
        const pokemonResponseLength = pokemonResponse.length;

        expect(pokemonResponseLength).toBe(expectedResponseLength);
      });
    });

    describe("When getPokemonByUrl('https://pokeapi.co/api/v2/pokemon/2/') is called)", () => {
      test("Returns object whose 'name' parameter returns 'ivysaur'", async () => {
        const connector = new ApiConnector();
        const url = "https://pokeapi.co/api/v2/pokemon/2/";
        const expectedName = "ivysaur";
        const pokemon: Pokemon = await connector.getPokemonByUrl(url);
        const pokemonName = pokemon.name;

        expect(pokemonName).toBe(expectedName);
      });
    });
  });
});
