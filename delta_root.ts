function delta(a:number,b:number,c:number):number {
    let d:number=0

    d = b*b-4*a*c

    return d
}

console.log(delta(4,5,3))



function root(a:number,b:number,c:number):number[] {
    var result:number[]=[];
    let d = delta(a,b,c)

    if (d < 0){
        result.push(0)
        return result
    }

    else if (d == 0) {
        result.push(-b/(2*a))
        return result
    }

    else {
        result.push(-b - Math.sqrt(d) / 2*a)
        result.push(-b + Math.sqrt(d) / 2*a)
        return result
    }

}
console.log(root(5,10,5))