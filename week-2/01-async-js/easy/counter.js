function counter() {
    let count = 0;
    // Function to update the counter every second
    setInterval(() => {
      count++;
      console.log(`Counter: ${count}`);
    }, 1000); // 1000ms = 1 second
}

counter();