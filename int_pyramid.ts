function int_pyramid(n:number):string{
    let res:string=""
    let textt:string=""
    for (let i=1;i<=n;i++){
        res = res + i.toString()
        textt = textt + "\n" + res
    }
    return textt
}

let textt = int_pyramid(3)

console.log(textt)