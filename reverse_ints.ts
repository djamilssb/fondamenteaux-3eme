function reverse_ints(n:number):string{
    let res:string=""
    let text2:string=""
    for (let i=5;i>=n;i--){
        res = res + i.toString()
        text2 = res
    }
    return text2
}

let text2 = reverse_ints(1)
console.log(text2)