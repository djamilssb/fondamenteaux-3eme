//En cours // 
var result:number[]=[];
var a:number = 5;
var b:number = 10000;
var c:number = 5;
function root(a:number,b:number,c:number):number[] {
    let d:number = 0;
    d = b*b-4*a*c;

    if (d<0){
        result.push(0)
        return result
    }

    else if (d==0) {
        result.push(-b/(2*a))
        return result
    }

    else {
        result.push(-b - Math.sqrt(d) / 2*a)
        result.push(-b + Math.sqrt(d) / 2*a)
        return result
    }

}
result = root(a,b,c)
console.log(result)