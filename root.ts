//En cours // 
var result:number[]=[0];
function root(a:number,b:number,c:number):number[] {
    let d:number = 0;
    d = b*b-4*a*c;

    if (d<0){
        result[0] = 0
        return result
    }

    if (d=0) {
        result[1]=-b/(2*a)
        return result
    }

    if (d>0) {
        result[2]= -b - Math.sqrt(d) / 2*a
        result[3]= -b + Math.sqrt(d) / 2*a
        return result
    }
    return result
}

console.log(root(5,100,5))