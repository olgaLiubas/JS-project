const countries = [
  {
    id: 1,
    name: "Afghanistan",
    iso3: "AFG",
    iso2: "AF",
    numeric_code: "004",
    phone_code: "93",
    capital: "Kabul",
    currency: "AFN",
    currency_symbol: "؋",
    tld: ".af",
    native: "افغانستان",
    region: "Asia",
    subregion: "Southern Asia",
  },
  {
    id: 2,
    name: "Aland Islands",
    iso3: "ALA",
    iso2: "AX",
    numeric_code: "248",
    phone_code: "+358-18",
    capital: "Mariehamn",
    currency: "EUR",
    currency_symbol: "€",
    tld: ".ax",
    native: "Åland",
    region: "Europe",
    subregion: "Northern Europe",
  },
  {
    id: 3,
    name: "Albania",
    iso3: "ALB",
    iso2: "AL",
    numeric_code: "008",
    phone_code: "355",
    capital: "Tirana",
    currency: "ALL",
    currency_symbol: "Lek",
    tld: ".al",
    native: "Shqipëria",
    region: "Europe",
    subregion: "Southern Europe",
  },
  {
    id: 4,
    name: "Algeria",
    iso3: "DZA",
    iso2: "DZ",
    numeric_code: "012",
    phone_code: "213",
    capital: "Algiers",
    currency: "DZD",
    currency_symbol: "دج",
    tld: ".dz",
    native: "الجزائر",
    region: "Africa",
    subregion: "Northern Africa",
  },
  {
    id: 5,
    name: "American Samoa",
    iso3: "ASM",
    iso2: "AS",
    numeric_code: "016",
    phone_code: "+1-684",
    capital: "Pago Pago",
    currency: "USD",
    currency_symbol: "$",
    tld: ".as",
    native: "American Samoa",
    region: "Oceania",
    subregion: "Polynesia",
  },
  {
    id: 6,
    name: "Andorra",
    iso3: "AND",
    iso2: "AD",
    numeric_code: "020",
    phone_code: "376",
    capital: "Andorra la Vella",
    currency: "EUR",
    currency_symbol: "€",
    tld: ".ad",
    native: "Andorra",
    region: "Europe",
    subregion: "Southern Europe",
  },
  {
    id: 7,
    name: "Angola",
    iso3: "AGO",
    iso2: "AO",
    numeric_code: "024",
    phone_code: "244",
    capital: "Luanda",
    currency: "AOA",
    currency_symbol: "Kz",
    tld: ".ao",
    native: "Angola",
    region: "Africa",
    subregion: "Middle Africa",
  },
  {
    id: 8,
    name: "Anguilla",
    iso3: "AIA",
    iso2: "AI",
    numeric_code: "660",
    phone_code: "+1-264",
    capital: "The Valley",
    currency: "XCD",
    currency_symbol: "$",
    tld: ".ai",
    native: "Anguilla",
    region: "Americas",
    subregion: "Caribbean",
  },
  {
    id: 9,
    name: "Antarctica",
    iso3: "ATA",
    iso2: "AQ",
    numeric_code: "010",
    phone_code: "672",
    capital: "",
    currency: "AAD",
    currency_symbol: "$",
    tld: ".aq",
    native: "Antarctica",
    region: "Polar",
    subregion: "",
  },
  {
    id: 10,
    name: "Antigua And Barbuda",
    iso3: "ATG",
    iso2: "AG",
    numeric_code: "028",
    phone_code: "+1-268",
    capital: "St. John's",
    currency: "XCD",
    currency_symbol: "$",
    tld: ".ag",
    native: "Antigua and Barbuda",
    region: "Americas",
    subregion: "Caribbean",
  },
  {
    id: 11,
    name: "Argentina",
    iso3: "ARG",
    iso2: "AR",
    numeric_code: "032",
    phone_code: "54",
    capital: "Buenos Aires",
    currency: "ARS",
    currency_symbol: "$",
    tld: ".ar",
    native: "Argentina",
    region: "Americas",
    subregion: "South America",
  },
  {
    id: 12,
    name: "Armenia",
    iso3: "ARM",
    iso2: "AM",
    numeric_code: "051",
    phone_code: "374",
    capital: "Yerevan",
    currency: "AMD",
    currency_symbol: "֏",
    tld: ".am",
    native: "Հայաստան",
    region: "Asia",
    subregion: "Western Asia",
  },
  {
    id: 13,
    name: "Aruba",
    iso3: "ABW",
    iso2: "AW",
    numeric_code: "533",
    phone_code: "297",
    capital: "Oranjestad",
    currency: "AWG",
    currency_symbol: "ƒ",
    tld: ".aw",
    native: "Aruba",
    region: "Americas",
    subregion: "Caribbean",
  },
  {
    id: 14,
    name: "Australia",
    iso3: "AUS",
    iso2: "AU",
    numeric_code: "036",
    phone_code: "61",
    capital: "Canberra",
    currency: "AUD",
    currency_symbol: "$",
    tld: ".au",
    native: "Australia",
    region: "Oceania",
    subregion: "Australia and New Zealand",
  },
  {
    id: 15,
    name: "Austria",
    iso3: "AUT",
    iso2: "AT",
    numeric_code: "040",
    phone_code: "43",
    capital: "Vienna",
    currency: "EUR",
    currency_symbol: "€",
    tld: ".at",
    native: "Österreich",
    region: "Europe",
    subregion: "Western Europe",
  },
  {
    id: 16,
    name: "Azerbaijan",
    iso3: "AZE",
    iso2: "AZ",
    numeric_code: "031",
    phone_code: "994",
    capital: "Baku",
    currency: "AZN",
    currency_symbol: "m",
    tld: ".az",
    native: "Azərbaycan",
    region: "Asia",
    subregion: "Western Asia",
  },
  {
    id: 17,
    name: "Bahamas The",
    iso3: "BHS",
    iso2: "BS",
    numeric_code: "044",
    phone_code: "+1-242",
    capital: "Nassau",
    currency: "BSD",
    currency_symbol: "B$",
    tld: ".bs",
    native: "Bahamas",
    region: "Americas",
    subregion: "Caribbean",
  },
  {
    id: 18,
    name: "Bahrain",
    iso3: "BHR",
    iso2: "BH",
    numeric_code: "048",
    phone_code: "973",
    capital: "Manama",
    currency: "BHD",
    currency_symbol: ".د.ب",
    tld: ".bh",
    native: "‏البحرين",
    region: "Asia",
    subregion: "Western Asia",
  },
  {
    id: 19,
    name: "Bangladesh",
    iso3: "BGD",
    iso2: "BD",
    numeric_code: "050",
    phone_code: "880",
    capital: "Dhaka",
    currency: "BDT",
    currency_symbol: "৳",
    tld: ".bd",
    native: "Bangladesh",
    region: "Asia",
  },
  {
    id: 20,
    name: "Barbados",
    iso3: "BRB",
    iso2: "BB",
    numeric_code: "052",
    phone_code: "+1-246",
    capital: "Bridgetown",
    currency: "BBD",
    currency_symbol: "Bds$",
    tld: ".bb",
    native: "Barbados",
    region: "Americas",
    subregion: "Caribbean",
  },
];

