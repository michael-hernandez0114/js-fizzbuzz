var maxNumber = 100;
var divisibleThree;
var divisibleFive;
var listItem;

for (var i = 1; i <= maxNumber; i++) {

    divisibleThree = i % 3;
    divisibleFive = i % 5;

    if (divisibleThree == 0 && divisibleFive != 0) {
        console.log('Fizz');
        listItem = 'Fizz';
    }
    else if (divisibleFive == 0 && divisibleThree != 0) {
        console.log('Buzz');
        listItem = 'Buzz';
    }
    else if (divisibleFive == 0 && divisibleThree == 0) {
        console.log('FizzBuzz')
        listItem = 'FizzBuzz';
    }
    else {
        console.log(i);
        listItem = i;
    }

    document.getElementById('number'+i).innerHTML = listItem;
}
