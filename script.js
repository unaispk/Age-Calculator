// variable to store the input ( birth date)
let userInput = document.getElementById("date");
// for prevent selecting future date
userInput.max = new Date().toISOString().split("T")[0];
// for displaying the result in a p tag
let result = document.getElementById("result");

function calculateAge() {
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    // January == 0 So add + 1 (Month starting from 0)
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    // To get current date
    let today = new Date();

    // Seperate day month and year dd-mm-yy format
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    // variables to store the difference of the date, month, year
    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }
    //--------------------------------
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
        y3 --;
    }
    result.innerHTML = `you are <span>${y3}</span> years <span>${m3}</span> months and <span>${d3}</span> days old`;
}

function getDaysInMonth(year, month) {
    // It will return the last day of the month
    return new Date(year, month, 0).getDate();
}

