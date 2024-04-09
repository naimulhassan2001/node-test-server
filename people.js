const Events = require('events');

class School extends Events {
    start() {
        console.log('kfjkldsjflk');

        setTimeout(() => {
            this.emit('scream', 'hello');
        }, 2000);
    }
}

module.exports = School;
