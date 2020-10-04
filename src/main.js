import {LinkDOMElements} from '/src/linkDOMtoJS.js';
import {Card} from '/src/card.js';
import {Deck} from '/src/deck.js';
import {Player} from '/src/player.js';
import { Table } from './table.js';
import { Message } from './message.js';



class BlackJack extends LinkDOMElements  {
    constructor(){
        super();
        
        this.newGame();
        
      
    }

    newGame(){
        
        this.domElements = this.domElem()
       
        this.player =  new Player('Gracz')
        this.dealer = new Player('BOT');
        this.table =  new Table(document.querySelector("[data-link='dealersCards']"),
        document.querySelector("[data-link='playersCards']"));
        this.hitButton = this.domElements['hit'];
        this.standButton = this.domElements['stand'];
        this.playerPoints = this.domElements['playersPoints'];
        this.dealerPoints = this.domElements['dealersPoints'];
        this.messageBox =  new Message(this.domElements['message']);
        this.resultInfo = this.domElements['resultInfo'];
        this.deck = new Deck();
        this.deck.shuffle();
        this.eventlistener();
        this.run();

    }
   
   
    run(){

        this.hitButton.addEventListener('click',(event)=>this.hitCard());
        this.standButton.addEventListener('click',(e)=>{this.dealerPlays()});
        this.dealCards();

    }

    hitCard(){
        const card = this.deck.pickCard();
        this.player.hand.addCard(card);
        this.table.showPlayersCard(card);
        this.playerPoints.textContent = `Punkty gracza: ${this.player.calculatePoints()}`
    }

    dealCards(){
        
        for(let i=0;i<2;i++){
            let card1 = this.deck.pickCard();
            this.player.hand.addCard(card1);
            this.table.showPlayersCard(card1);
            
            let card2 = this.deck.pickCard();
            this.dealer.hand.addCard(card2);
            this.table.showDealersCard(card2);
            
        }

        this.playerPoints.textContent = `Punkty gracza: ${this.player.calculatePoints()}`;
        this.dealerPoints.textContent = `Punkty Krupiera: ${this.dealer.calculatePoints()}`;
    }


    dealerPlays(){
        
        while(this.dealer.points <= this.player.points && this.dealer.points <= 21 && this.player.points <= 21){
            const card =this.deck.pickCard();
            
            this.dealer.hand.addCard(card);
            this.table.showDealersCard(card);
            this.dealerPoints.textContent = `Punkty Krupiera: ${this.dealer.calculatePoints()}`;
        }
        this.endGame();
    }

    endGame(){
        this.hitButton.removeEventListener('click',(e)=> this.hitCard());
        this.standButton.removeEventListener('click',(e)=> this.dealerPlays());
        this.hitButton.style.display = 'none';
        this.standButton.style.display = 'none';
       
        if(this.player.points <21 && this.player.points === this.dealer.points){
            this.resultInfo.textContent ='Remis';
            this.messageBox.show();
            return
        }

        if(this.player.points >21){
            this.resultInfo.textContent ='Dealer wygyrywa';
            this.messageBox.show();
            return
        }

        if(this.dealer.points >21){
            this.resultInfo.textContent ='Player Wygrywa';
            this.messageBox.show();
            return
        }
        if(this.dealer.points >this.player.points){
            this.resultInfo.textContent ='Dealer Wygrywa';
            this.messageBox.show();
            return
        }
        

    }

    eventlistener(){
        this.domElements['resetGame'].addEventListener('click',()=>{window.location.reload(true)});
        
    }

    




}



document.addEventListener('DOMContentLoaded',()=> {
    const table =  new Table(document.querySelector("[data-link='dealersCards']"),
    document.querySelector("[data-link='playersCards']"));
    

    let info = false
    const player = new Player('Gracz');
    new BlackJack({
        
        player,
        table,info
        
        
    });
    
    
})