class Box{
    constructor(x,y){
        var option={
            friction:1,
            restitution:1,
            density:0.01
        }
        this.box=Bodies.rectangle(x,y,50,50,option)
        this.width=50
        this.height=50
        World.add(world,this.box)
    }
    display(){
        push()
        translate(this.box.position.x,this.box.position.y)
        rotate(this.box.angle)
        fill(0,255,0)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}