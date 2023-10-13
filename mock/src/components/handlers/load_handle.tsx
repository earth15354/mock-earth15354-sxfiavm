import mock_hashmap from "../mockedJson";

// TODO: mocked search functionality?
export function Load(filepath: string) {
    if (!(filepath in mock_hashmap)) {
        return null;
    } else {
        const file_content = mock_hashmap[filepath];
        return file_content;
    }
}
