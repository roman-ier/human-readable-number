const n1 = [
    '',
    ' one',
    ' two',
    ' three',
    ' four',
    ' five',
    ' six',
    ' seven',
    ' eight',
    ' nine',
    ' ten',
    ' eleven',
    ' twelve',
    ' thirteen',
    ' fourteen',
    ' fifteen',
    ' sixteen',
    ' seventeen',
    ' eighteen',
    ' nineteen'
];
const n2 = [
    ' zero',
    ' one',
    ' twenty',
    ' thirty',
    ' forty',
    ' fifty',
    ' sixty',
    ' seventy',
    ' eighty',
    ' ninety'
];
const n3 = ' hundred';
const n4 = ['',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
]

module.exports = function toReadable(number) {
    const r2 = n => n2[Math.trunc(n / 10)] + n1[n % 10];
    const conv = n => {
        let str = '';
        if (n > 99) str = n1[Math.trunc(n / 100)] + ' hundred' + conv(n % 100)
        else if (n > 19) str = r2(n)
        else str = n1[n]
        return str
    }
    return number === 0 ? 'zero' : conv(number).substr(1);
}
