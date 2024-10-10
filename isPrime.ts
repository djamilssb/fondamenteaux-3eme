function isPrime(n:number):boolean {
    let res : number  = 0

    for (let i=2;i<n;i++){
        if(res%i != 0){
            return true
        }
    }
    return false
}

console.log(isPrime(15))