function power(x:number,n:number):number{
    let res:number=1
    for (let i=0;i<n;i++){
        res = res*x;
    }
    return res
}

console.log(power(5,2))


//res = res*x -> 1=1*5 -> 5=5*5 -> 25 //