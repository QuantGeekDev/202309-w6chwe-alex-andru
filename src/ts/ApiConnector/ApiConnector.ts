import { type PokemonListItem, type PokemonListResponse } from "../types/types";
class ApiConnector {
  baseUrl = "https://pokeapi.co/api/v2/";
  category = "pokemon";

  buildPokemonUrl(pokemonId: number): string {
    const url = this.baseUrl + this.category + "/" + pokemonId.toString();
    return url;
  }

  buildPokemonListUrl(
    offsetFromListStart: number,
    numberOfPokemonsToDisplay: number,
  ) {
    const offsetParam = `offset=${offsetFromListStart}`;
    const numberOfPokemonsToDisplayParam = `limit=${numberOfPokemonsToDisplay}`;

    const url = `${this.baseUrl}${this.category}?${offsetParam}&${numberOfPokemonsToDisplayParam}`;
    return url;
  }

  async getPokemonList(url: string): Promise<PokemonListItem[]> {
    const response = await fetch(url);

    const responseBody = (await response.json()) as PokemonListResponse;
    const pokemonlist = responseBody.results;

    return pokemonlist;
  }
}

export default ApiConnector;
