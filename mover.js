var Mover = function(){
  this.x= 400/2;
  this.y = 400/2;
  
};

Mover.prototype.update = function(){
    this.x+=random(-5,5);
    this.y +=random(-5,5);
};

Mover.prototype.show = function(){
     //color of the snowflakes
  textSize(30);  fill(random(100,255),random(220,255),random(220,255));
    noStroke();
    //rect(this.x, this.y,10,10);
    text("❄",this.x,this.y);

};