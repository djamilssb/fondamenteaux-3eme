function sum_even(n:number):number{
    let res:number = 0

    for (let i=0;i<n;i++) {
        if ((i+1)%2==0) {
            res=res+(i+1)
        }
    }
    return res
}

console.log(sum_even(6))