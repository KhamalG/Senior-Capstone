 export const featured = {
    id: 1, 
    title: 'Campus Food',
    description: 'Restraunts on the University of Toledo campus',
    restaurants: [
        {
            id: 1,
            name: 'Freshens @ North Engineering',
            image: require('../assets/images/freshens.png'),
            description: 'fresh ingredients + customization + variety + great tasting + fresh blended smoothies = happiness!',
            stars: 4,
            reviews: '1.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'BBQ Bacon Chicken Flatbread',
                    description: "Chicken, bacon, romaine, cheddar-jack, sweet Baby Ray's® BBQ sauce",
                    price: 12,
                    image: require('../assets/images/freshensflatbread.jpeg'),

                },
                {
                    id: 2,
                    name: 'Santa Fe Flatbread',
                    description: "Chicken, black beans, cheddar-jack, romaine, salsa, chipotle ranch dressing",
                    price: 14,
                    image: require('../assets/images/freshensflatbread.jpeg'),

                },
                {
                    id: 3,
                    name: 'Mexican Rice Bowl',
                    description: "Chicken, black beans, salsa, corn, red onion, cheddar-jack, lettuce, chipotle ranch dressing, white rice",
                    price: 10,
                    image: require('../assets/images/freshensflatbread.jpeg'),

                },
                {
                    id: 4,
                    name: 'Buffalo Bowl',
                    description: "Buffalo ranch, chicken, bacon, gorgonzola, tomatoes, carrots, lettuce, white rice",
                    price: 10,
                    image: require('../assets/images/freshensflatbread.jpeg'),

                },
                {
                    id: 5,
                    name: 'Southwest Chipotle Chicken Salad',
                    description: "Romaine, chicken, black beans, onions, corn, tomatoes, cheddar-jack, salsa, crisps with chipotle ranch dressing in a crispy crepe shell",
                    price: 8,
                    image: require('../assets/images/freshensflatbread.jpeg'),

                },
                {
                    id: 6,
                    name: 'Mexicano Wrap',
                    description: "Chicken, organic black beans, rice, salsa, corn, tomatoes, cheddar-jack, lettuce, chipotle ranch dressing",
                    price: 10,
                    image: require('../assets/images/freshensflatbread.jpeg'),

                },
                {
                    id: 7,
                    name: "Bangin' Berry Smoothie",
                    description: "Pomegranate, raspberries, blueberries & bananas (vegan, made without gluten)",
                    price: 6,
                    image: require('../assets/images/freshensflatbread.jpeg'),

                },
                {
                    id: 8,
                    name: "Orange Sunrise Smoothie",
                    description: "Pineapple, strawberries, bananas & orange (made without gluten)",
                    price: 6,
                    image: require('../assets/images/freshensflatbread.jpeg'),

                },
            ]
        },
        {
            id: 2,
            name: 'Canes @ North Engineering',
            image: require('../assets/images/caneslogo.png'),
            description: 'Fast-food chain specializing in fried chicken fingers, crinkle-cut fries & Texas toast.',
            stars: 5,
            reviews: '5.7k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 9,
                    name: 'Box Combo',
                    description: "4 pc tenders, fries, coseslaw, and soft drink",
                    price: 12,
                    image: require('../assets/images/canesstock.jpeg'),

                },
                {
                    id: 10,
                    name: 'Caniac Combo',
                    description: "6 pc tenders, fries, coseslaw, and soft drink",
                    price: 14,
                    image: require('../assets/images/canesstock.jpeg'),

                },
                {
                    id: 11,
                    name: 'Three Finger Combo',
                    description: "3 pc tenders, fries, and soft drink",
                    price: 10,
                    image: require('../assets/images/canesstock.jpeg'),

                },
                {
                    id: 12,
                    name: 'Chicken Sandwich',
                    description: "3 pc tenders on a bun, fries, and soft drink",
                    price: 10,
                    image: require('../assets/images/canesstock.jpeg'),

                },
                {
                    id: 13,
                    name: 'Canes Sauce',
                    description: "Special Sauce",
                    price: 2,
                    image: require('../assets/images/canesstock.jpeg'),

                },
                {
                    id: 14,
                    name: 'Texas Toast',
                    description: "Famous buttery texas toast",
                    price: 5,
                    image: require('../assets/images/canesstock.jpeg'),

                },
                {
                    id: 15,
                    name: "Soft Drink",
                    description: "Options from Coke products",
                    price: 3,
                    image: require('../assets/images/canesstock.jpeg'),

                },
            ]
        },
        {
            id: 3,
            name: 'Shake Shack @ North Engineering',
            image: require('../assets/images/ShakeShackLogo.png'),
            description: 'American fast casual restaurant chain based in New York City.',
            stars: 5,
            reviews: '2.5k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 16,
                    name: 'ShackBurger®',
                    description: "Angus beef cheeseburger with lettuce, tomato, and ShackSauce on a toasted potato bun",
                    price: 12,
                    image: require('../assets/images/shakeshackstock.jpeg'),

                },
                {
                    id: 17,
                    name: 'Shack Stack®',
                    description: "Angus beef cheeseburger topped with a 'Shroom Burger with lettuce, tomato, and ShackSauce on a toasted potato bun",
                    price: 14,
                    image: require('../assets/images/shakeshackstock.jpeg'),

                },
                {
                    id: 18,
                    name: 'SmokeShack®',
                    description: "Angus beef cheeseburger with applewood-smoked bacon, chopped cherry peppers, and ShackSauce on a toasted potato bun",
                    price: 10,
                    image: require('../assets/images/shakeshackstock.jpeg'),

                },
                {
                    id: 19,
                    name: 'Chicken Bites™',
                    description: "Crispy, whole white-meat bites served with ranch, honey mustard or BBQ",
                    price: 10,
                    image: require('../assets/images/shakeshackstock.jpeg'),

                },
                {
                    id: 20,
                    name: 'Fries',
                    description: "Crispy crinkle cut fries (contains soy)",
                    price: 5,
                    image: require('../assets/images/shakeshackstock.jpeg'),

                },
                {
                    id: 21,
                    name: 'Milk Shake',
                    description: "House-made frozen custard",
                    price: 6,
                    image: require('../assets/images/shakeshackstock.jpeg'),

                },
                {
                    id: 22,
                    name: "Soft Drink",
                    description: "Option from Coke products",
                    price: 3,
                    image: require('../assets/images/shakeshackstock.jpeg'),

                },
            ]
        },
        {
            id: 4,
            name: 'Market @ North Engineering',
            image: require('../assets/images/rocketmarket.jpg'),
            description: 'Convienince store located in North Engineering.',
            stars: 3,
            reviews: '1.2k',
            category: 'Snacks',
            dishes: [
                {
                    id: 23,
                    name: 'Chocolate Bar',
                    description: "Snickers chocolate bar",
                    price: 3,
                    image: require('../assets/images/snackstock.jpeg'),

                },
                {
                    id: 24,
                    name: 'Chips',
                    description: "Various flavors from Lays",
                    price: 2,
                    image: require('../assets/images/snackstock.jpeg'),

                },
                {
                    id: 25,
                    name: 'Cookies',
                    description: "House-mad freshly baked cookies",
                    price: 4,
                    image: require('../assets/images/snackstock.jpeg'),

                },
                {
                    id: 26,
                    name: 'Soft Drink™',
                    description: "Coke Prodcuts served in cans",
                    price: 3,
                    image: require('../assets/images/snackstock.jpeg'),

                },
                {
                    id: 27,
                    name: 'Gummy Worms',
                    description: "Sour Gummy Worm Candy",
                    price: 5,
                    image: require('../assets/images/snackstock.jpeg'),

                },
                {
                    id: 28,
                    name: 'Popcorn',
                    description: "House-made Popcorn",
                    price: 6,
                    image: require('../assets/images/snackstock.jpeg'),

                },
                {
                    id: 29,
                    name: "Ice Cream",
                    description: "Frozen Ice Cream",
                    price: 5,
                    image: require('../assets/images/snackstock.jpeg'),

                },
            ]
        },
    ]
 }