for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
        if (i == 2) {
            break;
        }
        console.log(i, j);
    }
}


// here i == 2 never be printed because of break statement