const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field){
        this.field = field;
        this.y = 0;
        this.x = 0;
        this.prevY = 0;
        this.prevX = 0;
        this.win = false;
        this.lose = false;
        this.message = 'Make a move entering r, l, d or u: ';
    }
  
    print(){
      for(let i = 0; i < this.field.length; i++){
        console.log(this.field[i].join(''));
      }
    }

    newGame(){
        console.clear();
        this.print();

        while(!this.win && !this.lose){
            // Get user move input
            const positionPrompt = String(prompt(this.message)).toLowerCase();
            this.move(positionPrompt);
        }        
    }

    move(positionPrompt){
        // Save previous position value in case of try ty move back
        this.prevY = this.y;
        this.prevX = this.x;
        // Make a move
        switch(positionPrompt){
            case 'r':
                this.x++;
                break;
            case 'l':
                this.x--;
                break;
            case 'd':
                this.y++;
                break;
            case 'u':
                this.y--;
                break;
            default:
                this.message = 'Invalid input 💥  Make a move entering r, l, d or u: '
                break;
        }

        // Check position
        if(this.y < 0 || this.x < 0 || this.y ===  this.field.length || this.x === this.field[this.y].length) {
            this.loseGame('fallOut');
        } else if (this.field[this.y][this.x] === hole) {
            this.loseGame('hole');
        } else if (this.field[this.y][this.x] === pathCharacter){
            this.moveBack();
        } else if(this.field[this.y][this.x] === hat) {
            this.winGame();
        } else {
            this.moveIsOk();
        }
    }
    
    loseGame(reason){
        this.lose = true;
        console.clear();
        reason === 'fallOut' ? console.log('Ooops! You\'ve fallen out of the board 💔') : console.log('Ooops! You\'ve fallen into the hole 🌌');
    }
    moveBack(){
        this.message = 'Sorry, you can\'t move backwards 😔  Make a move entering r, l, d or u: ';
        this.y = this.prevY;
        this.x = this.prevX;
        console.clear();
        this.print();
    }

    winGame(){
        this.win = true;
        console.clear();
        console.log('You\'ve found your hat! 🎩👒');
    }

    moveIsOk(){
        this.field[this.y][this.x] = pathCharacter;
        this.message = 'Make a move entering r, l, d or u: ';
        console.clear();
        this.print();
    }
  }
    
  const myField = new Field([
    ['*', 'O', '░', '░', '░', '░'],
    ['░', '░', '░', 'O', '░', 'O'],
    ['O', 'O', 'O', '░', '░', '░'],
    ['░', '^', '░', '░', '░', '░'],
  ]);

  myField.newGame();




