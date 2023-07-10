# BTD 6 Randomizer

This project is a simple web application that generates random tower and crosspath combinations for the popular game Bloons TD 6. It provides an engaging way for players to challenge themselves and experiment with different strategies.

## Features

- Generates a random selection of towers from the game.
- Allows users to include or exclude heroes from the random selection.
- Configurable number of towers (between 1 and 20) to be included in the selection.
- Adjustable maximum tier (between 3 and 5) for the randomly generated crosspaths.
- Option to generate "absolute" crosspaths, which prioritize the maximum tier in one path and a tier 2 upgrade in the other path.
- Displays a neat table with the random selection of towers and their corresponding crosspaths.

## Installation

No installation is required, as this is a standalone HTML, CSS, and JavaScript project. To use the BTD 6 Randomizer, simply clone the repository or download the necessary files, and open the HTML file in your preferred web browser.

```
git clone https://github.com/Hailxjy/BTD6-random-tower-generator.git
```

## Usage

1. Open the `index.html` file in your preferred web browser.
2. Use the provided checkboxes and input fields to customize the random selection.
   - Include heroes: Check or uncheck the box to include or exclude heroes from the random selection.
   - Number of towers: Adjust the input field to set the desired number of towers in the random selection (between 1 and 20).
   - Max tier: Set the maximum tier for the randomly generated crosspaths (between 3 and 5).
   - Absolute: Check or uncheck the box to enable or disable the generation of "absolute" crosspaths.
3. Click the "Refresh" button to generate a new random selection of towers and crosspaths.
4. The table will display the random selection, sorted by tower type, with corresponding crosspaths. Heroes, if included, will be displayed at the top of the table with a "-" in the crosspath column.

## Contributing

If you'd like to contribute to this project, please submit a pull request with your proposed changes. All contributions are welcome, whether they be bugfixes, new features, or improvements to the existing codebase.