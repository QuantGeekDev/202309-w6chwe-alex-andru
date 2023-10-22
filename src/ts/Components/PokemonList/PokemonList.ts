import Component from "../Component/Component.js";
class PokemonList extends Component {
  constructor(protected parentElement: Element) {
    super(parentElement, "ul", "pokemon-list");
  }

  populate(): void {
    this.element.innerHTML = "<li> <h1> Hello! </h1> <li>";
  }
}

export default PokemonList;
