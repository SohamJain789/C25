//bird is a child class of base class (parent class) we use extends to make a child class 
class Bird extends BaseClass{
  constructor(x,y){
  	//SUPER transfers all properties of the parent class t the child class using the parent class constructor 
    super(x,y,50,50);
    //special property of the bird is to look like a bird which will replace the placeholder image in the parent class
    this.image = loadImage("sprites/bird.png");
  }
  display(){
  	//special thing that the bird can do is move with the mouse which is not written in the base class,so we write it here 
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    //super.display refers to parent class display 
    //this is function overriding == having same name function in both of the clsses (PARENT AND CHILD)
    super.display();
  }
}