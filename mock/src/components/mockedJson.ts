// TEST HASHMAP
const mock_hashmap: { [key: string]: Array<Array<string>> } = {
  "Fish": [["Fisher"], ["Fishererer"]],
  "SmallTable": [
    ["Small", "Table", "1"],
    ["Small", "Table", "2"],
    ["Small", "Table", "3"],
  ],
  "Bonob": [["Bonobo"], ["Boobono"]],
  "Empty": [[""], [""]],
  "Single": [["One"]],
};

// HASHMAP FOR LOAD
const load_hashmap = new Map<string, string[][]>();

load_hashmap.set("/Users/earth/Documents/CS 0320/Sprint Projects/csv-earth15354/data/census/dol_ri_earnings_disparity.csv", 
[["State","Data Type","Average Weekly Earnings","Number of Workers","Earnings Disparity","Employed Percent"],
    ["RI","White","$1,058.47","395773.6521", "$1.00","75%"],
    ["RI","Black", "$770.26" ,"30424.80376", "$0.73" ,"6%"],
    ["RI","Native American/American Indian", "$471.07" ,"2315.505646", "$0.45" ,"0%"],
    ["RI","Asian-Pacific Islander","$1,080.09","18956.71657", "$1.02" ,"4%"],
    ["RI","Hispanic/Latino", "$673.14" ,"74596.18851", "$0.64" ,"14%"],
    ["RI","Multiracial", "$971.89" ,"8883.049171", "$0.92" ,"2%"]])
load_hashmap.set("./data/empty_csv.csv", [[]])
load_hashmap.set("./data/one.csv", [["One"]])
load_hashmap.set("./data/no_column.csv", 
    [["89", "John", "Sophomore"],
    ["100", "Sofia", "Junior"],
    ["50", "Doge", "Freshman"],
    ["27", "Fish", "Senior"],
    ["95", "Jupiter", "Junior"]])

// HASHMAP FOR SEARCH NO COLUMN
const search_hashmap_n = new Map<any[],string[][]>();

// const map1_n = new Map<string, any>();
// const map2_n = new Map<string, any>();
// map1_n.set("White", [["RI","White","$1,058.47","395773.6521", "$1.00","75%"]]);
// map2_n.set("Red", []);
const val1_n = load_hashmap.get("/Users/earth/Documents/CS 0320/Sprint Projects/csv-earth15354/data/census/dol_ri_earnings_disparity.csv");
if (val1_n != null) {
    search_hashmap_n.set([val1_n, "White"], [["RI","White","$1,058.47","395773.6521", "$1.00","75%"]])
    search_hashmap_n.set([val1_n, "Red"], [])
}


// HASHMAP FOR SEARCH YES COLUMN
const search_hashmap_y = new Map<any[],string[][]>();

const val1_y = load_hashmap.get("/Users/earth/Documents/CS 0320/Sprint Projects/csv-earth15354/data/census/dol_ri_earnings_disparity.csv");
if (val1_y != null) {
    search_hashmap_y.set([val1_y, "Data Type, White"], [["RI","White","$1,058.47","395773.6521", "$1.00","75%"]])
    search_hashmap_y.set([val1_y, "Data Type, Red"], [])
}

export const mock = mock_hashmap;
export const load = load_hashmap;
export const search_n = search_hashmap_n;
export const search_y = search_hashmap_y;