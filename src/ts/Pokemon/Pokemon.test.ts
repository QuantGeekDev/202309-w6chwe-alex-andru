import Pokemon from "./Pokemon";

describe("Given an Ivysaur instance of class Pokemon", () => {
  describe("When getId is called", () => {
    test("Then returns '2'", () => {
      const expectedId = 2;
      const ivysaur = new Pokemon(2, "ivysaur", "ivysaurAvatarUrl", [
        { type: { name: "Fire", url: "url" }, slot: 1 },
        { type: { name: "Fire", url: "url" }, slot: 1 },
      ]);

      const actualId = ivysaur.getId();

      expect(actualId).toBe(expectedId);
    });
  });

  describe("When getName is called", () => {
    test("Then returns 'ivysaur'", () => {
      const expectedName = "ivysaur";
      const ivysaur = new Pokemon(2, "ivysaur", "ivysaurAvatarUrl", [
        { type: { name: "Fire", url: "url" }, slot: 1 },
        { type: { name: "Fire", url: "url" }, slot: 1 },
      ]);

      const actualName = ivysaur.getName();

      expect(actualName).toBe(expectedName);
    });
  });

  describe("When getAvatarUrl is called", () => {
    test("Then returns 'ivysaurAvatarUrl'", () => {
      const expectedAvatarUrl = "ivysaurAvatarUrl";
      const ivysaur = new Pokemon(2, "ivysaur", "ivysaurAvatarUrl", [
        { type: { name: "Fire", url: "url" }, slot: 1 },
        { type: { name: "Fire", url: "url" }, slot: 1 },
      ]);

      const actualAvatarUrl = ivysaur.getAvatarUrl();

      expect(actualAvatarUrl).toBe(expectedAvatarUrl);
    });
  });
});
