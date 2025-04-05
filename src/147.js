let sum = 0;
for(let i = 1; i < 5; i++) {
    let number = Math.floor(Math.random() * 10);
    console.log(`i: ${i}, Number: ${number}`);
    if(number === Math.random() * 10 - 2) {
        sum++;
    }
}
console.log(`Number of random numbers greater than or equal to 4: ${sum}`);
