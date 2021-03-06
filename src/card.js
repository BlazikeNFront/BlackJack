export const weights = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
];

export const types =['spades','hearts','diamonds','clubs'];






export class Card {

    constructor(weight, type){
        
        this.weight = weight;
        this.type = type;
    }

    mapTextToSign = {
        hearts: '&hearts;',
        spades: '&spades',
        diamonds: '&diams;',
        clubs: '&clubs;',
    }

    render(){

        const card = document.createElement('div');
        card.setAttribute('class', `card ${this.type}`);
        card.innerHTML = `${this.weight} ${this.mapTextToSign[this.type]}`;
        return card
    }
}