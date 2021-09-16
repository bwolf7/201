
// let welcome = prompt("What is you name?")
// alert("Welcome " + welcome + "!")

function buttons() {
    let game = prompt("What game do you want to play?                                                              1) About you.    2)About me.     3) Number guessing game.     4) Cities    5)None ");
    if (game == 1) {
        questions();
    } else if (game == 2) {
        quiz();
    } else if (game == 3) {
        userGuessingGame(randomNumberGenerator());
    } else if (game == 4) {
        citiesGame();
    } else if (game >= 5) {
        ""
    };
}
//About you
function questions() {
    let name = prompt("What is your Name?");
    alert("Hello " + name);
    let age = prompt("How old are You?");
    alert(age + "! I'm sorry I asked");
    let team = prompt("What is your favorite sports Team?");
    alert("Once a " + team + " fan, always a " + team + " fan");
    let bandwagon = prompt("Are you a bandwagon?");

    alert("So you are telling me " + name + ". That you are " + age + " years old, a " + team + " fan, and you said " + bandwagon + " to being a bandwagon? Welcome Home!");


    let values = { name, age, team, bandwagon };
    console.log(values)
}
//quiz
function quiz() {
    let year = prompt("When did I enlisted in the Navy?");
    if (year == 2016) {
        alert("What a great year!")
    } else {
        (year !== 2016);
        alert("Not quite");
    };
    let items = prompt("How many avionics items did we fix?");
    if (items == 422) {
        alert("Get the birds in the air!")
    } else {
        (items !== 422);
        alert("Not quite");
    };
    let service = prompt("What Azure Service did I fall in love with?");
    if (service.toLowerCase() == "blockchain") {
        alert("Its the bees knees!")
    } else {
        (service.toLowerCase() !== "blockchain");
        alert("Not quite");
    };
    let fav = prompt("What is my favorite sports team?");
    if (fav.toLowerCase() == "padres") {
        alert("GO PADRES!")
    } else {
        (fav.toLowerCase() !== 'padres');
        alert("Not quite");
    };
    let best = prompt("Who is my best friend?");
    if (best.toLowerCase() == "sister") {
        alert("Shes the best!")
    } else {
        (best.toLowerCase() !== "sister");
        alert("Not quite");
    };


    let results = { year, items, service, fav, best };
    console.log(results)

}
// Number guessing game

function randomNumberGenerator() {
    let correctAnswer = Math.floor(Math.random() * 100) + 1;
    return correctAnswer;
};
function userGuessingGame(correctAnswer) {
    console.log(correctAnswer)
    let wannaPlay = prompt('Do you want to play a game? (yes or no)');
    outLoop: while (wannaPlay.toLowerCase() == 'yes') {
        let numberOfAttempts = 4;
        let userAnswer = parseInt(prompt("Guess a number between 1 and 100"));
        while (userAnswer >= 1 && userAnswer <= 100 && numberOfAttempts) {
            if (userAnswer === correctAnswer) {
                alert('You got it right.');
                break outLoop;
            }
            if (userAnswer < correctAnswer) {
                alert('Your answer is to low.  Try Again! You have ' + numberOfAttempts + ' attempts left')
                console.log("low");
            }
            if (userAnswer > correctAnswer) {
                alert('Your answer is to high.  Try Again! You have ' + numberOfAttempts + ' attempts left')
                console.log("high");
            }
            numberOfAttempts -= 1;
            userAnswer = parseInt(prompt("Guess a number between 1 and 100"))
            console.log(userAnswer)
        }
        alert('Nice try!');
        break;
    }
}
//Cities guessing game
var cities = ["San Diego", "Miami", "Seattle", "Tampa Bay"]

function citiesGame() {
    let userGuess = prompt("What cities would I live in? 1) San Diego 2) New York 3) Miami 4) Boston 5) Seattle 6) Tampa Bay ")
    let userAttempts = 6
    let correct = false
    while (userAttempts > 0) {
        for (let i = 0; i < cities.length; i++) {
            if (userGuess.toLowerCase() == cities[i].toLowerCase()) {
                alert("Nicely done!")
                userAttempts = 1
                correct = true
                break
            }
        }
        userAttempts--
        if (userAttempts == 0 && correct) {
            alert("YE")
            break
        } else if (userAttempts == 0 && correct == false) {
            alert('Try reading the list below.')
        }
        if (userAttempts > 0) userGuess = prompt("What cities would I live in? 1) San Diego 2) New York 3) Miami 4) Boston 5) Seattle 6) Tampa Bay  You have " + userAttempts + " attempts left!")
    }
}

//add 2000