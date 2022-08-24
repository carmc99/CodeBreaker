const play = require("./codeBreaker");

test("All XXXX", () => {
  expect(play("1234", "1234")).toBe("xxxx");
});

test("All ----", () => {
  expect(play("4321", "1234")).toBe("----");
});

describe("All x---", () => {
  test("Case 1", () => {
    expect(play("1342", "1234")).toBe("x---");
  });
  test("Case 2", () => {
    expect(play("3124", "1234")).toBe("x---");
  });
});

describe("All xx--", () => {
  test("Case 1", () => {
    expect(play("1243", "1234")).toBe("xx--");
  });

  test("Case 2", () => {
    expect(play("2134", "1234")).toBe("xx--");
  });
});

describe("All xxx", () => {
  test("Case 1", () => {
    expect(play("1235", "1234")).toBe("xxx");
  });

  test("Case 2", () => {
    expect(play("5234", "1234")).toBe("xxx");
  });
});

describe("All xx", () => {
  test("Case 1", () => {
    expect(play("1265", "1234")).toBe("xx");
  });
  test("Case 2", () => {
    expect(play("6534", "1234")).toBe("xx");
  });
});

describe("All x", () => {
  test("Case 1", () => {
    expect(play("1765", "1234")).toBe("x");
  });
  test("Case 2", () => {
    expect(play("5674", "1234")).toBe("x");
  });
});

test("Void", () => {
  expect(play("1234", "9876")).toBe("");
});
