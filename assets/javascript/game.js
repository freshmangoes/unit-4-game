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
    wins: 0,
    losses: 0,
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
    var currGem = element;
    // var currVal = '.' + element + '-val';
    // console.log('setGemAlt currGem', currGem);
    // console.log('setGemAlt currVal', currVal);
    $('.' + currGem).attr('alt', this.values[currGem]);
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

      gameState.gems.gem.click(function(){
        var currGem = gameState.getClasses($(this));
        var currVal = '.' + currGem + '-val';

        gameState.setGemAlt(gameState.getClasses($(this)));

        gameState.updateGemVal(currVal, currGem);
        gameState.addScore(gameState.getClasses($(this)));
        gameState.updateHTML();
        gameState.checkGoal(gameState.values.score);
      });

    });
  },

  // make it so only certain gems get updated when they are clicked
  updateGemVal(val, gem) {
    $(val).text(this.values[gem]);
    $(val).removeAttr('hidden');
  },

  updateHTML(){
    $(this.display.score).text(this.values.score);
    $(this.display.wins).text(this.values.wins);
    $(this.display.losses).text(this.values.losses);
  },

  hideValues() {
    $(this.display.gem1val).attr('hidden', '');
    $(this.display.gem2val).attr('hidden', '');
    $(this.display.gem3val).attr('hidden', '');
    $(this.display.gem4val).attr('hidden', '');
  },

  // adds score using number attached to alt text of img
  addScore(gemNum) {
    var gemVal = $('.' + gemNum).attr('alt');
    this.values.score += parseInt(gemVal);
  },

  checkGoal(score) {
    if(score > this.values.goal) {
      console.log('Oops');
      this.values.losses++;
      this.reset();
    } else if(score == this.values.goal) {
      this.values.wins++;
      this.reset();
    }
  },

  reset() {
    this.values.score = 0;
    this.init();
    $(this.display.score).text(this.values.score);
    this.hideValues();
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