//ALL VARIABLES

//to rendering rows
const tableWrapper = document.querySelector(".table-wrapper");

//to dropdowns logic
const dropdowns = document.querySelectorAll(".dropdown");
const dropdownsContent = document.getElementsByClassName("dropdown-content");

//to sorting
const sortingACSItems = document.getElementsByClassName("sort-asc");
const sortingDESCItems = document.getElementsByClassName("sort-desc");
const rows = document.getElementsByClassName("row");

//to filtering
const filteringItems = document.getElementsByClassName("filter");
const filterDropdown = document.getElementById("filter");
const filterSelectColumns = document.getElementById("filter-select-columns");
const filterSelectOperators = document.getElementById(
  "filter-select-operators"
);
const filterInput = document.getElementById("filter-input");
const filterButton = document.getElementById("filter-button");
const filterCross = document.querySelector(".filter-cross");
let column = "name";
let operator = "contains";
let inputValue;

//hiding of column
const hidingColumnItems = document.getElementsByClassName("hide-column");

//showing of column
const showingColumnsItems = document.getElementsByClassName("show-columns");

//pagination
let arrayToShow = JSON.parse(JSON.stringify(countries));
const amountOfRowsSelector = document.querySelector(".amount-of-rows");
const paginationInfoP = document.querySelector(".pagination-info");
const backButton = document.querySelector(".back-button");
const forwardButton = document.querySelector(".forward-button");
let amountOfRows = 20;
let paginationInfo = "Page: 1 of 1";
let page = 1;
let maxAmountOfPages = 1;
let firstIndexToShow = 0;

