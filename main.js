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

const tableWrapper = document.querySelector(".table-wrapper");

function addContentToTable(el) {
  tableWrapper.insertAdjacentHTML(
    "beforeend",
    `
        <div class="row">
            <div class="checkbox"><input type="checkbox" name="checkbox-row"></div>
            <div class="id"><p>${el.id}</p></div>
            <div class="name"><p>${el.name}</p></div>
            <div class="iso"><p>${el.iso3}</p></div>
            <div class="code"><p>${el.phone_code}</p></div>
            <div class="currency">${el.currency}<p></p></div>
            <div class="capital"><p>${el.capital}</p></div>
        </div>
    `
  );
}

document.addEventListener("DOMContentLoaded", (event) => {
  countries.forEach((el) => addContentToTable(el));
});

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (event) => {
    addActiveClass(event);
  });
});

function addActiveClass(event) {
  const dropdownsContent = document.getElementsByClassName("dropdown-content");
  if (!event.target.nextElementSibling.className.includes("active")) {
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

const sortingACSItems = document.getElementsByClassName("sort-asc");

Array.from(sortingACSItems).forEach((item) => {
  item.addEventListener("click", (event) => {
    sortByASC(event);
  });
});

function sortByASC(event) {
  const id = event.target.parentElement.parentElement.id.slice(9);
  console.log(`Sort by ASC from ${id}`);
}

const sortingDESCItems = document.getElementsByClassName("sort-desc");

Array.from(sortingDESCItems).forEach((item) => {
  item.addEventListener("click", (event) => {
    sortByDESC(event);
  });
});

function sortByDESC(event) {
  const id = event.target.parentElement.parentElement.id.slice(9);
  console.log(`Sort by DESC from ${id}`);
}

const filteringItems = document.getElementsByClassName("filter");

Array.from(filteringItems).forEach((item) => {
  item.addEventListener("click", (event) => {
    filterRows(event);
  });
});

function filterRows(event) {
  const id = event.target.parentElement.parentElement.id.slice(9);
  console.log(`Filter rows from ${id}`);
}

const hidingColumnItems = document.getElementsByClassName("hide-column");

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

const showingColumnsItems = document.getElementsByClassName("show-columns");

Array.from(showingColumnsItems).forEach((item) => {
  item.addEventListener("click", (event) => {
    showColumns(event);
  });
});

function showColumns(event) {
  const id = event.target.parentElement.parentElement.id.slice(9);
  console.log(`Show Show/Hide column menu from ${id}`);
}
