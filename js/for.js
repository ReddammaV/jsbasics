document.write('<div class="container mt-3">');

// While Loop
document.write('<h3>While Loop</h3>');
var a = 1;
while (a <= 5) {
    document.write(a + ' Hello <br>');
    a++;
}

// Do While Loop
document.write('<h3>Do While Loop</h3>');

var y = 1;
do {
    document.write(y + ' Do While <br>');
    y++
} while (y <= 5);

//for loop
document.write('<h3>For Loop</h3>');
for (let i = 0; i <= 6; i++) {
    document.write(i + 'For Loop <br>');
}


//Break and continue

//continue
document.write('<h3>Continue</h3>');

for (i = 1; i <= 6; i++) {
    if (i == 4) {
        document.write(i + ' Hey <br>');
        continue;
    }
    document.write(i + ' Continue <br>');
}

//break
document.write('<h3>Break</h3>');

for (i = 1; i <= 6; i++) {
    if (i == 4) {
        document.write(i + ' Hey <br>');
        break;
    }
    document.write(i + ' break <br>');
}

//Even Numbers
document.write('<h3>Even Numbers</h3>');

for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        document.write(i + '<br>');
    }
}

//Odd Numbers
document.write('<h3>Odd Numbers</h3>');

for (i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        document.write(i + '<br>');
    }
}

//Alternate Numbers
document.write('<h3>Alternate Numbers</h3>');

for (i = 0; i <= 10; i += 2) {
    document.write(i + '<br>');
}

//Nested Loops
document.write('<h3>Nested Loops 1</h3>');

for (i = 1; i <= 2; i++) {
    document.write(i + '<br>');
    for (j = 1; j <= 3; j++) {
        document.write(j + '<br>');
    }
}

//Nested Loops
document.write('<h3>Nested Loops 2</h3>');

for (a = 1; a <= 5; a++) {
    for (b = 1; b <= a; b++) {
        document.write(b + ' ');
    }
    document.write('<br>');
}

//Nested Loops
document.write('<h3>Nested Loops 3</h3>');

for (a = 1; a <= 100; a++) {
    for (b = a; b <= 10; b++) {
        document.write(b + ' ');
    }
    document.write('<div class="clear"></div>');
}

//Nested Loops
document.write('<h3>Nested Loops 4</h3>');

for (a = 1; a <= 100; a= a+10) {
    for (b = a; b < a+10; b++) {
        document.write(b + ' ');
    }
    document.write('<div class="clear"></div>');
}

//Nested Loops
document.write('<h3>Nested Loops 5</h3>');

for (a = 1; a <= 5; a++) {
    for (b = 1; b <= a; b++) {
        document.write(a + ' '); //we have to print a value
    }
    document.write('<div class="clear"></div>');
}

//Nested Loops
document.write('<h3>Nested Loops 6</h3>');

for (a = 5; a >= 1; a--) {
    for (b = 1; b <= a ; b++) {
        document.write(a + ' '); //we have to print a value
    }
    document.write('<div class="clear"></div>');
}

//Nested Loops
document.write('<h3>Nested Loops 7</h3>');

for (a = 5; a >= 1; a--) {
    for (b = 1; b <= a ; b++) {
        document.write(b + ' '); //we have to print a value
    }
    document.write('<div class="clear"></div>');
}

//Nested Loops
document.write('<h3>Nested Loops 8</h3>');

for (a = 5; a >= 1; a--) {
    for (b = a; b >= 1 ; b--) {
        document.write(b + ' '); //we have to print a value
    }
    document.write('<div class="clear"></div>');
}



const csv = 'John Doe, john@doe.com, 25';
const age = csv.split(',');

console.log('age', age);


document.write('</div>');