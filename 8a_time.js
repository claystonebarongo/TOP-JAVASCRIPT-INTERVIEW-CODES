//THIS PRINTS TIME AFTER EVERY SECOND

setInterval(() => {
    const now = new Date();
    console.log(now.toLocaleTimeString());
}, 1000);
