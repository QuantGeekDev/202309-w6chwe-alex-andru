import Pokemon from "./Pokemon";

describe("Given an Ivysaur instance of class Pokemon", () => {
  describe("When getId is called", () => {
    test("Then returns '2'", () => {
      const expectedId = 2;
      const ivysaur = new Pokemon(
        2,
        "ivysaur",
        "ivysaurUrl",
        "ivysaurAvatarUrl",
      );

      const actualId = ivysaur.getId();

      expect(actualId).toBe(expectedId);
    });
  });

  describe("When getName is called", () => {
    test("Then returns 'ivysaur'", () => {
      const expectedName = "ivysaur";
      const ivysaur = new Pokemon(
        2,
        "ivysaur",
        "ivysaurUrl",
        "ivysaurAvatarUrl",
      );

      const actualName = ivysaur.getName();

      expect(actualName).toBe(expectedName);
    });
  });

  describe("When getUrl is called", () => {
    test("Then returns 'ivysaurUrl'", () => {
      const expectedUrl = "ivysaurUrl";
      const ivysaur = new Pokemon(
        2,
        "ivysaur",
        "ivysaurUrl",
        "ivysaurAvatarUrl",
      );

      const actualUrl = ivysaur.getUrl();

      expect(actualUrl).toBe(expectedUrl);
    });
  });

  describe("When getAvatarUrl is called", () => {
    test("Then returns 'ivysaurAvatarUrl'", () => {
      const expectedAvatarUrl = "ivysaurAvatarUrl";
      const ivysaur = new Pokemon(
        2,
        "ivysaur",
        "ivysaurUrl",
        "ivysaurAvatarUrl",
      );

      const actualAvatarUrl = ivysaur.getAvatarUrl();

      expect(actualAvatarUrl).toBe(expectedAvatarUrl);
    });
  });
});
