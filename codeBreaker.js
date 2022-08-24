function play(entry, key) {
  if (entry === key) {
    return "xxxx";
  } else {
    var result = [];
    [...entry].forEach((entryItem, entryIdx) => {
      [...key].forEach((keyItem, keyIdx) => {
        if (entryItem === keyItem && entryIdx == keyIdx) {
          result.push("x");
        } else if (entryItem == keyItem) {
          result.push("-");
        }
      });
    });
    return result.toString().replace(/,/g, "");
  }
}
module.exports = play;
