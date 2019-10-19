var gameState = {
  // jQuery selectors for gems
  gems: {
    gem1: $(".gem1"),
    gem2: $(".gem2"),
    gem3: $(".gem3"),
    gem4: $(".gem4"),
    gem: $(".gem"),
  },

  // jQuery selectors for game display
  display: {
    score: $(".score"),
    wins: $(".wins"),
    losses: $(".losses"),

    gem1val: $('.gem1-val'),
    gem2val: $('.gem2-val'),
    gem3val: $('.gem3-val'),
    gem4val: $('.gem4-val'),
  },

  // Game values, goal and game values
  values: {
  
    score: 0, // variable for adding to user score
    goal: 0,
    gem1: 1,
    gem2: 1,
    gem3: 1,
    gem4: 1
  },

  // Gives each values.gem# a value by using randomGemVal()
  setGemVals() {
    this.values.gem1 = this.randomGemVal();
    this.values.gem2 = this.randomGemVal();
    this.values.gem3 = this.randomGemVal();
    this.values.gem4 = this.randomGemVal();
  },

  setGemAlt(element) {

  },

  // Sets goal
  setGoal() {
    this.values.goal = Math.floor(Math.random() * (120 - 19) + 19);
  },

  // Creates a random value between 1 and 12
  randomGemVal() {
    var gameVal = Math.floor(Math.random() * (12 - 1) + 1);
    console.log('gameVal:', gameVal);
    return gameVal;
  },

  // Initializes game
  init() {
    this.setGoal();
    this.setGemVals();
  },

  // Updates game, WIP
  update() {
    $(document).ready(function() {
      // console.log('Ready!');
      gameState.gems.gem.click(function(){
        console.log('Gem clicked');
        var gemtxt = $(this).attr('alt');
        
        // Check to see if gem has alt text
        if(!gemtxt) {
          // variables to clean up syntax
          var currGem = gameState.getClasses($(this));
          var currVal = '.' + currGem + '-val';
          
          // check to see if clicked gem has an attached value
          if($(this).attr('class').includes(currGem)) {
            // sets alt attr to the value of matching gem
            $(this).attr('alt', gameState.values[currGem]);
            // removes hidden attr
            $(currVal).removeAttr('hidden');
            // updates the text of matching gem value element
            $(currVal).text(gameState.values[currGem]);

          }
        } 
        gameState.addScore(gameState.getClasses($(this)));
        console.log('Score:', gameState.values.score);
        $(gameState.display.score).text(gameState.values.score);
      });

    });
  },

  // adds score using number attached to alt text of img
  addScore(gemNum) {
    var gemVal = $('.' + gemNum).attr('alt');
    this.values.score += parseInt(gemVal);
  },

  // gets list of classes for a clicked element
  // all gem numbers are to be declared as the last string to make
  // finding the gem# easy
  getClasses(clicked) {
    var classList = clicked.attr('class').split(' '); 
    return classList[classList.length-1];
  }

};

gameState.init();
gameState.update();
console.log(gameState.values);

