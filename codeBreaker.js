function play(entry, key) {
  if (entry === key) {
    return "xxxx";
  } else {
    var result = [];
    [...entry].forEach((entryItem, entryIdx) => {
      [...key].forEach((keyItem, keyIdx) => {
        if (entryItem === keyItem && entryIdx == keyIdx) {
          result.push(0); // x
        } else if (entryItem == keyItem) {
          result.push(1); // -
        }
      });
    });
    result.sort(); // Sort priority x -> 0, - -> 1 , void
    return result
      .toString()
      .replace(/0/g, "x") //  /g ("match globally") modifier - regular expression
      .replace(/1/g, "-")
      .replace(/,/g, "");
  }
}
module.exports = play;
