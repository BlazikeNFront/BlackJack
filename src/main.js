import {LinkDOMElements} from '/src/linkDOMtoJS.js';
import {Card} from '/src/card.js';
import {Deck} from '/src/deck.js';

class BlackJack extends LinkDOMElements  {
    constructor(){
        super();
       const domElements = this.domElem();
       
        const deck = new Deck();
      
      
    }






}



document.addEventListener('DOMContentLoaded',()=> {
    new BlackJack();
    
    
})