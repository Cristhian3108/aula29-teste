class Chain{

    constructor(bodyA,pontoB){
        var options = {
            bodyA: bodyA,
            pointB: pontoB,
            stiffness:0.04,
            length:50
        }

        this.chain1 = loadImage("sprites/sling1.png")
        this.chain2 = loadImage("sprites/sling2.png")
        this.chain3 = loadImage("sprites/sling3.png")

        this.pontoB = pontoB
        this.chain = Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){

        image(this.chain1,200,60)
        image(this.chain2,170,60)
        

        if(this.chain.bodyA){
        var bA = this.chain.bodyA.position
        var bB = this.pontoB
        line(bA.x-20, bA.y, bB.x+5, bB.y+10)
        line(bA.x-20, bA.y, bB.x-30, bB.y+10)      
        image(this.chain3,bA.x-30,bA.y-10,15,30)  
        }
    }

    voar(){
        this.chain.bodyA = null
    }
}