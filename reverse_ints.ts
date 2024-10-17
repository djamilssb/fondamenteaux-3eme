function reverse_ints(n:number):string{
    let res:string=""
    let text2:string=""
    for (let i=1;i<=n;i++){
        res = i.toString() + res
        text2 = res
    }
    return text2
}

let text2 = reverse_ints(5)
console.log(text2)