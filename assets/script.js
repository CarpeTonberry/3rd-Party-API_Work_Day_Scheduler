// Hides the Save Alert
document.getElementById("gotToGetThat").style.display = "none";

function disappear() {
    document.getElementById("gotToGetThat").style.display = "none";
}

function savedAlert() {
    document.getElementById("gotToGetThat").style.display = "block";
    setTimeout(disappear, 5000);
}

// Pulls the current week/month/day
var currentDay = document.getElementById("currentDay");
currentDay.textContent = moment().format('dddd, MMMM Do');

// Render Local Storage
var loadHour9 = localStorage.getItem('Hour 9') || [];
textBox9.append(loadHour9);
var loadHour10 = localStorage.getItem('Hour 10') || [];
textBox10.append(loadHour10);
var loadHour11 = localStorage.getItem('Hour 11') || [];
textBox11.append(loadHour11);
var loadHour12 = localStorage.getItem('Hour 12') || [];
textBox12.append(loadHour12);
var loadHour1 = localStorage.getItem('Hour 1') || [];
textBox1.append(loadHour1);
var loadHour2 = localStorage.getItem('Hour 2') || [];
textBox2.append(loadHour2);
var loadHour3 = localStorage.getItem('Hour 3') || [];
textBox3.append(loadHour3);
var loadHour4 = localStorage.getItem('Hour 4') || [];
textBox4.append(loadHour4);
var loadHour5 = localStorage.getItem('Hour 5') || [];
textBox5.append(loadHour5);

// Save to Local Storage 
$('#saveBTN9').on('click', function () {
    localStorage.setItem('Hour 9', textBox9.value);
    savedAlert();
});

$('#saveBTN10').on('click', function () {
    localStorage.setItem('Hour 10', textBox10.value);
    savedAlert();
});

$('#saveBTN11').on('click', function () {
    localStorage.setItem('Hour 11', textBox11.value);
    savedAlert();
});

$('#saveBTN12').on('click', function () {
    localStorage.setItem('Hour 12', textBox12.value);
    savedAlert();
});

$('#saveBTN1').on('click', function () {
    localStorage.setItem('Hour 1', textBox1.value);
    savedAlert();
});

$('#saveBTN2').on('click', function () {
    localStorage.setItem('Hour 2', textBox2.value);
    savedAlert();
});

$('#saveBTN3').on('click', function () {
    localStorage.setItem('Hour 3', textBox3.value);
    savedAlert();
});

$('#saveBTN4').on('click', function () {
    localStorage.setItem('Hour 4', textBox4.value);
    savedAlert();
});

$('#saveBTN5').on('click', function () {
    localStorage.setItem('Hour 5', textBox5.value);
    savedAlert();
});

// Automated background text area color start
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
var sixClock = moment('06:00 pm', "HH:mm a");
var midnight = moment('12:00 am', "HH:mm a");

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

function bewm() {
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

bewm();
// Automated background text color end