let oneToNineteen = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
}

let twentyToNinety = {
    1: '',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
}

module.exports = function toReadable (int) {
    if (!int) {
        return 'zero';
    }

    let hundreds = Math.floor(int / 100);
    let remainder100 = int % 100
    let tens = Math.floor(remainder100 / 10);
    let remainder10 = remainder100 % 10
    let result = '';

    if (hundreds > 0) {
        result += `${oneToNineteen[hundreds]} hundred `;
    }
    if (tens > 1) {
        result += `${twentyToNinety[tens]} `;
    }
    if (remainder100 > 19 && remainder10 !== 0) {
        result += `${oneToNineteen[remainder10]}`;
    }
    if (remainder100 <= 19 && remainder100 !== 0) {
        result += `${oneToNineteen[remainder100]}`;
    }

    return result.trim();
}
