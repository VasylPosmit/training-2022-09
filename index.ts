

//calculator from console only with functions


export function addNums(...nums: any){
    const res = nums.reduce((num1: number, num2: number) => num1 + num2);
    return res;
}


export function subNums(...nums: any){
    const res = nums.reduce((num1: number, num2: number) => num1 - num2);
    return res;
}

export function divNums(...nums: any){
    const res = nums.reduce((num1: number, num2: number) => num1 / num2);
    return res;
}

export function multiNums(...nums: any){
    const res = nums.reduce((num1: number, num2: number) => num1 * num2);
    return res;
}

