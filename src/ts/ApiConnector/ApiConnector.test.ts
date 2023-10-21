import ApiConnector from "./ApiConnector";

describe("Given an instance of ApiConnector", () => {
  describe("When buildUrl(2) is called", () => {
    test("Returns 'https://pokeapi.co/api/v2/pokemon/2'", () => {
      const connector = new ApiConnector();
      const pokemonId = 2;
      const expectedUrl = "https://pokeapi.co/api/v2/pokemon/2";

      const actualUrl = connector.buildUrl(pokemonId);

      expect(actualUrl).toBe(expectedUrl);
    });
  });
});
