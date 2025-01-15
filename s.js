// Sample data for anime characters
const characters = [
    {
        name: "Naruto Uzumaki",
        anime: "Naruto",
        stats: {
            strength: 90,
            intelligence: 85,
            agility: 80,
        },
    },
    {
        name: "Saitama",
        anime: "One Punch Man",
        stats: {
            strength: 100,
            intelligence: 70,
            agility: 75,
        },
    },
    {
        name: "Goku",
        anime: "Dragon Ball Z",
        stats: {
            strength: 95,
            intelligence: 80,
            agility: 90,
        },
    },
];

// Function to display character stats
function displayCharacters() {
    const characterList = document.getElementById("character-list");
    characters.forEach(character => {
        const characterDiv = document.createElement("div");
        characterDiv.classList.add("character");
        
        characterDiv.innerHTML = `
            <h2>${character.name} (${character.anime})</h2>
            <div class="stats">
                <p>Strength: ${character.stats.strength}</p>
                <p>Intelligence: ${character.stats.intelligence}</p>
                <p>Agility: ${character.stats.agility}</p>
            </div>
        `;
        
        characterList.appendChild(characterDiv);
    });
}

// Call the function to display characters
displayCharacters();