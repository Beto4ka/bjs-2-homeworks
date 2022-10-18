class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('error text');
        } else if (this.alarmCollection.some((element) => element.id === id)) {
            return console.error('error text');
        }
        return this.alarmCollection.push({ id, time, callback });
    }

    removeClock(id) {
        let firstArr = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((element) => element.id !== id);
        let secondArr = this.alarmCollection.length;
        return firstArr > secondArr;
    }

    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5);
    }

    start() {
        if (this.timerId === null) {
            this.timerId = setInterval(() => { this.alarmCollection.forEach(id => this.checkClock(id)); }, 1000);
        }
    }

    checkClock(clock) {
        if (clock.time == this.getCurrentFormattedTime()) {
            return clock.callback();
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
        }
        return this.timerId = null;
    }

    printAlarms() {
        this.alarmCollection.forEach((element) => { console.log(element.id, element.time) });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}