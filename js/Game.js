class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

 start(){
  form = new Form();
  form.display();
  player = new Player()
  playerCount = player.getCount()

  officer1 = createSprite(50,50,10,10)
  officer1.addImage(officerImage)
  officer1.scale = 0.5

  officer2 = createSprite(50,100,10,10)
  officer2.addImage(officerImage)
  officer2.scale = 0.5

  officers = [officer1,officer2]
 }

 handleElements() {
  form.hide();
}

 play(){
  this.handleElements();
  Player.getPlayersInfo();

  if(allPlayers !== undefined)
  {
    image(backgroundImg,0,0,width,height)
    image(buildImg,0,0,50,height)
  }
 }

}
