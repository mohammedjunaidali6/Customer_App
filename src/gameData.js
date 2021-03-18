import archerory_src from "./assets/img/gameBanners/Archeory.png";
import basketball_src from "./assets/img/gameBanners/Basketball.png";
import binsGames_src from "./assets/img/gameBanners/Bins Games.png";
import bubble_src from "./assets/img/gameBanners/Bubble.png";
import scoer_src from  "./assets/img/gameBanners/Scoer.png";

 
export const tempArray = [
    {
        id: 1, 
        winners: 14, 
        amountWon: 1247, 
        logo: archerory_src,
        campaignName: "Lucky Chance to Win 50% Discount on your Next Purchase",
        journeys:[{id:1,name:"Add 2 Favorite Products in Wishlist",status:"Completed"}],

        progress: 47,
        gameUrl: "https://ellisonleao.github.io/clumsy-bird/"
    },
    {
        id: 2, 
        winners: 147, 
        amountWon: 35789, 
        logo: basketball_src, 
        campaignName: "Do you want a Flat  200 Off on Designer Wear",
        journeys:[{id:1,name:"Purchase the least priced product in your cart",status:"Completed"},{id:2,name:"Share your Last Purchase on Social Media",status:"Completed"}],
        progress: 21,
        gameUrl: "https://cdn-factory.marketjs.com/en/hoop-star/index.html"
    },
    {
        id: 3, 
        winners: 87, 
        amountWon: 5897, 
        logo: binsGames_src, 
        campaignName: "Last Chance to get a Free Organic Meal Package" ,
        journeys:[{id:1,name:"View 5 of your favorite Products",status:"Completed"},{id:2,name:"Write 1 Review",status:"Completed"}],
        progress: 67,
        gameUrl: "https://cdn-factory.marketjs.com/en/sort-the-trash/index.html"

    },
    {
        id: 4, 
        winners: 173, 
        amountWon: 87542, 
        logo:  bubble_src, 
        campaignName: "Win 100 Points + 20% on your next Purchase.",
        journeys:[{id:1,name:'Add 1 Product into Wishlist',status:"Completed"},{id:2,name:'Share something on Social Media',status:"Completed"},{id:3,name:'Make a Purchase of INR 100',status:"Not completed"}],
        progress: 87,
        gameUrl: "https://cdn-factory.marketjs.com/en/flick-soccer/index.html"
    }
];

// let shuffledItems = [];
//     function randomArray(tempArray){
        
//         for( var i=0; i<tempArray.length; i++){
//             var randomIndex = Math.floor(Math.random()* tempArray.length);
//             const item = tempArray[randomIndex]
//                 shuffledItems.push(item);
//                 return shuffledItems;
//         }
//         }
        
  
//   export  const shuffledItems= randomArray(tempArray);
    

