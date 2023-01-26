const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    constructor(field){
        this.field = field;
        this.position = [0, 0];
        this.win = false;
        this.lose = false;
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
            // Get user position input
            const positionPrompt = String(prompt('Your position (r, l or d): ')).toLocaleLowerCase();
            !this.win && !this.lose ? this.newMove(positionPrompt) : null ;

        }
    }



    positionRight(){

        if(this.position[0] == this.field.length - 1) {
            this.loseFallOut();
        } else {
            this.position[0]++;
            this.field[this.position[1]][this.position[0]] = '*';
        }
    }
    

    loseFallOut(){
        this.lose = true;

        console.log('Ooop, you\'ve falle out of the board :(');
    }

    newMove(positionPrompt){
        this.print()

        // Handle user input
        switch(positionPrompt){
            case 'r':
                this.positionRight();
                break;
            case 'l':
                this.positionLeft();
                break;
            case 'd':
                this.positionDown();
                break;
        }
    }



  }
  
  
  const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

  myField.newGame();



