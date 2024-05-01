let englishButton = document.querySelector(".english-button");
let ssButton = document.querySelector(".ss-button");
let mathButton = document.querySelector(".math-button");
let scienceButton = document.querySelector(".science-button");

// 1. English Section:

englishButton.onclick = (function() {
    let englishInput = document.querySelector(".english").value;
    //write English if-else conditional statement below
    if (englishInput === "Mon") {
        document.querySelector(".english-message").innerHTML = "Correct!";
    } else {
        document.querySelector(".english-messae").innerHTML = "Wrong Answer";
    }
});


// 2. Math section

mathButton.onclick = (function() {
    let mathInput =
        Number(document.querySelector(".math").value);

    //write math if-else conditional statement below
    if (mathInput === 30) {
        document.querySelector(".math-message").innerHTML = "Correct!";
    } else {
        document.querySelector(".math-message").innerHTML = "Wrong Answer";
    }


});

// 3. Social Studies section

ssButton.onclick = (function() {
    let ssInput = document.querySelector(".social-studies").value;
    //write SS if-else conditional statement below
    if (ssInput === "Albany") {
        document.querySelector(".ss-message").innerHTML = "Correct!";
    } else {
        document.querySelector(".ss-message").innerHTML = "Wrong Answer";
    }


});

// 4. Science section

scienceButton.onclick = (function() {
    let scienceInput = document.querySelector(".science").value;
    if (scienceInput === "Solid") {
        document.querySelector(".science-message").innerHTML = "Correct!";
    } else {
        document.querySelector(".science-message").innerHTML = "Wrong Answer";
    }


});
    //first, declare a variable that stores the value of the user input in the science section (look at line 9 for an example!)


    //then, write science if-else conditional statement below



