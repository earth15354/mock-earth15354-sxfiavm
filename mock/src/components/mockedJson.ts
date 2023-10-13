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
// /Users/earth/Documents/CS 0320/Sprint Projects/csv-earth15354/data/census/dol_ri_earnings_disparity.csv
const load_hashmap: { [key: string]: Array<Array<string>> } = {
    "./data/large_csv.csv":
    [["State","Type","Average Weekly Earnings","Number of Workers","Earnings Disparity","Employed Percent"],
    ["RI","White","$1,058.47","395773.6521", "$1.00","75%"],
    ["RI","Black", "$770.26" ,"30424.80376", "$0.73" ,"6%"],
    ["RI","Native American/American Indian", "$471.07" ,"2315.505646", "$0.45" ,"0%"],
    ["RI","Asian-Pacific Islander","$1,080.09","18956.71657", "$1.02" ,"4%"],
    ["RI","Hispanic/Latino", "$673.14" ,"74596.18851", "$0.64" ,"14%"],
    ["RI","Multiracial", "$971.89" ,"8883.049171", "$0.92" ,"2%"]],
    "./data/empty_csv.csv":[],
    "./data/one.csv":[["one"]],
    "./data/no_column.csv":
    [["89", "John", "Sophomore"],
    ["100", "Sofia", "Junior"],
    ["50", "Doge", "Freshman"],
    ["27", "Fish", "Senior"],
    ["95", "Jupiter", "Junior"]]
}

// HASHMAP FOR SEARCH NO COLUMN
const map1_n: { [key: string]: Array<Array<string>> } = {
    "White": [["RI","White","$1,058.47","395773.6521", "$1.00","75%"]],
    "RI": [["RI","White","$1,058.47","395773.6521", "$1.00","75%"],
    ["RI","Black", "$770.26" ,"30424.80376", "$0.73" ,"6%"],
    ["RI","Native American/American Indian", "$471.07" ,"2315.505646", "$0.45" ,"0%"],
    ["RI","Asian-Pacific Islander","$1,080.09","18956.71657", "$1.02" ,"4%"],
    ["RI","Hispanic/Latino", "$673.14" ,"74596.18851", "$0.64" ,"14%"],
    ["RI","Multiracial", "$971.89" ,"8883.049171", "$0.92" ,"2%"]]
}

// const val1_n = [["State","Type","Average Weekly Earnings","Number of Workers","Earnings Disparity","Employed Percent"],
// ["RI","White","$1,058.47","395773.6521", "$1.00","75%"],
// ["RI","Black", "$770.26" ,"30424.80376", "$0.73" ,"6%"],
// ["RI","Native American/American Indian", "$471.07" ,"2315.505646", "$0.45" ,"0%"],
// ["RI","Asian-Pacific Islander","$1,080.09","18956.71657", "$1.02" ,"4%"],
// ["RI","Hispanic/Latino", "$673.14" ,"74596.18851", "$0.64" ,"14%"],
// ["RI","Multiracial", "$971.89" ,"8883.049171", "$0.92" ,"2%"]].toString()

// const val2_n = "State,Type,Average Weekly Earnings,Number of Workers,Earnings Disparity,Employed Percent,RI,White,$1,058.47,395773.6521,$1.00,75%,RI,Black,$770.26,30424.80376,$0.73,6%,RI,Native American/American Indian,$471.07,2315.505646,$0.45,0%,RI,Asian-Pacific Islander,$1,080.09,18956.71657,$1.02,4%,RI,Hispanic/Latino,$673.14,74596.18851,$0.64,14%,RI,Multiracial,$971.89,8883.049171,$0.92,2%"
// const test = "fish"

const search_hashmap_n: { [key: string]: any } = {
    "State,Type,Average Weekly Earnings,Number of Workers,Earnings Disparity,Employed Percent,RI,White,$1,058.47,395773.6521,$1.00,75%,RI,Black,$770.26,30424.80376,$0.73,6%,RI,Native American/American Indian,$471.07,2315.505646,$0.45,0%,RI,Asian-Pacific Islander,$1,080.09,18956.71657,$1.02,4%,RI,Hispanic/Latino,$673.14,74596.18851,$0.64,14%,RI,Multiracial,$971.89,8883.049171,$0.92,2%"
    : map1_n,
    "":{}
}


// HASHMAP FOR SEARCH YES COLUMN
const map1_y: { [key: string]: Array<Array<string>> } = {
    "Type, White": [["RI","White","$1,058.47","395773.6521", "$1.00","75%"]],
    "State, RI": [["RI","White","$1,058.47","395773.6521", "$1.00","75%"],
    ["RI","Black", "$770.26" ,"30424.80376", "$0.73" ,"6%"],
    ["RI","Native American/American Indian", "$471.07" ,"2315.505646", "$0.45" ,"0%"],
    ["RI","Asian-Pacific Islander","$1,080.09","18956.71657", "$1.02" ,"4%"],
    ["RI","Hispanic/Latino", "$673.14" ,"74596.18851", "$0.64" ,"14%"],
    ["RI","Multiracial", "$971.89" ,"8883.049171", "$0.92" ,"2%"]]
}

const search_hashmap_y: { [key: string]: any } = {
    "State,Type,Average Weekly Earnings,Number of Workers,Earnings Disparity,Employed Percent,RI,White,$1,058.47,395773.6521,$1.00,75%,RI,Black,$770.26,30424.80376,$0.73,6%,RI,Native American/American Indian,$471.07,2315.505646,$0.45,0%,RI,Asian-Pacific Islander,$1,080.09,18956.71657,$1.02,4%,RI,Hispanic/Latino,$673.14,74596.18851,$0.64,14%,RI,Multiracial,$971.89,8883.049171,$0.92,2%"
    : map1_y,
    "":{}
}

export { mock_hashmap, load_hashmap, search_hashmap_n, search_hashmap_y }