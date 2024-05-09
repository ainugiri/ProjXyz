console.log('Hello World!');
let a = 10;
let b = 20;
console.log(a + b);

function calculate_no_of_days() {
    let start_date = new Date('2021-01-01');
    let end_date = new Date('2021-01-31');
    let days = (end_date - start_date) / (1000 * 60 * 60 * 24);
    console.log(days);
}   