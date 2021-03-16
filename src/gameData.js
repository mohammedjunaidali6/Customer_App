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
        journey1:"Add 2 Favorite Products in Wishlist",
        progress: 47,
        gameUrl: "https://cdn-factory.marketjs.com/en/archery-with-buddies/index.html"
    },
    {
        id: 2, 
        winners: 147, 
        amountWon: 35789, 
        logo: basketball_src, 
        campaignName: "Do you want a Flat  200 Off on Designer Wear",
        journey1: "Purchase the least priced product in your cart",
        journey2: "Share your Last Purchase on Social Media",
        progress: 21,
        gameUrl: "https://cdn-factory.marketjs.com/en/hoop-star/index.html"
    },
    {
        id: 3, 
        winners: 87, 
        amountWon: 5897, 
        logo: binsGames_src, 
        campaignName: "Last Chance to get a Free Organic Meal Package" ,
        journey1: "View 5 of your favorite Products",
        journey2: "Write 1 Review",
        progress: 67,
        gameUrl: "https://cdn-factory.marketjs.com/en/sort-the-trash/index.html"

    },
    {
        id: 4, 
        winners: 173, 
        amountWon: 87542, 
        logo:  bubble_src, 
        campaignName: "Win 100 Points + 20% on your next Purchase.",
        journey1:"Add 1 Product into Wishlist",
        journey2:"Share something on Social Media",
        journey3: "Make a Purchase of INR 100",
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
    

