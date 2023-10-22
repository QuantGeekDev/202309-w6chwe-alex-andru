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
    <img class="pokemon__avatar" src="${avatarUrl}" alt="${name}"> 
    <div className="pokemon__info">
    <span class="pokemon__id">${id}</span>
    <span class="pokemon__name"> ${name} </span>
    </div>`;
  }
}

export default PokemonListItem;
