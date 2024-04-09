const app = {};

app.config = {
    time: 1000,
};

app.print = function print() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const min = 90;
    const max = 100;
    const randomNum = getRandomInt(min, max);
    console.log(randomNum);
};

app.indefiniteLoop = function indefiniteLoop() {
    setInterval(app.print, app.config.time);
};

app.indefiniteLoop();
