class Pokemon {
  constructor(
    public id: number,
    public name: string,
    public url: string,
    public avatarUrl: string,
  ) {}

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getUrl(): string {
    return this.url;
  }

  getAvatarUrl(): string {
    return this.avatarUrl;
  }
}

export default Pokemon;
