export interface BasePokemon {
  id: number;
  name: string;
  url: string;
  avatarUrl: string;
  types: string[];
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
