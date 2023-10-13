import { load_hashmap } from "../mockedJson";

// TODO: mocked search functionality?
export function Load(filepath: string) {
    if (!(filepath in load_hashmap)) {
        return null;
    } else {
        const file_content = load_hashmap.get(filepath);
        return file_content;
    }
}
