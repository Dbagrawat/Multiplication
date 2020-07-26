import findMultiples from "../src/find-multiples";

describe("Find multiples", () => {
  it("When no multiple found", () => {
    expect(findMultiples([1, 2], 3)).toEqual([]);
  });

  it("When multiples found", () => {
    expect(findMultiples([1, 2, 3, 4, 5, 6], 2)).toEqual([2, 4, 6]);
  });
});
