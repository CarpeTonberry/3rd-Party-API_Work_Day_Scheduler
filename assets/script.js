// Pulls the current week/month/day
var currentDay = document.getElementById("currentDay");
currentDay.textContent = moment().format('dddd, MMMM Do');

var textBox = document.getElementById("textBox9");
var textBox = document.getElementById("textBox10");
var textBox = document.getElementById("textBox11");
var textBox = document.getElementById("textBox12");
var textBox = document.getElementById("textBox1");
var textBox = document.getElementById("textBox2");
var textBox = document.getElementById("textBox3");
var textBox = document.getElementById("textBox4");
var textBox = document.getElementById("textBox5");

var currentTime = moment();
var eightClock = moment('08:00 am', "HH:mm a");
var nineClock = moment('09:00 am', "HH:mm a");
var tenClock = moment('10:00 am', "HH:mm a");
var elevenClock = moment('11:00 am', "HH:mm a");
var twelveClock = moment('12:00 pm', "HH:mm a");
var oneClock = moment('01:00 pm', "HH:mm a");
var twoClock = moment('02:00 pm', "HH:mm a");
var threeClock = moment('03:00 pm', "HH:mm a");
var fourClock = moment('04:00 pm', "HH:mm a");
var fiveClock = moment('05:00 pm', "HH:mm a");
var sixClock = moment('05:00 pm', "HH:mm a");
var midnight = moment('12:00 am', "HH:mm a");
var eleven = moment('11:00 pm', "HH:mm a")


function nineAM() {
    if (currentTime.isBetween(nineClock, tenClock)) {
        textBox9.classList.remove();
        textBox9.classList.add("present");
    } else if (currentTime.isBetween(midnight, nineClock)) {
        textBox9.classList.remove();
        textBox9.classList.add("future");
    } else {
        textBox9.classList.remove();
        textBox9.classList.add("past");
    }
}

function tenAM() {
    if (currentTime.isBetween(tenClock, elevenClock)) {
        textBox10.classList.remove();
        textBox10.classList.add("present");
    } else if (currentTime.isBetween(midnight, tenClock)) {
        textBox10.classList.remove();
        textBox10.classList.add("future");
    } else {
        textBox10.classList.remove();
        textBox10.classList.add("past");
    }
}

function elevenAM() {
    if (currentTime.isBetween(elevenClock, twelveClock)) {
        textBox11.classList.remove();
        textBox11.classList.add("present");
    } else if (currentTime.isBetween(midnight, elevenClock)) {
        textBox11.classList.remove();
        textBox11.classList.add("future");
    } else {
        textBox11.classList.remove();
        textBox11.classList.add("past");
    }
}

function twelvePM() {
    if (currentTime.isBetween(twelveClock, oneClock)) {
        textBox12.classList.remove();
        textBox12.classList.add("present");
    } else if (currentTime.isBetween(midnight, twelveClock)) {
        textBox12.classList.remove();
        textBox12.classList.add("future");
    } else {
        textBox12.classList.remove();
        textBox12.classList.add("past");
    }
}

function onePM() {
    if (currentTime.isBetween(oneClock, twoClock)) {
        textBox1.classList.remove();
        textBox1.classList.add("present");
    } else if (currentTime.isBetween(midnight, oneClock)) {
        textBox1.classList.remove();
        textBox1.classList.add("future");
    } else {
        textBox1.classList.remove();
        textBox1.classList.add("past");
    }
}

function twoPM() {
    if (currentTime.isBetween(twoClock, threeClock)) {
        textBox2.classList.remove();
        textBox2.classList.add("present");
    } else if (currentTime.isBetween(midnight, twoClock)) {
        textBox2.classList.remove();
        textBox2.classList.add("future");
    } else {
        textBox2.classList.remove();
        textBox2.classList.add("past");
    }
}

function threePM() {
    if (currentTime.isBetween(threeClock, fourClock)) {
        textBox3.classList.remove();
        textBox3.classList.add("present");
    } else if (currentTime.isBetween(midnight, threeClock)) {
        textBox3.classList.remove();
        textBox3.classList.add("future");
    } else {
        textBox3.classList.remove();
        textBox3.classList.add("past");
    }
}

function fourPM() {
    if (currentTime.isBetween(fourClock, fiveClock)) {
        textBox4.classList.remove();
        textBox4.classList.add("present");
    } else if (currentTime.isBetween(midnight, fourClock)) {
        textBox4.classList.remove();
        textBox4.classList.add("future");
    } else {
        textBox4.classList.remove();
        textBox4.classList.add("past");
    }
}

function fivePM() {
    if (currentTime.isBetween(fiveClock, sixClock)) {
        textBox5.classList.remove();
        textBox5.classList.add("present");
    } else if (currentTime.isBetween(midnight, fiveClock)) {
        textBox5.classList.remove();
        textBox5.classList.add("future");
    } else {
        textBox5.classList.remove();
        textBox5.classList.add("past");
    }
}

function wow() {
    nineAM();
    tenAM();
    elevenAM();
    twelvePM();
    onePM();
    twoPM();
    threePM();
    fourPM();
    fivePM();
};

wow();











// past
// if between this set time and this set time / then we want it to turn green

// future
    // if between (1 hour before 9) than turn it into a future item background.

// past
    // the past will be greyed out and user will be unable to make any selections


    // SIDE NOTES 
    // WE NEED TO TURN THE CLASS BADGES INTO THE PAST/PRESENT/FUTURE FOR THE CSS SHEET
