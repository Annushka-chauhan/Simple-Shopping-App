import { createContext } from "react";
//this will create an objecr which is needed by the react component and this will be needed later
//We can also provide an value to the createContext in ehich the states are wrapped hence can be a number, a string, a obj or array  
export const CartContext = createContext(
    {
        //These below are nt actually used but are there for auto completion
        items: [],
         addItemToCart: () =>{},
         updateItemQuantity : () =>{},
    }
 );

 //We have set up the context above and now we have to provide this to the application
 //and wrap around parts of our application so that the wrapped components can access these values 
