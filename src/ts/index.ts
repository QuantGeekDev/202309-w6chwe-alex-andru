import ApiConnector from "./ApiConnector/ApiConnector.js";
import PokemonList from "./Components/PokemonList/PokemonList.js";

const app = document.querySelector(".app")!;
const connector = new ApiConnector();
const url = connector.buildPokemonListUrl(0, 10);
const pokemonList = await connector.getPokemonList(url);

const pokemonListComponent = new PokemonList(app, pokemonList);

pokemonListComponent.render();
