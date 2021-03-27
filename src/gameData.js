import stickhero_src from "./assets/img/gameBanners/stick-hero.png";
import coronahits_src from "./assets/img/gameBanners/corona-hits.png";
import buildingblocks_src from "./assets/img/gameBanners/block.png";
import tictactoe_src from "./assets/img/gameBanners/tic-tac-toe.png";


export const tempArray = [
    {
        id: 1, 
        winners: 14, 
        amountWon: 1247, 
        logo: stickhero_src,
        campaignName: "Lucky Chance to Win 50% Discount on your Next Purchase",
        journeys:[{id:1,name:"Add 2 Favorite Products in Wishlist",status:"Completed"}],

        progress: 47,
        gameUrl: "https://games.2sgamix.com/stickhero/"
    },
    {
        id: 2, 
        winners: 147, 
        amountWon: 35789, 
        logo: coronahits_src, 
        campaignName: "Do you want a Flat  200 Off on Designer Wear",
        journeys:[{id:1,name:"Purchase the least priced product in your cart",status:"Completed"},{id:2,name:"Share your Last Purchase on Social Media",status:"Completed"}],
        progress: 21,
        gameUrl: "https://games.2sgamix.com/coronahits/"
    },
    {
        id: 3, 
        winners: 87, 
        amountWon: 5897, 
        logo: buildingblocks_src, 
        campaignName: "Last Chance to get a Free Organic Meal Package" ,
        journeys:[{id:1,name:"View 5 of your favorite Products",status:"Completed"},{id:2,name:"Write 1 Review",status:"Completed"}],
        progress: 67,
        gameUrl: "https://games.2sgamix.com/buildingblocks/"

    },
    {
        id: 4, 
        winners: 173, 
        amountWon: 87542, 
        logo:  tictactoe_src, 
        campaignName: "Win 100 Points + 20% on your next Purchase.",
        journeys:[{id:1,name:'Add 1 Product into Wishlist',status:"Completed"},{id:2,name:'Share something on Social Media',status:"Completed"},{id:3,name:'Make a Purchase of INR 100',status:"Not completed"},{id:4,name:'Make a Purchase of INR 200',status:"Not completed"}],
        progress: 87,
        gameUrl: "https://games.2sgamix.com/tictactoe/"
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
    

