// By using loops (for, foreach, while, do while):

// #1 From the array below, provide:
let numbers = [
    13, 79, 83, 50, 89, 90, 21, 12, 79, 36, 26, 48, 90, 100, 82, 16, 52, 46, 19,
    30, 70, 90, 72, 45, 24, 55, 18, 61, 39, 6, 32, 32, 58, 72, 54, 50, 4, 96,
    88, 37, 11, 9, 73, 88, 43, 52, 98, 61, 48, 40, 3, 43, 62, 82, 85, 83, 5, 25,
    19, 25, 96, 54, 56, 90, 42, 40, 39, 46, 31, 77, 41, 73, 43, 37, 63, 100, 31,
    35, 56, 70, 31, 99, 2, 28, 65, 24, 40, 81, 87, 76, 37, 1, 53, 93, 51, 36,
    33, 23, 27, 42,
];

// SOLUTION
function sumTotal(list) {
    total = 0;
    for (let i = 0; i < list.length; i++) {
        total = list[i] + total;
    }
    console.log(total);
}

function average(list) {
    total = 0;
    for (let i = 0; i < list.length; i++) {
        total = list[i] + total;
    }
    console.log(total / list.length);
}

function minNum(list) {
    let min = list[0];
    for (let i = 1; i < list.length; i++) {
        if (min >= list[i]) {
            min = list[i];
        }
    }
    console.log(min);
}

function maxNum(list) {
    let max = list[0];
    for (let i = 1; i < list.length; i++) {
        if (max <= list[i]) {
            max = list[i];
        }
    }
    console.log(max);
}

function oddNum(list) {
    counter = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] % 2 != 0) {
            counter++;
        }
    }
    console.log(counter);
}

function halfAverage(list) {
    total = 0;
    for (let i = 0; i < list.length / 2; i++) {
        total = list[i] + total;
    }
    console.log(total / parseInt(list.length / 2));
}

// NOT COMPLETED
function descendent(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[0] <= list[i + 1]) {
            list[0] = list[i + 1];
            list[i + 1] = list[i - 1];
        }
    }
}

// a) the average
average(numbers);

// b) the total (sum every number)
sumTotal(numbers);

// c) the minimum (the smaller number)
minNum(numbers);

// d) the maximum (the bigger number)
maxNum(numbers);

// e) How many odd numbers do you have
oddNum(numbers);

// d) The average of the first half of the array
halfAverage(numbers);

// e) Sort your array descendent order
// Not Solved

// #2 From the array below provide,
let people = [
    "Arty",
    "Ethelbert",
    "Constantin",
    "Janelle",
    "Sherlocke",
    "Deloria",
    "Sherlocke",
    "Sherlocke",
    "Aindrea",
    "Chuck",
    "Corabelle",
    "Westbrooke",
    "Modesta",
    "Allard",
    "Turner",
    "Deloria",
    "Ilse",
    "Kelcy",
    "Iosep",
    "Bryanty",
    "Audre",
    "Davey",
    "Doreen",
    "Sherlocke",
    "Douglas",
    "Deloria",
    "Mariel",
    "Jerrilyn",
    "Melinda",
    "Sherlocke",
    "Jonas",
    "Douglas",
    "Katlin",
    "Vick",
    "Douglas",
    "Talbert",
    "Marshal",
    "Douglas",
    "Glynis",
    "Guy",
    "Gian",
    "Christal",
    "Sherlocke",
    "Jonathon",
    "Durant",
    "Sherlocke",
    "Prisca",
    "Douglas",
    "Barde",
    "Velvet",
    "Shelby",
    "Rivalee",
    "Douglas",
    "Helen",
    "Drud",
    "Bartolomeo",
    "Douglas",
    "Fara",
    "Rae",
    "Tiebold",
    "Irina",
    "Vivian",
    "Douglas",
    "Kalil",
    "Nathanael",
    "Emelyne",
    "Robenia",
    "Douglas",
    "Sherlocke",
    "Catlin",
    "Audrie",
    "Marielle",
    "Douglas",
    "Randolf",
    "Pamelina",
    "Douglas",
    "Tracie",
    "Meredeth",
    "Sherlocke",
    "Katrina",
    "Nealy",
    "Margareta",
    "Orson",
    "Patricio",
    "Sherlocke",
    "Violet",
    "Minnaminnie",
    "Kristan",
    "Reeva",
    "Lorianna",
    "Alfred",
    "Matthiew",
    "Tamas",
    "Kelley",
    "Yancey",
    "Cristin",
    "Stephanie",
    "Waite",
    "Shalna",
    "Pren",
];

// SOLUTION
function douglasCount(list) {
    count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] == "Douglas") {
            count++;
        }
    }
    console.log(count);
}

function countName(list) {
    let newPeopleArr = [];
    for (let i = 0; i < list.length; i++) {
        count = 0;
        if (!newPeopleArr.includes(list[i])) {
            newPeopleArr.push(list[i]);
            for (let j = 0; j < list.length; j++) {
                if (newPeopleArr[newPeopleArr.length - 1] == list[j]) {
                    count++;
                }
            }
            console.log(
                `${
                    newPeopleArr[newPeopleArr.length - 1]
                } counted ${count} times`
            );
        }
    }
}

// a) How many times the name "Douglas" is available
douglasCount(people);

// b) How many times each word is printed
countName(people);

// c) Increase the array length by including your name in the position 47
people.splice(47, 0, "Day");
console.log(people);

// d) Sort your array alphabetically
// Not Solved

// Not Solved
// #3 From the array below
let content = [
    55,
    18,
    "Orson",
    "Nealy",
    6,
    32,
    32,
    "Tracie",
    58,
    72,
    32,
    50,
    4,
    "Kalil",
    88,
    37,
    11,
    32,
    "Meredeth",
    88,
    32,
    "Pren",
    98,
    32,
    81,
    32,
    76,
    37,
];

// SOLUTION
// a) Find the most repetitive element
