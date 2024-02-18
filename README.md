# Terminal-Based Hat-and-Holes Game

This project is a simple, engaging, and interactive terminal-based game developed using Node.js. In this game, players navigate through a field trying to find a hat (`^`) while avoiding holes (`O`). It's a great way to demonstrate basic programming concepts in JavaScript and Node.js, such as class-based objects, handling user input, and outputting colored text to the terminal.

## Features

- **Dynamic Field Generation:** Each game session generates a new field, placing the hat, holes, and the player's starting position randomly.
- **Colored Output:** Leverages the `terminal-kit` library to output the game elements in different colors, enhancing the user experience.
- **Input Handling:** Players move their character (`*`) using the `w`, `a`, `s`, and `d` keys to navigate the field.

## Prerequisites

Before you begin, ensure you have Node.js installed on your system. If you do not have Node.js installed, download and install it from [nodejs.org](https://nodejs.org/).

## Setup

Follow these steps to set up the game on your local machine:

1. **Clone the Repository**

   If you have git installed, clone the project repository to your local machine. Otherwise, you can download the project as a ZIP file and extract it.

   ```bash
   git clone https://your-repository-url.com
   cd path-to-your-game-directory

2. **Install Dependencies**

   The game requires `prompt-sync` for handling synchronous user input and `terminal-kit` for colored terminal output. Install these packages using npm:

   ```bash
   npm install

## How to Play

1. **Launch the Game**

   Navigate to the game's directory (if you're not already there) and start the game using Node.js:

   ```bash
   node main.js
2. **Game Controls**
   
    - Move up: `w`
   - Move left: `a`
   - Move down: `s`
   - Move right: `d`

   Your goal is to navigate to the hat (`^`) without falling into any holes (`O`). Moving out of bounds or into a hole will end the game.

3. **Exiting the Game**

   You can exit the game at any time by pressing `Ctrl` + `C`.

## Customization

You can customize the field size and the percentage of holes by adjusting the parameters in the `Field.generateField` method within the game's source code.

## Contributing

Contributions to the game are welcome! If you have suggestions for improvements or encounter any bugs, feel free to fork the repository, make your changes, and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open source and available under the [MIT License](https://github.com/bumbitzu/find-your-hat/blob/main/LICENSE).
    
