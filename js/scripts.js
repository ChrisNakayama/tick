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

Board.prototype.findSpace = function(xcoord, ycoord){
  let spaceArray = this.spaces;
  for(let i=0; i < spaces.length; i++){
    if(spaces[i].xcoord === xcoord && spaces[i].ycoord === ycoord){
      return spaces[i];
    }
  }
}




function Space(xcoord, ycoord, marked){
  this.xcoord = xcoord;
  this.ycoord = ycoord;
  this.marked = marked;
}

function findThreeInARow(space1, space2, space3){
  if(space1.marked === space2.marked && space1.marked === space3.marked){
    return true;
  } else{
    return false;
  }
}

function checkAll(board){
  let spaceArray = board.spaces;
  /*[1] [2] [3]
    [4] [5] [6]
    [7] [8] [9]
  */
  findThreeInARow()
}


//ui




