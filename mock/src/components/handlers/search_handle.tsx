import { search_hashmap_n } from "../mockedJson";
import { search_hashmap_y } from "../mockedJson";

// TODO: mocked search functionality?
export function Search(column: string, value: string, data: string[][]) {
  if (column == "") {
    const map = search_hashmap_n[data.toString()];
    // return data.toString();
    if (map == null) {
      return "Could not find search data!"
    } else {
      return map[value];
    }
  } else {
    const new_val = column + ", " + value;
    const map = search_hashmap_y[data.toString()];
    if (map == null) {
      return "Could not find search data!"
    } else {
      return map[new_val];
    }
  }
  // return toString(list of rows)
}
