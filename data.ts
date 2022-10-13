import pizzaImg from '@/assets/pizza.png'
import broastImg from '@/assets/broast.png'
import chickenImg from '@/assets/chicken.png'
import burgerImg from '@/assets/burger.png'
import shakesImg from '@/assets/shakes.png'
import sandwichesImg from '@/assets/sandwiches.png'
import pastaImg from '@/assets/pasta.png'
import desertImg from '@/assets/desert.png'


import Img1 from '@/assets/products/01.png'
import broadwayImg from '@/assets/products/02.png'
import downtownImg from '@/assets/products/03.png'
import hardeesImg from '@/assets/products/04.png'
import howdyImg from '@/assets/products/05.png'
import mcdonaldsImg from '@/assets/products/06.png'

// import arcadianImg from '@/assets/products/Arcadian.jpg'
// import broadwayImg from '@/assets/products/broadway.jpg'
// import downtownImg from '@/assets/products/downtown.jpg'
// import hardeesImg from '@/assets/products/hardees.jpg'
// import howdyImg from '@/assets/products/Howdy.jpg'
// import mcdonaldsImg from '@/assets/products/mcdonalds.jpg'
// import monalImg from '@/assets/products/monal.jpg'
// import nandosImg from '@/assets/products/nandos.jpg'
// import normasImg from '@/assets/products/Normas.jpg'


const data= 
  {
    category: [
      {
        id: "01",
        img: pizzaImg,
        name: "Pizza"
      },
      {
        "id": "02",
        "img": broastImg,
        "name": "Broast"
      },
      {
        "id": "03",
        "img": chickenImg,
        "name": "Chicken"
      },
      {
        "id": "04",
        "img": burgerImg,
        "name": "Burgers"
      },
      {
        "id": "05",
        "img": shakesImg,
        "name": "Shakes"
      },
      {
        "id": "06",
        "img": sandwichesImg,
        "name": "Sandwiches"
      },
      {
        "id": "07",
        "img": pastaImg,
        "name": "Pasta"
      },
      {
        "id": "08",
        "img": desertImg,
        "name": "Desserts"
      }
    ],

    products: [
      {
        id: "01",
        img: Img1,
        des: 'Double Breast Of A Chicken Burger With Spicy Red Sauce Try this new arrival to',
        name: "Crispy Fry Burger",
        rating: 4,
        oldPrice: 300,
        price: 200
      },
      {
        id: "02",
        img: broadwayImg,
        des: 'Double Breast Of A Chicken Burger With Spicy Red Sauce Try this new arrival to',
        name: "Fandango Burger",
        rating: 4,
        oldPrice: 300,
        price: 200
      },
      {
        id: "03",
        img: downtownImg,
        des: 'Double Breast Of A Chicken Burger With Spicy Red Sauce Try this new arrival to',
        name: "Wrangler Burger",
        rating: 4,
        oldPrice: 300,
        price: 200
      },
      {
        id: "04",
        img: hardeesImg,
        des: 'Double Breast Of A Chicken Burger With Spicy Red Sauce Try this new arrival to',
        name: "Double Cheese Burger",
        rating: 4,
        oldPrice: 300,
        price: 200
      },
      {
        id: "05",
        img: howdyImg,
        des: 'Double Breast Of A Chicken Burger With Spicy Red Sauce Try this new arrival to',
        name: "Cheddar Cheese Burger",
        rating: 4,
        oldPrice: 300,
        price: 200
      },
      {
        id: "06",
        img: mcdonaldsImg,
        des: 'Double Breast Of A Chicken Burger With Spicy Red Sauce Try this new arrival to',
        name: "Howdy Hamburger",
        rating: 4,
        oldPrice: 300,
        price: 200
      },
    ],
    // stores: [
    //   {
    //     id: "01",
    //     img: arcadianImg,
    //     des: 'Double Breast Of A Chicken Burger With Spicy Red Sauce Try this new arrival to',
    //     name: "Organic Arcadian Food",
    //     rating: 4,
    //     oldPrice: 300,
    //     price: 200
    //   },
    //   {
    //     id: "02",
    //     img: broadwayImg,
    //     des: 'Double Breast Of A Chicken Burger With Spicy Red Sauce Try this new arrival to',
    //     name: "arcadiaTasty Food Pizza",
    //     rating: 4,
    //     oldPrice: 300,
    //     price: 200
    //   },
    //   {
    //     id: "03",
    //     img: downtownImg,
    //     des: 'Double Breast Of A Chicken Burger With Spicy Red Sauce Try this new arrival to',
    //     name: "Food Chef Italian",
    //     rating: 4,
    //     oldPrice: 300,
    //     price: 200
    //   },
    //   {
    //     id: "04",
    //     img: hardeesImg,
    //     des: 'Double Breast Of A Chicken Burger With Spicy Red Sauce Try this new arrival to',
    //     name: "Toni Food Hub",
    //     rating: 4,
    //     oldPrice: 300,
    //     price: 200
    //   },
    //   {
    //     id: "05",
    //     img: howdyImg,
    //     des: 'Double Breast Of A Chicken Burger With Spicy Red Sauce Try this new arrival to',
    //     name: "Masterchef Chinese Food",
    //     rating: 4,
    //     oldPrice: 300,
    //     price: 200
    //   },
    //   {
    //     id: "06",
    //     img: mcdonaldsImg,
    //     des: 'Double Breast Of A Chicken Burger With Spicy Red Sauce Try this new arrival to',
    //     name: "Fun Chicken Meals",
    //     rating: 4,
    //     oldPrice: 300,
    //     price: 200
    //   },
    //   {
    //     id: "07",
    //     img: monalImg,
    //     des: 'Double Breast Of A Chicken Burger With Spicy Red Sauce Try this new arrival to',
    //     name: "Chef Ganteng Restaurant",
    //     rating: 4,
    //     oldPrice: 300,
    //     price: 200
    //   },
    //   {
    //     id: "08",
    //     img: nandosImg,
    //     des: 'Double Breast Of A Chicken Burger With Spicy Red Sauce Try this new arrival to',
    //     name: "Marshall Steak House",
    //     rating: 4,
    //     oldPrice: 300,
    //     price: 200
    //   },
    //   {
    //     id: "08",
    //     img: normasImg,
    //     des: 'Double Breast Of A Chicken Burger With Spicy Red Sauce Try this new arrival to',
    //     name: "Chickenzilla Pizza Fusion",
    //     rating: 6,
    //     oldPrice: 300,
    //     price: 200
    //   },
    // ],
  }

export default data