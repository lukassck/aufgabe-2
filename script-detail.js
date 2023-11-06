// JavaScript-Code für die Interaktion und Anzeigen von Daten
// Sie müssen hier die Funktionalitäten für die Suche und Detailansicht implementieren.

// Beispiel für das Hinzufügen von Suchergebnissen
/*
function displaySearchResults(results) {
  const searchResults = document.getElementById("search-results");
  searchResults.innerHTML = "";

  if (results.length === 0) {
    document.getElementById("search-hint").textContent =
      "Keine Einträge gefunden.";
  } else {
    document.getElementById("search-hint").textContent =
      "Kurzdarstellung der gefundenen Treffer:";
    results.forEach((result) => {
      const resultItem = document.createElement("div");
      resultItem.textContent = result;
      searchResults.appendChild(resultItem);
    });
  }
}
*/
/*
// Beispiel für das Laden von Details und abhängigen Daten auf der Detailseite
function loadDetailPageData(data, relatedData) {
  const dataDetails = document.getElementById("data-details");
  dataDetails.textContent = data;

  const relatedDataList = document.getElementById("related-data");
  relatedDataList.innerHTML = "";
  relatedData.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    relatedDataList.appendChild(listItem);
  });
}
*/

/*
// Produkte laden
fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    const produktListe = document.getElementById("produktListe");
    data.products.forEach((produkt) => {
      const produktElement = document.createElement("div");
      produktElement.innerHTML = `
                <h2>${produkt.title}</h2>
                <p>${produkt.description}</p>
                <p>Preis: $${produkt.price.toFixed(2)}</p>
                <p>Rating: ${produkt.rating}</p>
                <p>Auf Lager: ${produkt.stock}</p>
                <img src="${produkt.thumbnail}" alt="${produkt.title}">
            `;
      produktListe.appendChild(produktElement);
    });
  })
  .catch((error) => console.error("Fehler beim Laden der Daten:", error));
  */

// JAN
document.addEventListener("DOMContentLoaded", function () {
  const searchResults = document.getElementById("resultsContainer"); //Referenzen zu den HTML-Elementen
  const searchInput = document.getElementById("input");
  const searchButton = document.getElementById("search");

  let products = []; // Hier speichern wir alle Produkte, die wir von der API erhalten
  const apiUrl = "https://dummyjson.com/products"; //URL der API, von der die Daten abgerufen werden sollen
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); //Antwort in JSON konvertieren
    })
    .then((data) => {
      products = data.products; // Speichere die Daten in der products-Variable
    })
    .catch((error) => {
      console.error("Fehler beim Laden der Daten:", error);
    });

  // Suche ausführen
  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim(); // Hole den Suchbegriff und passe Groß- und Kleinschreibung sowie Leerzeichen an
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );
    displaySearchResults(filteredProducts); // Zeige nur gefilterte Produkte an
  }
  // Event-Listener für den Suchbutton
  searchButton.addEventListener("click", performSearch);
  // Event-Listener für die Eingabe im Suchfeld
  // searchInput.addEventListener("input", performSearch);
  // Funktion zum Navigieren zur Detailseite
  function navigateToDetailPage(productId) {
    window.location.href = `detail.html?id=${productId}`;
  }
  // Event-Listener für das Klicken auf Suchergebnisse
  searchResults.addEventListener("click", function (event) {
    const clickedItem = event.target.closest(".search-result"); // Das geklickte Suchergebnis finden
    if (clickedItem) {
      const productId = clickedItem.getAttribute("data-product-id"); // Produkt-ID aus dem Datenattribut lesen
      navigateToDetailPage(productId); // Navigiere zur Detailseite mit der ausgewählten Produkt-ID
    }
  });
  function displaySearchResults(productsToDisplay) {
    searchResults.innerHTML = "";
    if (!Array.isArray(productsToDisplay) || productsToDisplay.length === 0) {
      searchResults.innerHTML = "Keine Ergebnisse gefunden.";
      return;
    }
    const resultList = document.createElement("ul");
    productsToDisplay.forEach((product) => {
      const listItem = document.createElement("li");
      listItem.classList.add("search-result"); // CSS-Klasse für das Suchergebnis hinzufügen
      // Erstelle ein <img>-Element für das Produktbild
      const productImage = document.createElement("img");
      productImage.src = product.thumbnail; // Bild-URL aus DummyJson
      // Erstelle ein <span>-Element für den Produktnamen
      const productName = document.createElement("span");
      productName.textContent = product.title;
      listItem.setAttribute("data-product-id", product.id); // Produkt-ID als Datenattribut hinzufügen
      listItem.appendChild(productImage); // Füge das Bild zum Listenelement hinzu
      listItem.appendChild(productName); // Füge den Produktnamen zum Listenelement hinzu
      resultList.appendChild(listItem); // Füge das Listenelement zur Ergebnisliste hinzu
    });
    searchResults.appendChild(resultList); // Füge die Ergebnisliste zu den Suchergebnissen hinzu
  }
});

/*document.addEventListener("DOMContentLoaded", function () {
  const toggleMenuButton = document.getElementById("toggleMenu");
  const menuLinks = document.querySelector(".menu-links");
  toggleMenuButton.addEventListener("click", function () {
    menuLinks.classList.toggle("active");
  });
});
*/
/*
//  Justin
document.addEventListener("DOMContentLoaded", function () {
  const searchbar = document.getElementById("searchbar");
  const searchButton = document.getElementById("Search");

  let assignedValue; // Hier wird der eingegebene Wert gespeichert

  searchButton.addEventListener("click", function () {
    const enteredValue = searchbar.value;
    assignedValue = enteredValue;

    let url = `https://dummyjson.com/users/${assignedValue}/todos`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const dataContainer = document.getElementById("resultsContainer");

        // Lösche den Container-Inhalt, um vorherige Suchergebnisse zu entfernen
        dataContainer.innerHTML = "";

        if (data.todos) {
          data.todos.forEach((todo) => {
            const todoItem = document.createElement("div");
            todoItem.textContent = `ID: ${todo.id}, Todo: ${todo.todo}`;
            dataContainer.appendChild(todoItem);
          });
        } else {
          dataContainer.textContent = "Keine Todos gefunden.";
        }
      })
      .catch((error) =>
        console.error("Fehler beim Abrufen der JSON-Daten: " + error)
      );
  });
});

*/
