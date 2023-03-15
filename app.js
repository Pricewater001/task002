async function fetchData() {
  let count = 0;
  let data = await fetch(" https://api.coincap.io/v2/assets")
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => {
      console.error();
      return [];
    });
  return data;
}

async function Show() {
  const data = await fetchData();
  const container = document.getElementById("container");
  data.data.map((element) => {
    const card = document.createElement("div");
    container.appendChild(card);
    card.classList.add("card");
    const name = document.createElement("h3");
    const rank = document.createElement("h3");
    const currency = document.createElement("span");
    name.textContent = element.name;
    rank.textContent = element.rank;
    currency.textContent = Number(element.priceUsd).toFixed(2);
    card.appendChild(name);
    card.appendChild(rank);
    card.appendChild(currency);
  });
}
Show();
