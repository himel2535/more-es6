class Player {
  // constructor method-->
  constructor(name,age) {
    this.name=name;
    this.age=age;
    this.location='bangladesh'
    // console.log("calling the constructor method",name);
  }

  // method like function
  goal() {
    console.log("score a goal");
  }
  getTeamName() {
    return "barca";
  }
}
const player1 = new Player('sakib al hasan',37);
const player2=new Player("Mashrafi bin murtoza",40);
console.log(player1)
// player1.getTeamName();
console.log(player2 instanceof Player);
