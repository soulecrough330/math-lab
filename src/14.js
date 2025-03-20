<script>
    // Generate a random number between 1 and 10
    const randNum = Math.floor(Math.random() * 10) + 1;

    // Create an array of numbers from 1 to 10
    const nums = Array.from({ length: 10 }, (_, i) => i + 1);

    // Shuffle the array of numbers
    const shuffledNums = nums.sort(() => Math.random() - 0.5);

    // Get the first number in the shuffled array
    const randomNum = shuffledNums[randNum - 1];

    // Return the random number
    return randomNum;
</script>