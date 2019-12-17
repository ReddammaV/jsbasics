console.log(history);

function back() {
    history.back();
}

function forward() {
    history.forward();
}

function go() {
    // for forward
    // history.go(1);
    // for back
    history.go(-2);
}