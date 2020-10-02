//grab using data-link values

export class LinkDOMElements {
   

    linkElement(attribute){
        
      return document.querySelector(`[data-link=${attribute}]`)
    }
    linkElements(attribute){
        return document.querySelectorAll(`[data-${attribute}]`)
      }
      
    domElem (){
        let domElements = {};
        
       Array.from(this.linkElements('Link')).forEach(element => {
           
           const dataAtt= element.dataset.link;
           
           domElements[`${dataAtt}`]=element

       })
       return domElements
    }



}