//COMMAND TO START SERVER npx json-server --watch db.json
//START SERVER WITH MIDLEWARE npx json-server db.json --middlewares ./cors.js

//ALL VARIABLES

//fetching
let countries;
let url =
  "http://localhost:3000/countries?_sort=id&_order=asc&_limit=20&_page=1";

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
const amountOfRowsSelector = document.querySelector(".amount-of-rows");
const paginationInfoP = document.querySelector(".pagination-info");
const backButton = document.querySelector(".back-button");
const forwardButton = document.querySelector(".forward-button");
let amountOfRows = 20;
let page = 1;
let maxAmountOfPages = 1;

//editing
const modal = document.getElementById("myModal");
const cancelButton = document.getElementById("cancel-modal-button");
const changeButton = document.getElementById("change-modal-button");
const modalId = document.querySelector(".id-modal");
const modalName = document.querySelector(".name-modal");
const modalCapital = document.querySelector(".capital-modal");
const modalPhoneCode = document.querySelector(".phone_code-modal");
const modalCurrency = document.querySelector(".currency-modal");
const modalIso = document.querySelector(".iso3-modal");

//FETCHING DATA

async function getData() {
  try {
    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    countries = await response.json();
  } catch (e) {
    alert("Failed to fetch. Try again later!");
  }
}

function createURL(action = "sort", column = "id", order = "asc", value) {
  if (action === "sort") {
    url = `http://localhost:3000/countries?_sort=${column}&_order=${order}&_limit=${amountOfRows}&_page=${page}`;
  }
  if (action === "filter") {
    if (operator === "contains") {
      url = `http://localhost:3000/countries?${column}_like=${value}`;
    }
    if (operator === "equals") {
      url = `http://localhost:3000/countries?${column}=${value}&_limit=${amountOfRows}&_page=${page}`;
    }
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
            <div class="currency"><p>${el.currency}</p></div> 
            <div class="iso"><p>${el.iso3}</p></div>
            <p class="edit" onclick="showEditForm(event)" >🖊️</p>
        </div>
    `
  );
}

document.addEventListener("DOMContentLoaded", (event) => showRows());

async function showRows() {
  await getData();
  maxAmountOfPages = Math.ceil(250 / amountOfRows);
  try {
    countries.forEach((country) => addContentToTable(country));
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

Array.from(sortingACSItems).forEach((item) => {
  item.addEventListener("click", (event) => {
    sortByASC(event, countries);
  });
});

function sortByASC(event) {
  let id = event.target.parentElement.parentElement.id.slice(9);
  console.log(id);
  if (id === "iso") {
    id = "iso3";
  }
  if (id === "code") {
    id = "phone_code";
  }
  createURL("sort", id, "asc");
  Array.from(rows).forEach((el) => el.remove());
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
  createURL("sort", id, "desc");
  Array.from(rows).forEach((el) => el.remove());
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
  createURL("filter", column, "asc", inputValue);
  Array.from(rows).forEach((el) => el.remove());
  showRows();
});

filterCross.addEventListener("click", (event) => {
  createURL("sort", "id", "asc");
  Array.from(rows).forEach((el) => el.remove());
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
  page = 1;
  Array.from(rows).forEach((el) => el.remove());
  amountOfRows = Number(event.target.value);
  createURL();
  maxAmountOfPages = Math.ceil(250 / amountOfRows);
  Array.from(rows).forEach((el) => el.remove());
  showRows();
  paginationInfoP.innerText = `Page: ${page} of ${maxAmountOfPages}`;
});

backButton.addEventListener("click", () => {
  if (page > 1) {
    page = page - 1;
    paginationInfoP.innerText = `Page: ${page} of ${maxAmountOfPages}`;
    createURL();
    Array.from(rows).forEach((el) => el.remove());
    showRows();
  }
});

forwardButton.addEventListener("click", () => {
  if (page < maxAmountOfPages) {
    page = page + 1;
    paginationInfoP.innerText = `Page: ${page} of ${maxAmountOfPages}`;
    createURL();
    Array.from(rows).forEach((el) => el.remove());
    showRows();
  }
});

//EDITING

function showEditForm(e) {
  modal.style.display = "flex";

  const arrayOfRowElements = e.target.parentElement.children;

  modalId.innerText = searchElementOfRow(arrayOfRowElements, "id");
  modalName.value = searchElementOfRow(arrayOfRowElements, "name");
  modalCapital.value = searchElementOfRow(arrayOfRowElements, "capital");
  modalPhoneCode.value = searchElementOfRow(arrayOfRowElements, "code");
  modalCurrency.value = searchElementOfRow(arrayOfRowElements, "currency");
  modalIso.value = searchElementOfRow(arrayOfRowElements, "iso");
}

function searchElementOfRow(arr, clas) {
  return Array.from(arr).find((el) => el.className === clas).firstElementChild
    .innerText;
}

cancelButton.addEventListener("click", (event) => {
  modal.style.display = "none";
});

changeButton.addEventListener("click", (event) => {
  postData();
  modal.style.display = "none";
});

async function postData() {
  const url = `http://localhost:3000/countries/${Number(modalId.innerText)}`;
  const country = countries.find((el) => el.id === Number(modalId.innerText));
  try {
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        ...country,
        name: modalName.value,
        capital: modalCapital.value,
        phone_code: modalPhoneCode.value,
        currency: modalCurrency.value,
        iso3: modalIso.value,
      }),
    });
    Array.from(rows).forEach((el) => el.remove());
    await showRows();
  } catch (e) {
    alert("Failed to fetch. Try again later!");
  }

  modal.style.display = "none";
}
