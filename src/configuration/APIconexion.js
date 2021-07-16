import store from "../store";

export const getCards = async() => {
    try {
        const url = `https://api.magicthegathering.io/v1/cards`
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