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
    const { id, name, avatarUrl, types } = this.pokemon;
    this.element.classList.add(name);
    this.element.innerHTML = `
    <img class="pokemon__avatar" src="${avatarUrl}" alt="${name}"> 
    <div className="pokemon__info">
    <span class="pokemon__id">${id}</span>
    <span class="pokemon__name"> ${name} </span>
    <div class="types">
      <span class="${types[0].type.name}">${types[0].type.name}</span>
    </div>`;
    if (types[1]) {
      const typesElement = this.element.querySelector(".types")!;
      const secondaryTypes = document.createElement("span");
      const className = types[1]?.type.name;
      secondaryTypes.className = className;
      secondaryTypes.innerHTML = `<span class="${types[1].type.name}">${types[1].type.name}</span>`;
      typesElement?.appendChild(secondaryTypes);
    }
  }
}

export default PokemonListItem;
