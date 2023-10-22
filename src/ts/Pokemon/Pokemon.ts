class Pokemon {
  constructor(
    protected id: number,
    protected name: string,
    protected url: string,
    protected avatarUrl: string,
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
