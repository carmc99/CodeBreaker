const play = require("./codeBreaker");

test("All XXXX", () => {
  expect(play("1234", "1234")).toBe("xxxx");
});

test("All ----", () => {
  expect(play("4321", "1234")).toBe("----");
});

test("All x---", () => {
  expect(play("1342", "1234")).toBe("x---");
});

test("All xx--", () => {
  expect(play("1243", "1234")).toBe("xx--");
});

test("All xxx", () => {
  expect(play("1235", "1234")).toBe("xxx");
});

test("All xx", () => {
  expect(play("1265", "1234")).toBe("xx");
});

test("All x", () => {
  expect(play("1765", "1234")).toBe("x");
});

test("Void", () => {
  expect(play("1234", "9876")).toBe("");
});
