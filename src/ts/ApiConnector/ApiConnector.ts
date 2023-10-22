import Pokemon from "../Pokemon/Pokemon.js";
import { type PokemonFormApi, type PokemonListResponse } from "../types/types";
class ApiConnector {
  baseUrl = "https://pokeapi.co/api/v2/";

  buildPokemonUrl(pokemonId: number): string {
    const category = "pokemon";
    const url = this.baseUrl + category + "/" + pokemonId.toString();
    return url;
  }

  buildPokemonListUrl(
    offsetFromListStart: number,
    numberOfPokemonsToDisplay: number,
  ) {
    const category = "pokemon";
    const offsetParam = `offset=${offsetFromListStart}`;
    const numberOfPokemonsToDisplayParam = `limit=${numberOfPokemonsToDisplay}`;

    const url = `${this.baseUrl}${category}?${offsetParam}&${numberOfPokemonsToDisplayParam}`;
    return url;
  }

  async getPokemonList(url: string): Promise<Pokemon[]> {
    const response = await fetch(url);

    const responseBody = (await response.json()) as PokemonListResponse;

    const responseResults = responseBody.results;

    const pokemonList: Pokemon[] = [];
    for await (const result of responseResults) {
      const { url: requestUrl } = result;

      const pokemon = await this.getPokemonByUrl(requestUrl);

      pokemonList.push(pokemon);
    }

    return pokemonList;
  }

  async getPokemonByUrl(url: string): Promise<Pokemon> {
    const response = await fetch(url);
    const responseBody = (await response.json()) as PokemonFormApi;
    const pokemon = new Pokemon(
      responseBody.id,
      responseBody.name,
      url,
      responseBody.sprites.front_default,
    );

    return pokemon;
  }

  async getPokemonById(id: number): Promise<Pokemon> {
    const url = this.buildPokemonUrl(id);
    const response = await fetch(url);
    const responseBody = (await response.json()) as PokemonFormApi;
    const pokemon = new Pokemon(
      responseBody.id,
      responseBody.name,
      url,
      responseBody.sprites.front_default,
    );

    return pokemon;
  }
}

export default ApiConnector;
