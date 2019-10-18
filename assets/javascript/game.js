var gameState = {
  gems: {
    gem1 : $(".gem1"),
    gem2 : $(".gem2"),
    gem3 : $(".gem3"),
  },

  display: {
    score: $(".score"),
    wins: $(".wins"),
    losses: $(".losses")
  },

  values: {
    goal: 0,
    gem1: 1,
    gem2: 1,
    gem3: 1,
    gem4: 1
  },
  
  setGemVals() {
    this.values.gem1 = this.randomGemVal();
    this.values.gem2 = this.randomGemVal();
    this.values.gem3 = this.randomGemVal();
    this.values.gem4 = this.randomGemVal();
  },

  randomGoal() {
    this.values.goal = Math.floor(Math.random() * (120-19) + 19);
  },

  randomGemVal() {
    var gameVal = Math.floor(Math.random() * (12-1) + 1);
    console.log('gameVal:', gameVal);
    return gameVal;
  },


  init() {
    this.randomGoal();
    this.setGemVals();
  },

  update() {

  },

};

gameState.init();
console.log(gameState.values);

