const n = 5;

function utopianTree(n) {
    let height = 1;

    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            height *= 2;
        }
        else height += 1
    }
    console.log(height);
    return height
}

utopianTree(n)