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
    losses: $(".losses")
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
      console.log('Ready!');
      gameState.gems.gem.click(function(){
        console.log('Gem clicked');
        var gemtxt = $(this).attr('alt');
        console.log('Gem alt', gemtxt);
        // $(this).attr('alt', 'clickes');

        // Check to see if gem has alt text
        if(!gemtxt) {
          // Case for gem1
          if($(this).attr("class").includes('gem1')) {
            $(this).attr('alt', gameState.values.gem1);
            adder = $(this).attr('alt');
          }
          // Case for gem2
          if($(this).attr("class").includes('gem2')) {
            $(this).attr('alt', gameState.values.gem2);
          }
          // Case for gem3
          if($(this).attr("class").includes('gem3')) {
            $(this).attr('alt', gameState.values.gem3);
          }
          // Case for gem4
          if($(this).attr("class").includes('gem4')) {
            $(this).attr('alt', gameState.values.gem4);
          }
        } else {
          gameState.addScore(gameState.getClasses($(this)));
        } 
        console.log('Adder:', adder);
        gameState.values.score += parseInt(adder);
        console.log('Score:', gameState.values.score);
      });

    });
  },

  // To add score, need:
  // string for gem class
  // gameState.values.gem#
  addScore(gemNum) {
    console.log('gemNum:', gemNum);
    var gemVal = $('.' + gemNum).attr('alt');
    this.values.score += parseInt(gemVal);
  },

  // gets list of classes for a clicked element
  // all gem numbers are to be declared as the last string to make
  // finding the gem# easy
  getClasses(clicked) {
    var classList = clicked.attr('class').split(' '); 
    console.log('class list[end]:', classList[classList.length-1]);
    return classList[classList.length-1];
  }

};

gameState.init();
gameState.update();
console.log(gameState.values);

