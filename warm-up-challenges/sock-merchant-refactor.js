'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let pairs = 0;
    let sockCounted = [];

    for (let i = 0; i < n ; i++) {
        let theSock = ar[i];

        if (sockCounted.includes(theSock))
            continue;

        let count = 0;

        for (let j = 0; j < n; j++) {
            if (theSock == ar[j])
                count++;
        }

        count = Math.floor(count/2);

        pairs += count;
        sockCounted.push(theSock);
    }

    return pairs;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
