function is_perfect(n:number):boolean{
    let res:number = 0
    for (let i=0;i<=n/2;i++){
        if(n%i == 0){
            res+=i
        }
        if (res==n){
            return true
        }
    }
    return false
}

console.log(is_perfect(28))