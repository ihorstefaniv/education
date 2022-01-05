//task1
async function windowActions() {
  let w = window.open("", "NewWindow", "width=300, height=300");

  function delay(duration) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), duration);
    });
  }

  await delay(2000);
  w.resizeTo(500, 500);
  await delay(2000);
  w.moveTo(200, 200);
  await delay(2000);
  w.close();
}

windowActions();

//task2
const btn = document.querySelector(".my-btn");

btn.onclick = changeCSS;

function changeCSS() {
  const text = document.querySelector("#text");

  text.style.color = "orange";
  text.style.fontSize = "20px";
  text.style.fontFamily = "Comic Sans MS";
}

//task3
const btn1 = document.querySelector(".my-btn1");
const btn2 = document.querySelector(".my-btn2");
const btn3 = document.querySelector(".my-btn3");
const link = document.querySelector(".my-link");

const changeBgC = (color) => {
  document.body.style.backgroundColor = color;
};

btn1.onclick = () => changeBgC("#0057d9");
btn2.ondblclick = () => changeBgC("#ff69b4");
btn3.onmousedown = () => changeBgC("#4b371c");
btn3.onmouseup = () => changeBgC("#fff");
link.onmouseover = () => changeBgC("#ff0");
link.onmouseleave = () => changeBgC("#fff");

//task4
const nameList = document.querySelector("#name");
const btnDelete = document.querySelector(".btnDelete");

btnDelete.onclick = () => {
  nameList.remove(nameList.selectedIndex);
};
//task5
const liveBtn = document.querySelector(".liveBtn");
const output = document.querySelector(".output");

const insertParagraph = (text) => {
  const p = document.createElement("p");
  p.style.margin = 0;
  p.innerText = text;
  output.append(p);
};

liveBtn.onclick = () => insertParagraph("I was pressed!");
liveBtn.onmouseover = () => insertParagraph("Mouse on me!");
liveBtn.onmouseleave = () => insertParagraph("Mouse is not on me!");

//task6
const outputDimensions = document.querySelector(".outputDimensions");
let timeDot = null;

const resizeEnd = () => {
  outputDimensions.innerText = "";
};

window.onresize = () => {
  outputDimensions.innerText = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
  clearTimeout(timeDot);
  timeDot = setTimeout(resizeEnd, 1000);
};

//task7
const countries = document.querySelector("#country");
const cities = document.querySelector("#cities");

const citiesList = {
  ger: ["Berlin", "Hamburg", "Munich", "Stuttgart"],
  usa: ["New York", "Los Angeles", "Chicago", "Houston"],
  ukr: ["Kyiv", "Kharkiv", "Odesa", "Khmelnytskyi"],
};

function checkCountry() {
  return countries[countries.options.selectedIndex].value;
}

function getCities(country) {
  return citiesList[country];
}

function fillCities() {
  const country = checkCountry();

  getCities(country).forEach((e) => {
    const option = new Option(e, e);

//2 спосіб
    const option = document.createElement("option");
    option.value = e;
    option.text = e;
//
    cities.add(option);
  });
}

function printCountryCity() {
  const output = document.querySelector("p");
  const country = countries[countries.options.selectedIndex].text;
  const city = cities[cities.options.selectedIndex].text;

  output.innerText = `${country}, ${city}`;
}

countries.onchange = () => {
  while (cities.length > 0) {
    cities.remove(0);
  }
  fillCities();
  printCountryCity();
};

cities.onchange = () => {
  printCountryCity();
};

fillCities();
printCountryCity();
