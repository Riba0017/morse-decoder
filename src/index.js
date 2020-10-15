const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let letters = [];
    for(let i = 0; i < expr.length; i+= 10) {
        letters.push(expr.substring(i, i+10))
    }

    let arr = letters.flat().filter(elem => elem !== '');

    let words = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j += 2) {
            let char = arr[i].substring(j, j+2);
            if(char === '00') words.push(' ');
            if(char === '10') words.push('.');
            if(char === '11') words.push('-');
            if(char === '**') words.push('*');
        }
    }

    words = words.join('');
    let str = [];
    for(let i = 0; i < words.length; i+= 5) {
        str.push(words.substring(i, i+5).trim())
    }

    let final = [];
    for(let k = 0; k < str.length; k++) {
        if(str[k] === '*****') final.push(' ');
        for(let prop in MORSE_TABLE) {
            if(prop === str[k]) {
                final.push(MORSE_TABLE[prop])
            }
        }
    }
    return final.join('');
}

module.exports = {
    decode
};