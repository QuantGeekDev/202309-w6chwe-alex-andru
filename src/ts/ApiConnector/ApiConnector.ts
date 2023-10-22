import Pokemon from "../Pokemon/Pokemon";
import {
  type PokemonFormApi,
  type PokemonListItem,
  type PokemonListResponse,
} from "../types/types";
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

  async getPokemonList(url: string): Promise<PokemonListItem[]> {
    const response = await fetch(url);

    const responseBody = (await response.json()) as PokemonListResponse;

    const pokemonList = responseBody.results;

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
