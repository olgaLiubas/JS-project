//COMMAND TO START SERVER npx json-server --watch db.json
//ALL VARIABLES

//fetching
let counterOfFetching = 1;
let countries;
let arrayToShow;

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
// let arrayToShow = JSON.parse(JSON.stringify(countries));
const amountOfRowsSelector = document.querySelector(".amount-of-rows");
const paginationInfoP = document.querySelector(".pagination-info");
const backButton = document.querySelector(".back-button");
const forwardButton = document.querySelector(".forward-button");
let amountOfRows = 20;
let paginationInfo = "Page: 1 of 1";
let page = 1;
let maxAmountOfPages = 1;
let firstIndexToShow = 0;

//FETCHING DATA

async function getData() {
  try {
    countries = await fetch("http://localhost:3000/countries", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => data);

    if (counterOfFetching === 1) {
      arrayToShow = JSON.parse(JSON.stringify(countries));
      counterOfFetching++;
    }
  } catch (e) {
    alert("Failed to fetch. Try again later!");
  }
}

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

document.addEventListener("DOMContentLoaded", (event) => showRows());

async function showRows() {
  if (counterOfFetching === 1) {
    await getData();
  }
  maxAmountOfPages =
    (arrayToShow.length - (arrayToShow.length % amountOfRows)) / amountOfRows;

  try {
    for (let i = firstIndexToShow; i < firstIndexToShow + amountOfRows; i++) {
      addContentToTable(arrayToShow[i]);
    }
  } catch (e) {
    console.log("Another elements weren't found!");
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
  arrayToShow = countries;
  showRows();
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
