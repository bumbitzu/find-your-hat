// Required for input from the console and colored terminal output.
const prompt = require('prompt-sync')({ sigint: true });
const term = require('terminal-kit').terminal;

// Constants for the game elements.
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field
{
  constructor(field)
  {
    this.field = field;
    // Initializing player's position based on the field.
    this.playerPosition = this.findStartPosition(field);
    this.fieldRows = this.field.length;
    this.fieldCols = this.field[ 0 ].length;
  }

  // Method to find the start position of the player.
  findStartPosition(field)
  {
    for (let i = 0; i < field.length; i++)
    {
      for (let j = 0; j < field[ i ].length; j++)
      {
        if (field[ i ][ j ] === pathCharacter)
        {
          return { x: j, y: i };
        }
      }
    }
  }

  // Printing the field with colors.
  print()
  {
    const colors = {
      '*': 'blue',
      '░': 'green',
      'O': 'red',
      '^': 'magenta'
    };

    this.field.forEach(row =>
    {
      row.forEach(col =>
      {
        const color = colors[ col ];
        term[ color ](col);
      });
      term('\n');
    });
  }

  // Main game loop.
  run()
  {
    term.cyan(`Move the character ('w' = up, 's' = down, 'a' = left, 'd' = right):\n`);
    while (true)
    {
      this.print();
      const direction = prompt();

      this.movePlayer(direction);

      // Check the new position after moving.
      const { x, y } = this.playerPosition;

      if (this.field[ y ][ x ] === hole)
      {
        term.red('You fell into a hole! You lose!\n');
        break;
      } else if (this.field[ y ][ x ] === hat)
      {
        term.green('You found the hat! You win!\n');
        break;
      } else
      {
        this.field[ y ][ x ] = pathCharacter;
      }
    }
  }

  // Handling player movement.
  movePlayer(direction)
  {
    switch (direction)
    {
      case 'w': // Up
        if (this.playerPosition.y - 1 < 0)
        {
          term.red('Out of bounds!\n');
        } else
        {
          this.playerPosition.y--;
        }
        break;
      case 's': // Down
        if (this.playerPosition.y + 1 >= this.fieldRows)
        {
          term.red('Out of bounds!\n');
        } else
        {
          this.playerPosition.y++;
        }
        break;
      case 'a': // Left
        if (this.playerPosition.x - 1 < 0)
        {
          term.red('Out of bounds!\n');
        } else
        {
          this.playerPosition.x--;
        }
        break;
      case 'd': // Right
        if (this.playerPosition.x + 1 >= this.fieldCols)
        {
          term.red('Out of bounds!\n');
        } else
        {
          this.playerPosition.x++;
        }
        break;
      default:
        term.yellow('Invalid input! Use w, a, s, d to move.\n');
    }
  }

  // Generate a field with random placement of hat, holes, and player.
  static generateField(height, width, percentage = 0.1)
  {
    let field = new Array(height).fill(null).map(() => new Array(width).fill(fieldCharacter));
    // Place the hat at a random position, not at (0, 0).
    let hatPosition;
    do
    {
      hatPosition = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height)
      };
    } while (hatPosition.x === 0 && hatPosition.y === 0);
    field[ hatPosition.y ][ hatPosition.x ] = hat;

    // Place holes based on the specified percentage.
    const totalPlaces = height * width - 1; // Exclude the hat position.
    const holes = Math.floor(totalPlaces * percentage);
    for (let i = 0; i < holes; i++)
    {
      let holePosition;
      do
      {
        holePosition = {
          x: Math.floor(Math.random() * width),
          y: Math.floor(Math.random() * height)
        };
      } while (field[ holePosition.y ][ holePosition.x ] !== fieldCharacter);
      field[ holePosition.y ][ holePosition.x ] = hole;
    }

    // Place the player at a random position that is not a hole or the hat.
    let playerPosition;
    do
    {
      playerPosition = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height)
      };
    } while (field[ playerPosition.y ][ playerPosition.x ] !== fieldCharacter);
    field[ playerPosition.y ][ playerPosition.x ] = pathCharacter;

    return field;
  }
}

// Starting the game.
const generatedField = Field.generateField(10, 40, 0.2);
const myField = new Field(generatedField);
myField.run();
