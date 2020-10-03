import {LinkDOMElements} from '/src/linkDOMtoJS.js';
import {Card} from '/src/card.js';
import {Deck} from '/src/deck.js';
import {Player} from '/src/player.js';
import { Table } from './table.js';



class BlackJack extends LinkDOMElements  {
    constructor({player,table}){
        super();
        this.domElements = this.domElem();
        this.player =  player;
        this.dealer = new Player('BOT');
        this.table = table;
        
        this.deck = new Deck();
        this.deck.shuffle();
       
        this.run();

    }

    run(){

        
        this.dealCards();

    }

    dealCards(){
        
        for(let i=0;i<2;i++){
            let card1 = this.deck.pickCard();
            this.player.hand.addCard(card1);
            this.table.showPlayersCard(card1.render());
            
            let card2 = this.deck.pickCard();
            this.dealer.hand.addCard(card2);
            this.table.showDealersCard(card2.render());

        }
    }



}



document.addEventListener('DOMContentLoaded',()=> {
    const table =  new Table(document.querySelector("[data-link='dealersCards']"),
    document.querySelector("[data-link='playersCards']"));
    


    const player = new Player('Player');
    new BlackJack({
        player,
        table
        
    });
    
    
})