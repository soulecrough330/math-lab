let sum = 0;
for(let i = 1; i <= 10; i++){
    let num = Math.random() * (2 + 4 - 1) + Math.random() * (2 + 4 - 1);
    if(num % 2 === 0){
        sum += num;
    }
}
console.log(sum)
