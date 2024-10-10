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