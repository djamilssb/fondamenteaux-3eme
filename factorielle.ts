function facto(n:number): number {
    let res:number=1;
    for (let i=0;i<n;i++){
        res=res*(i+1)
    }
    return res
};

console.log(facto(5));