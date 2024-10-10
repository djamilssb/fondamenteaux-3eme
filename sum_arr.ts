function sum_arr(a:number[]):number{
    let res:number = 0
    for (let i=0;i<a.length;i++){
        res=res+a[i]
    }
    return res
}

console.log(sum_arr([1,2,4]))