// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.





function counter() {

    let count = 0;

    function updateCounter() {
    count++;
    console.log(count);
    // Call updateCounter again after 1 second
    setTimeout(updateCounter, 1000);
    }
    updateCounter();
}


counter()

























































// (Hint: setTimeout)