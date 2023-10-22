class Pokemon {
  constructor(
    public id: number,
    public name: string,
    public avatarUrl: string,
    public types: Array<{ type: { name: string; url: string }; slot: number }>,
  ) {}

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getAvatarUrl(): string {
    return this.avatarUrl;
  }
}

export default Pokemon;
