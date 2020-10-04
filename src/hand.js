

export class Hand {
    constructor(){
        this.cards = [];
    }

    addCard(card){
        this.cards.push(card);
    }


        countCardsWeight(weight){
            return this.cards.filter(element => element.weight === weight).length;
        }

    getStrength(){
        if(this.countCardsWeight('A') === 2 && this.cards.length ===21 ){

            return 21;
        }

        const cards = this.cards.map(card => {
            if(['K','Q','J'].includes(card.weight)){
                return 10
            }
            if(this.cards.length === 2 && card.weight ==='A'){
                return 11
            }
            if(this.cards.length > 2 && card.weight ==='A'){
                return 1;
            }
            return parseInt(card.weight);
        })
        
        return cards.reduce((sum,weight) => sum+=weight,0)

    }
 
}