//RENDERING ROWS

function addContentToTable(el) {
  tableWrapper.insertAdjacentHTML(
    "beforeend",
    `
        <div class="row">
            <div class="checkbox"><input type="checkbox" name="checkbox-row"></div>
            <div class="id"><p>${el.id}</p></div>
            <div class="name"><p>${el.name}</p></div>
            <div class="capital"><p>${el.capital}</p></div>
            <div class="code"><p>${el.phone_code}</p></div>
            <div class="currency">${el.currency}<p></p></div>
            <div class="iso"><p>${el.iso3}</p></div>
        </div>
    `
  );
}

document.addEventListener("DOMContentLoaded", (event) => showRows(countries));

function showRows() {
  maxAmountOfPages =
    (arrayToShow.length - (arrayToShow.length % amountOfRows)) / amountOfRows;
  for (let i = firstIndexToShow; i < firstIndexToShow + amountOfRows; i++) {
    addContentToTable(arrayToShow[i]);
  }
}

//DROPDOWNS LOGIC

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener(
    "click",
    (event) => {
      addActiveClass(event);
    },
    true
  );
});

function addActiveClass(event) {
  if (!event.target.nextElementSibling.className.includes("active")) {
    filterDropdown.classList.remove("filter-dropdown-active");
    Array.from(dropdownsContent).forEach((el) => {
      if (el !== event.target.nextElementSibling) {
        el.classList.remove("active");
      }
    });
    event.target.nextElementSibling.classList.add("active");
  } else {
    event.target.nextElementSibling.classList.remove("active");
  }
}

// SORTING BY ASC/DESC

