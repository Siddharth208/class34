class Ball{
    constructor(){
        var op={
            density:1,
            frictionAir:0.02
        }
        this.ball=Bodies.circle(500,300,50,op)
        this.radius=50
        World.add(world,this.ball)
    }
    display(){
        push()
        translate(this.ball.position.x,this.ball.position.y)
        rotate(this.ball.angle)
        fill(0,0,255)
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius)
        pop()
    }
}