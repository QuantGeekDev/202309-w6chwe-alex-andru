class Pokemon {
  constructor(
    protected id: number,
    protected name: string,
    protected url: string,
    protected avatarUrl: string,
  ) {}

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getUrl() {
    return this.url;
  }

  getAvatarUrl() {
    return this.avatarUrl;
  }
}

export default Pokemon;
