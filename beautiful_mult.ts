function beautiful_mult(n:number):string{
    let res : string = ""
    let text : string = ""
    for (let i=1;i<=10;i++){
        res = res + n + "x" + i.toString() + " " + "=" + " " + `${n*i}` + ", "
        text = res +  " "
    }
    return text
}
let text = beautiful_mult(5)


console.log(text)