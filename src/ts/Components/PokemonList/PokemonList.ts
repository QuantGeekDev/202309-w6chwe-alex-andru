import Component from "../Component/Component.js";
import PokemonListItem from "../PokemonListItem/PokemonListItem.js";
import type Pokemon from "../../Pokemon/Pokemon.js";

class PokemonList extends Component {
  constructor(
    protected parentElement: Element,
    protected pokemonList: Pokemon[],
  ) {
    super(parentElement, "ul", "pokemon-list");
  }

  populate(): void {
    this.pokemonList.forEach((pokemon) => {
      console.log(pokemon);
      const pokemonListItem = new PokemonListItem(this.element, pokemon);
      pokemonListItem.render();
    });
  }
}

export default PokemonList;
