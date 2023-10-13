import { search_hashmap_n } from "../mockedJson";
import { search_hashmap_y } from "../mockedJson";

// TODO: mocked search functionality?
export function Search(column: string, value: string, data: string[][]) {
  if (column == null) {
    return search_hashmap_n[data.toString()][value];
  } else {
    const new_val = column + ", " + value;
    return search_hashmap_y[data.toString()][new_val];
  }
  // return toString(list of rows)
}
