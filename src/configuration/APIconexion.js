import store from "../store";
const url = `https://api.magicthegathering.io/v1/cards`

export const getCards = async() => {
    try {
        const resp = await fetch( url );
        const  data  = await resp.json(); 
    
        const step1 = Object.values(data);
        const thecards= step1[0]
        const deckOfCards = thecards.filter((element)=>{
            return element.multiverseid
        });
        store.dispatch('ApiCall',deckOfCards )
    } catch (error) {
        console.log(error);
    }
}

export const getCardId = async(id) => {
    try {
        const resp = await fetch( `${ url }/${ id }` );
        const data = await resp.json();
        const step1 = Object.values(data);
        const cardSelected= step1[0]        
        store.dispatch( 'ApiCallId', cardSelected )
    } catch (error) {
        console.log(error);
    }
}


// https://api.magicthegathering.io/v1/cards/132106