const heroesCheckbox = document.getElementById("heroes");
const autoRefreshCheckbox = document.getElementById("autoRefresh");
const numTowersInput = document.getElementById("numTowers");
const absoluteCheckbox = document.getElementById("absolute");
const xpathCheckbox = document.getElementById("X-Path")
const maxTierInput = document.getElementById("maxTier");
const generateButton = document.getElementById("generate");
const resultTable = document.getElementById("resultTable");
const copyTableButton = document.getElementById("copyTable");
const copiedTable = document.getElementById("copiedTable");

const towers = [
    "Dart Monkey",
    "Boomerang Monkey",
    "Bomb Shooter",
    "Tack Shooter",
    "Ice Monkey",
    "Glue Gunner",
    "Sniper Monkey",
    "Monkey Sub",
    "Monkey Buccaneer",
    "Monkey Ace",
    "Heli Pilot",
    "Mortar Monkey",
    "Dartling Gunner",
    "Wizard Monkey",
    "Super Monkey",
    "Ninja Monkey",
    "Alchemist",
    "Druid",
    "Banana Farm",
    "Spike Factory",
    "Monkey Village",
    "Engineer Monkey",
    "Beast Handler",
];

const magicTowers = [
    "Wizard Monkey",
    "Super Monkey",
    "Ninja Monkey",
    "Alchemist",
    "Druid",
];
const militaryTowers = [
    "Sniper Monkey",
    "Monkey Sub",
    "Monkey Buccaneer",
    "Monkey Ace",
    "Heli Pilot",
    "Mortar Monkey",
    "Dartling Gunner",
];
const supportTowers = [
    "Banana Farm",
    "Spike Factory",
    "Monkey Village",
    "Engineer Monkey",
    "Beast Handler",
];

const heroes = [
    "Admiral Brickell",
    "Adora",
    "Benjamin",
    "Captain Churchill",
    "Etienne",
    "Ezili",
    "Geraldo",
    "Gwendolin",
    "Obyn Greenfoot",
    "Pat Fusty",
    "Psi",
    "Quincy",
    "Sauda",
    "Striker Jones",
];

function getTowerType(tower) {
    if (magicTowers.includes(tower)) return "magic";
    else if (militaryTowers.includes(tower)) return "military";
    else if (supportTowers.includes(tower)) return "support";
    else if (heroes.includes(tower)) return "hero";
    else return "primary";
}

function generateRandomCrosspath(maxTier) {
    let path1, path2;
    if (xpathCheckbox.checked) {
        path1 = "X"
        path2 = "X"
    }
    else if (absoluteCheckbox.checked) {
        path1 = maxTier;
        path2 = 2;
    } else {
        path1 = Math.floor(Math.random() * (maxTier - 2)) + 3;
        path2 = Math.floor(Math.random() * 3);
    }
    const zeroPosition = Math.floor(Math.random() * 3);
    let crosspath = ["0", "0", "0"];
    crosspath[zeroPosition] = '<span class="red-zero">0</span>';
    crosspath[(zeroPosition + 1) % 3] = path1.toString();
    crosspath[(zeroPosition + 2) % 3] = path2.toString();

    return crosspath.join("");
}

function generateTable() {
    const includeHeroes = heroesCheckbox.checked;
    const numTowers = parseInt(numTowersInput.value);
    const maxTier = parseInt(maxTierInput.value);

    let randomOptions = towers.slice();

    const randomSelection = [];
    for (let i = 0; i < numTowers; i++) {
        const randomIndex = Math.floor(Math.random() * randomOptions.length);
        randomSelection.push(randomOptions.splice(randomIndex, 1)[0]);
    }

    randomSelection.sort((a, b) => {
        return towers.indexOf(a) - towers.indexOf(b);
    });

    if (includeHeroes) {
        const randomHeroIndex = Math.floor(Math.random() * heroes.length);
        randomSelection.unshift(heroes[randomHeroIndex]);
    }

    const tbody = resultTable.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";

    for (let option of randomSelection) {
        const row = tbody.insertRow();

        const cell1 = row.insertCell(0);
        cell1.innerHTML = option;
        cell1.classList.add(getTowerType(option));
        const cell2 = row.insertCell(1);
        if (heroes.includes(option)) {
            cell2.innerHTML = "-";
        } else {
            cell2.innerHTML = generateRandomCrosspath(maxTier);
        }
    }
}

function copyTable() {
    const resultTableBody = resultTable.getElementsByTagName("tbody")[0];

    const lastCopiedTable = copiedTablesContainer.getElementsByTagName("table")[0];
    if (lastCopiedTable) {
        const lastCopiedTableBody = lastCopiedTable.getElementsByTagName("tbody")[0];
        if (lastCopiedTableBody.innerHTML === resultTableBody.innerHTML) {
            return;
        }
    }

    const newTable = document.createElement("table");
    const newTableHeader = document.createElement("thead");
    const newTableHeaderRow = document.createElement("tr");
    const newTableBody = document.createElement("tbody");

    const towerHeader = document.createElement("th");
    towerHeader.textContent = "Tower";
    const crosspathHeader = document.createElement("th");
    crosspathHeader.textContent = "Crosspath";

    newTableHeaderRow.appendChild(towerHeader);
    newTableHeaderRow.appendChild(crosspathHeader);
    newTableHeader.appendChild(newTableHeaderRow);
    newTable.appendChild(newTableHeader);

    newTableBody.innerHTML = resultTableBody.innerHTML;
    newTable.appendChild(newTableBody);

    copiedTablesContainer.insertBefore(newTable, copiedTablesContainer.firstChild);
}

if (autoRefreshCheckbox.checked) {
    heroesCheckbox.addEventListener("change", generateTable);
    absoluteCheckbox.addEventListener("change", generateTable);
    xpathCheckbox.addEventListener("change", generateTable);
    numTowersInput.addEventListener("input", generateTable);
    maxTierInput.addEventListener("input", generateTable);
}
generateButton.addEventListener("click", generateTable);

copyTableButton.addEventListener("click", copyTable);
generateTable();