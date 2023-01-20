// build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// docs: Documentation only changes
// feat: A new feature
// fix: A bug fix
// perf: A code change that improves performance
// refactor: A code change that neither fixes a bug nor adds a feature
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// test: Adding missing tests or correcting existing tests

let dataArray = [
  {
    Orders: 1,
    Products: "Sandwich Wrap",
    Customers: "Churchin",
    reports: false,
    integrations: true,
  },
  {
    Orders: 2,
    Products: "Gelatine Powder",
    Customers: "Horsell",
    reports: false,
    integrations: true,
  },
  {
    Orders: 3,
    Products: "Curry Powder Madras",
    Customers: "Champneys",
    reports: true,
    integrations: true,
  },
  {
    Orders: 4,
    Products: "Sage - Rubbed",
    Customers: "Hawkswood",
    reports: true,
    integrations: true,
  },
  {
    Orders: 5,
    Products: "Eel - Smoked",
    Customers: "Arnaldi",
    reports: false,
    integrations: false,
  },
  {
    Orders: 6,
    Products: "Emulsifier",
    Customers: "Bonefant",
    reports: true,
    integrations: false,
  },
  {
    Orders: 7,
    Products: "Cheese - Camembert",
    Customers: "Iseton",
    reports: false,
    integrations: false,
  },
  {
    Orders: 8,
    Products: "Cilantro / Coriander - Fresh",
    Customers: "Zukerman",
    reports: false,
    integrations: true,
  },
  {
    Orders: 9,
    Products: "Seaweed Green Sheets",
    Customers: "Coultous",
    reports: true,
    integrations: true,
  },
  {
    Orders: 10,
    Products: "Broom - Push",
    Customers: "Wiltshear",
    reports: false,
    integrations: true,
  },
  {
    Orders: 11,
    Products: "Cardamon Ground",
    Customers: "Akroyd",
    reports: false,
    integrations: true,
  },
  {
    Orders: 12,
    Products: "Cheese Cloth",
    Customers: "Nicol",
    reports: true,
    integrations: true,
  },
  {
    Orders: 13,
    Products: "Spaghetti Squash",
    Customers: "Joiner",
    reports: false,
    integrations: true,
  },
  {
    Orders: 14,
    Products: "Skirt - 24 Foot",
    Customers: "Mamwell",
    reports: false,
    integrations: false,
  },
  {
    Orders: 15,
    Products: "Kiwi",
    Customers: "Aaronson",
    reports: true,
    integrations: true,
  },
  {
    Orders: 16,
    Products: "Cup - Translucent 7 Oz Clear",
    Customers: "Sidsaff",
    reports: false,
    integrations: true,
  },
  {
    Orders: 17,
    Products: "Apple - Custard",
    Customers: "Lenormand",
    reports: true,
    integrations: true,
  },
  {
    Orders: 18,
    Products: "Roe - Lump Fish, Red",
    Customers: "Beesey",
    reports: false,
    integrations: false,
  },
  {
    Orders: 19,
    Products: "Wine - Balbach Riverside",
    Customers: "McCarney",
    reports: true,
    integrations: true,
  },
  {
    Orders: 20,
    Products: "Glaze - Clear",
    Customers: "Treweela",
    reports: true,
    integrations: false,
  },
  {
    Orders: 21,
    Products: "Gatorade - Cool Blue Raspberry",
    Customers: "Philbrook",
    reports: true,
    integrations: false,
  },
  {
    Orders: 22,
    Products: "Turkey - Breast, Boneless Sk On",
    Customers: "Petrak",
    reports: true,
    integrations: false,
  },
  {
    Orders: 23,
    Products: "Tequila Rose Cream Liquor",
    Customers: "Dunlap",
    reports: true,
    integrations: true,
  },
  {
    Orders: 24,
    Products: "Coffee - Egg Nog Capuccino",
    Customers: "Hanscombe",
    reports: true,
    integrations: false,
  },
  {
    Orders: 25,
    Products: "Shrimp - 21/25, Peel And Deviened",
    Customers: "Wingeatt",
    reports: false,
    integrations: true,
  },
  {
    Orders: 26,
    Products: "Butter - Salted",
    Customers: "Iremonger",
    reports: false,
    integrations: false,
  },
  {
    Orders: 27,
    Products: "Lettuce - Romaine, Heart",
    Customers: "Preddle",
    reports: true,
    integrations: false,
  },
  {
    Orders: 28,
    Products: "Bread - French Stick",
    Customers: "Beckett",
    reports: false,
    integrations: true,
  },
  {
    Orders: 29,
    Products: "Table Cloth 62x120 White",
    Customers: "Hingeley",
    reports: false,
    integrations: false,
  },
  {
    Orders: 30,
    Products: "Beer - Blue",
    Customers: "Croxton",
    reports: true,
    integrations: false,
  },
  {
    Orders: 31,
    Products: "Nantucket - 518ml",
    Customers: "Minchinton",
    reports: true,
    integrations: false,
  },
  {
    Orders: 32,
    Products: "Tomatoes - Heirloom",
    Customers: "Magill",
    reports: false,
    integrations: true,
  },
  {
    Orders: 33,
    Products: "Juice - Lemon",
    Customers: "Huxter",
    reports: true,
    integrations: true,
  },
  {
    Orders: 34,
    Products: "Pasta - Tortellini, Fresh",
    Customers: "De Gowe",
    reports: true,
    integrations: false,
  },
  {
    Orders: 35,
    Products: "Scotch - Queen Anne",
    Customers: "Clitherow",
    reports: false,
    integrations: false,
  },
  {
    Orders: 36,
    Products: "Flavouring - Rum",
    Customers: "Label",
    reports: true,
    integrations: true,
  },
  {
    Orders: 37,
    Products: "Wine - Soave Folonari",
    Customers: "Roomes",
    reports: true,
    integrations: true,
  },
  {
    Orders: 38,
    Products: "Fennel",
    Customers: "Citrine",
    reports: false,
    integrations: true,
  },
  {
    Orders: 39,
    Products: "Cheese Cloth No 100",
    Customers: "Illesley",
    reports: false,
    integrations: true,
  },
  {
    Orders: 40,
    Products: "Pepper - Chillies, Crushed",
    Customers: "Pluvier",
    reports: false,
    integrations: false,
  },
  {
    Orders: 41,
    Products: "Iced Tea - Lemon, 340ml",
    Customers: "Whife",
    reports: false,
    integrations: false,
  },
  {
    Orders: 42,
    Products: "Pepper - Green",
    Customers: "Sneath",
    reports: false,
    integrations: false,
  },
  {
    Orders: 43,
    Products: "Tobasco Sauce",
    Customers: "Wykes",
    reports: true,
    integrations: true,
  },
  {
    Orders: 44,
    Products: "Wine - Chablis J Moreau Et Fils",
    Customers: "Fishburn",
    reports: false,
    integrations: false,
  },
  {
    Orders: 45,
    Products: "Sorrel - Fresh",
    Customers: "Carlesso",
    reports: false,
    integrations: false,
  },
  {
    Orders: 46,
    Products: "Mayonnaise - Individual Pkg",
    Customers: "Kerin",
    reports: true,
    integrations: true,
  },
  {
    Orders: 47,
    Products: "Wine - Blue Nun Qualitatswein",
    Customers: "Winfindine",
    reports: false,
    integrations: true,
  },
  {
    Orders: 48,
    Products: "Shrimp, Dried, Small / Lb",
    Customers: "Troyes",
    reports: false,
    integrations: true,
  },
  {
    Orders: 49,
    Products: "Tart Shells - Savory, 4",
    Customers: "Neeve",
    reports: false,
    integrations: true,
  },
  {
    Orders: 50,
    Products: "Quail - Whole, Bone - In",
    Customers: "Sandlin",
    reports: true,
    integrations: true,
  },
];

let signOut = document.getElementById("createEl");
let table = document.querySelector("table").querySelector("tbody");

function addData() {
  dataArray.forEach((el) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.append(el.Orders)
    let td2 = document.createElement("td");
    td2.append(el.Products)
    let td3 = document.createElement("td");
    td3.append(el.Customers)
    let td4 = document.createElement("td");
    td4.append(String(el.reports))
    let td5 = document.createElement("td");
    td5.append(String(el.integrations))
    tr.append(td1, td2, td3, td4, td5);
    table.append(tr);
  });
}

signOut.addEventListener("click", addData);