function quickSort(arr, field) {
  if (arr.length < 2) {
    return arr;
  } else {
    const pivotPosition = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotPosition];
    let less = [];
    let more = [];
    if (field === "phone_code") {
      less = arr.filter((value, index) => {
        const isPivot = index === pivotPosition;
        return (
          !isPivot &&
          value[field].replace(/[-+!@#$%^&*]/g, "") <=
            pivot[field].replace(/[-+!@#$%^&*]/g, "")
        );
      });

      more = arr.filter(
        (value) =>
          value[field].replace(/[-+!@#$%^&*]/g, "") >
          pivot[field].replace(/[-+!@#$%^&*]/g, "")
      );
    } else {
      less = arr.filter((value, index) => {
        const isPivot = index === pivotPosition;
        return !isPivot && value[field] <= pivot[field];
      });

      more = arr.filter((value) => value[field] > pivot[field]);
    }
    return [...quickSort(less, field), pivot, ...quickSort(more, field)];
  }
}

Array.from(sortingACSItems).forEach((item) => {
  item.addEventListener("click", (event) => {
    sortByASC(event, countries);
  });
});

function sortByASC(event) {
  let id = event.target.parentElement.parentElement.id.slice(9);
  if (id === "iso") {
    id = "iso3";
  }
  if (id === "code") {
    id = "phone_code";
  }

  Array.from(rows).forEach((el) => el.remove());
  arrayToShow = quickSort(countries, id);
  showRows();
}

Array.from(sortingDESCItems).forEach((item) => {
  item.addEventListener("click", (event) => {
    sortByDESC(event);
  });
});

function sortByDESC(event) {
  let id = event.target.parentElement.parentElement.id.slice(9);
  if (id === "iso") {
    id = "iso3";
  }
  if (id === "code") {
    id = "phone_code";
  }
  Array.from(rows).forEach((el) => el.remove());
  arrayToShow = quickSort(countries, id).reverse();
  showRows();
}

//FILTERING

Array.from(filteringItems).forEach((item) => {
  item.addEventListener(
    "click",
    (event) => {
      Array.from(dropdownsContent).forEach((el) => {
        el.classList.remove("active");
      });
      filterDropdown.classList.add("filter-dropdown-active");
    },
    true
  );
});

filterSelectColumns.addEventListener("change", (event) => {
  let value = event.target.value;
  value === "Name" ? (column = "name") : null;
  value === "Capital" ? (column = "capital") : null;
  value === "Phone code" ? (column = "phone_code") : null;
  value === "Currency" ? (column = "currency") : null;
  value === "ISO" ? (column = "iso3") : null;
});

filterSelectOperators.addEventListener("change", (event) => {
  operator = event.target.value;
  console.log(operator);
});

filterInput.addEventListener("input", (event) => {
  inputValue = event.target.value;
  let filteredArr = [];
  if (operator === "contains") {
    filteredArr = countries.filter((el) =>
      el[column].includes(`${inputValue}`)
    );
  }
  if (operator === "equals") {
    filteredArr = countries.filter((el) => el[column] === inputValue);
  }
  if (operator === "starts with") {
    filteredArr = countries.filter(
      (el) => el[column].slice(0, inputValue.length) === inputValue
    );
  }
  if (operator === "ends with") {
    filteredArr = countries.filter(
      (el) => el[column].slice(-inputValue.length) === inputValue
    );
  }
  if (operator === "is empty") {
    filteredArr = countries.filter((el) => el[column] === "");
  }
  if (operator === "isn't empty") {
    filteredArr = countries.filter((el) => el[column] !== "");
  }

  Array.from(rows).forEach((el) => el.remove());
  arrayToShow = JSON.parse(JSON.stringify(filteredArr));
  showRows();
});

filterCross.addEventListener("click", (event) => {
  Array.from(rows).forEach((el) => el.remove());
  showRows();
  inputValue = "";
  filterDropdown.classList.remove("filter-dropdown-active");
});

//HIDING OF COLUMN

Array.from(hidingColumnItems).forEach((item) => {
  item.addEventListener("click", (event) => {
    hideColumn(event);
  });
});

function hideColumn(event) {
  const id = event.target.parentElement.parentElement.id.slice(9);
  const fieldsInRows = Array.from(document.getElementsByClassName(`${id}`));
  const headerField =
    event.target.parentElement.parentElement.parentElement.parentElement;
  headerField.style.display = "none";
  if (headerField.nextElementSibling) {
    headerField.nextElementSibling.style.display = "none";
  }
  fieldsInRows.forEach((field) => {
    field.hidden = true;
  });
}

//SHOWING OF COLUMNS

Array.from(showingColumnsItems).forEach((item) => {
  item.addEventListener("click", (event) => {
    showColumns(event);
  });
});

function showColumns(event) {
  const id = event.target.parentElement.parentElement.id.slice(9);
  console.log(`Show Show/Hide column menu from ${id}`);
}

//PAGINATION

amountOfRowsSelector.addEventListener("change", (event) => {
  Array.from(rows).forEach((el) => el.remove());
  amountOfRows = Number(event.target.value);
  showRows();
  paginationInfoP.innerText = `Page: ${page} of ${maxAmountOfPages}`;
});

backButton.addEventListener("click", () => {
  if (page === 1) {
    paginationInfoP.innerText = `Page: 1 of ${maxAmountOfPages}`;
  }
  if (page < firstIndexToShow + 1) {
    paginationInfoP.innerText = `Page: ${page} of ${maxAmountOfPages}`;
    page = page - 1;
    firstIndexToShow = firstIndexToShow - amountOfRows;
    Array.from(rows).forEach((el) => el.remove());
    showRows();
  }
});

forwardButton.addEventListener("click", () => {
  if (page < maxAmountOfPages) {
    paginationInfoP.innerText = `Page: ${page - -1} of ${maxAmountOfPages}`;
    page = page + 1;
    firstIndexToShow = firstIndexToShow + amountOfRows;
    Array.from(rows).forEach((el) => el.remove());
    showRows();
  }
});
