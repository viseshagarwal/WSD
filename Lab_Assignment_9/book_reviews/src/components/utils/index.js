export const url =
  "https://raw.githubusercontent.com/viseshagarwal/WSD/main/Lab_Assignment_7/books.json";
//  'https://raw.githubusercontent.com/Punithify/punithify.github.io/main/Data/books.json';

export function allStorage() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }

  return values;
}
