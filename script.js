const ts = 1; // Timestamp (can be any number)
const publicKey = "27d74b528cafea17c1d6c531de2b5827";
const hash = "0b4562d9fd5a7ebac51d7a4d0348b6c9"; // ts + privateKey + publicKey

// Task 2: Fetch characters
async function fetchMarvelCharacters() {
  try {
    const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=10`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data.results); // Log fetched characters
    displayCharacters(data.data.results);
  } catch (error) {
    console.error("Error fetching Marvel characters:", error);
  }
}

// Task 3: Update UI
function displayCharacters(characters) {
  const container = document.getElementById("character-container");
  container.innerHTML = ""; // Clear previous results

  characters.forEach(character => {
    const div = document.createElement("div");
    div.className = "character";
    div.innerHTML = `
      <h3>${character.name}</h3>
      <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}">
      <p>${character.description || "No description available."}</p>
    `;
    container.appendChild(div);
  });
}
