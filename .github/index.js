// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius
    }
    get area(){
        return this.radius * this.radius
    }
    set area(newArea){
        this.radius = Math.sqrt(newArea)
    }
    get diameter(){
        return this.radius * 2
    }
    get circumference(){
        return this.diameter() * Math.PI
    }
}