const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const amountInput = document.querySelector(".amount input");
const resultText = document.querySelector(".msg");
const exgrate = document.querySelector(".exg-rate");

const arrowIcon = document.querySelector(".fa-arrow-right-arrow-left");

for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    if (select.name === "from" && currCode === "AUD") {
      newOption.selected = true;
    } else if (select.name === "to" && currCode === "NPR") {
      newOption.selected = true;
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

const convertCurrency = async () => {
  let fromCurr = document.querySelector(".from select").value.toLowerCase();
  let toCurr = document.querySelector(".to select").value.toLowerCase();
  let amtVal = amountInput.value;

  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amountInput.value = "1";
  }

  try {
    let response = await fetch(`${BASE_URL}/${fromCurr}.json`);
    let data = await response.json();
    let exchangeRate = data[fromCurr][toCurr];

    if (exchangeRate) {
      let convertedAmount = (amtVal * exchangeRate).toFixed(2);
      resultText.innerText = `${amtVal} ${fromCurr.toUpperCase()} = ${convertedAmount} ${toCurr.toUpperCase()}`;
      exgrate.innerText = `Exchange Rate is: ${exchangeRate.toFixed(2)}`;
    } else {
      resultText.innerText = "Invalid conversion";
      exgrate.innerText = "Oops!";
    }
  } catch (error) {
    resultText.innerText = "Error fetching data";
    console.error("Error:", error);
  }
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  convertCurrency();
});

arrowIcon.addEventListener("click", () => {
  let fromSelect = document.querySelector(".from select");
  let toSelect = document.querySelector(".to select");

  const tempValue = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = tempValue;

  updateFlag(fromSelect);
  updateFlag(toSelect);

//   convertCurrency();
});
