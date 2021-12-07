function Player(mark, name) {
  this.mark = mark;
  this.name = name;
  
}

function Board(){
  this.spaces = [];
}

Board.prototype.addSpace = function(space){
  this.spaces.push(space);
}

