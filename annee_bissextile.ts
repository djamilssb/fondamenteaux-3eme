function is_leap(year:number):boolean{
    if (year%4==0) {
        return true
    }
    if (year%100==0) {
        return true
    }
    if (year%400==0) {
        return true
    }

    return false
}

console.log(is_leap(2020))