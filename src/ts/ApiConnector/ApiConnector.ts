class ApiConnector {
  baseUrl = "https://pokeapi.co/api/v2/";
  category = "pokemon";

  buildUrl(pokemonId: number): string {
    const url = this.baseUrl + this.category + "/" + pokemonId.toString();
    return url;
  }
}

export default ApiConnector;
