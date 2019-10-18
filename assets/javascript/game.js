var gameState = {
  // jQuery selectors for gems
  gems: {
    gem1: $(".gem1"),
    gem2: $(".gem2"),
    gem3: $(".gem3"),
    gem4: $(".gem4")
  },

  // jQuery selectors for game display
  display: {
    score: $(".score"),
    wins: $(".wins"),
    losses: $(".losses")
  },

  // Game values, goal and game values
  values: {
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

  },

};

gameState.init();
console.log(gameState.values);

