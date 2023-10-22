export interface Pokemon {
  id: number;
  name: string;
  url: string;
  avatarUrl: string;
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
