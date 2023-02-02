const rnd = Math.round(Math.random(100) * 100)
console.log(rnd);

let start = 0;
let end = 100;
let middle = Math.round((start + end) / 2)

for (let i = star; i < end; i++) {
    if (middle === rnd) {
        console.log(rnd, `вы угадали`);
        break
    } else if (middle > rnd) {
        end = middle
        console.log(`число меньше ${rnd}`);
    } else if (middle < rnd) {
        start = middle
        console.log(`число больше ${rnd}`);
    }
}
for (let i = star; i < end; i++) {
    if (middle === rnd) {
        console.log(rnd, `вы угадали`);
        break
    } else if (middle > rnd) {
        end = middle
        console.log(`число меньше ${rnd}`);
    } else if (middle < rnd) {
        start = middle
        console.log(`число больше ${rnd}`);
    }
}