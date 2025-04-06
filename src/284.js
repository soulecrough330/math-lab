function randomCodeGenerator() {
    const randomNumber = Math.random();
    const asciiValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let generatedCode = '';
    let index = 0;

    while (generatedCode.length < 10) {
        const charIndex = randomNumber % asciiValues.length;
        generatedCode += asciiValues[charIndex];
        randomNumber = Math.floor(Math.random() * 10);
    }

    return generatedCode;
}

console.log(randomCodeGenerator());
