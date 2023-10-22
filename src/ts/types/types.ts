export interface PokemonFormApi {
  id: number;
  name: string;
  forms: { name: string; url: string };
  sprites: { front_default: string };
}
export interface PokemonListResponse {
  count: number;
  next: string | undefined;
  previous: string | undefined;
  results: PokemonListItem[];
}
export interface PokemonListItem {
  name: string;
  url: string;
}
