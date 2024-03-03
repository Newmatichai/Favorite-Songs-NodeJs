const data = [
    { number: 1,songname: 'Golden Hour',songtype: 'Pop',songOf: 'English', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/300px-Flag_of_the_United_Kingdom_%281-2%29.svg.png' },
    { number: 2,songname: 'Night Dancer',songtype: 'Pop',songOf: 'japanese', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/225px-Flag_of_Japan.svg.png' },
    { number: 3,songname: 'more than words',songtype: 'J-Pop',songOf: 'japanese', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/225px-Flag_of_Japan.svg.png' },
    { number: 4,songname: 'Yesterday',songtype: 'Pop Rock',songOf: 'japanese', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/225px-Flag_of_Japan.svg.png' },
    { number: 5,songname: 'Lemon',songtype: 'J-Pop',songOf: 'japanese', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/225px-Flag_of_Japan.svg.png' },
];

function getAll() {
    return Promise.resolve(data);
}

module.exports = getAll;
