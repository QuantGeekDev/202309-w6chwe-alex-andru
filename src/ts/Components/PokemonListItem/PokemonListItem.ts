import type Pokemon from "../../Pokemon/Pokemon.js";
import Component from "../Component/Component.js";

class PokemonListItem extends Component {
  constructor(
    parentElement: Element,
    public pokemon: Pokemon,
  ) {
    super(parentElement, "li", "pokemon");
  }

  populate(): void {
    const { id, name, avatarUrl } = this.pokemon;
    this.element.classList.add(name);
    this.element.innerHTML = `
        <span class="pokemon__id">${id}</span>
    <img class="pokemon__avatar" src="${avatarUrl}" alt="${name}"> 
    <span class="pokemon__name"> ${name} </span>
    `;
  }
}

export default PokemonListItem;
