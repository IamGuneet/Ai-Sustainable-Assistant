// import './App.css';
import Header from './components/Header.jsx';
import ProductList from './components/ProductList.jsx';
import CartList from './components/CartList.jsx';
import { useState } from 'react';

function Cart() {

  const [product, setProduct] = useState([
  //   {
  //     url: 'https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/31suj2YYSdL.SX300_SY300_QL70_FMwebp.jpg',
  // name: 'Wooden Disposable Spoons',
  // quantity: 240,
  // category: 'Disposable Utensils',
  // seller: 'Amazon',
  //  price:240
  //   },
  //   {
  //     url:'https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/A1w9MSOxlfL.AC_UL320.jpg',
  //     name: 'Necavu 100% cotton set of 6 fridge bag',
  //     quantity: 6,
  //     category: 'Disposable Utensils',
  //     seller: 'Amazon',
  //     price: 299 
  //   },
  //   {
  //     url:'https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/71I2Z8bjMLS.AC_UL320.jpg'
  // ,name: 'IKEA Sustainable Bamboo Wooden Bowl',
  // quantity: 1,
  // category: 'Disposable Utensils',
  // seller: 'Amazon',
  // price: 255
  //   },
    {
      url:'https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/51uJvIXbn6L.AC_UL320.jpg'
      ,name: ' Palm Leaf Gift Box',
      quantity: 1,
      category: 'Disposable Utensils',
      seller: 'Amazon',
      price: 429
    },
    {
      url:'https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/61l4ZxMvIPL.AC_UL320.jpg'
  ,name: ' Back Scrubber & Gloves Combo',
  quantity: 2,
  category: 'Disposable Utensils',
  seller: 'Amazon',
  price: 599
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
      name: 'Cup red Color',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 100
    },
    {
      url: 'https://image.made-in-china.com/44f3j00TVtilFIsqfgu/100-Cotton-Long-Sleeve-Shirt-Eco-Friendly-Lightweight-Cheesecloth-Fabric-Mens-Shirt-Sustainable-Clothing-Camisas-for-Men.webp',
      name: 'Shirt',
      category: 'Shirt',
      seller: 'Shirt Ltd',
      price: 565,
    },
    {
      url: 'https://brownliving.in/cdn/shop/products/reincarnated-sweatshirt-blue-sweat-re-bs-mens-sweatshirt-brown-living-392069_600x.jpg?v=1682966908',
      name: ' Sweatshirt',
      category: 'Sweatshirt',
      seller: 'Sweatshirt Ltd',
      price: 430,
    },
    {
      url: 'https://levi.in/cdn/shop/files/A68790001_02_Front_8ce45115-0c76-49fb-acb3-bc34f1dbede8.jpg?v=1703251631',
      name: 'Green Jacket',
      category: 'Jacket',
      seller: 'Jacket Ltd',
      price: 478,
    },
    {
      url: 'https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/A1w9MSOxlfL.AC_UL320.jpg',
      name: ' fridge bag',
      quantity: 6,
      category: 'Disposable Utensils',
      seller: 'Amazon',
      price: 299,
    },
    {
      url: 'https://m.media-amazon.com/images/I/71x15gESB2L.SL1500.jpg',
      name: 'Unisex Hoodie',
      category: 'Hoodie',
      seller: 'Hoodie Ltd',
      price: 320,
    },
    {
      url: 'https://d3uvb2lhumlp.cloudfront.net/pub/media/catalog/product/cache/a3fb3e18da63ea949d8ede293a4991cf/h/h/hh2704_mk9_24_1.jpg',
      name: 'Blue Jeans',
      category: 'Jeans',
      seller: 'Jeans Ltd',
      price: 299,
    },
    {
      url: 'https://trendydot.in/wp-content/uploads/2023/04/CargoPant_JNJOG-01_LG_Front_Men_2.jpg',
      name: 'Olive green Cargo',
      category: 'Cargo',
      seller: 'Cargo Ltd',
      price: 325,
    },
    {
      url: 'https://guruofficialbrand.com/wp-content/uploads/2022/05/C52A75791-768x512.jpg',
      name: 'T-shirt',
      category: 'T-shirt',
      seller: 'T-shirt Ltd',
      price: 129,
    },
    {
      url: 'https://ludic.life/cdn/shop/files/eclipse-greenpdp2.jpg?v=1697713072&width=1100',
      name: 'Shoes',
      category: 'Shoes',
      seller: 'Shoes Ltd',
      price: 350,
    },
    {
      url: 'https://assets.ajio.com/medias/sys_master/root/20210203/X4XT/601abf74aeb26969815c4b2f/-473Wx593H-460845783-black-MODEL.jpg',
      name: 'Flip Flops',
      category: 'Slippers',
      seller: 'Nike Ltd',
      price: 350,
    },
    {
      url: 'https://www.beyoung.in/api/cache/catalog/products/new_checked_shirt_image_9_12_2022/grey_cotton_solid_shirts_for_men_base_19_10_2023_700x933.jpg',
      name: 'Grey shirt',
      category: 'Shirt',
      seller: 'Shirt Ltd',
      price: 379,
    },
    {
      url: 'https://thehouseofrare.com/cdn/shop/files/VENEZYAPINK0835_1452x1799.jpg?v=1689768951',
      name: 'Pink Shirt',
      category: 'Shirt',
      seller: 'Shirt Ltd',
      price: 289,
    },
    {
      url: 'https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/7ZRnipCSFKKACocxoGfy/product-images/M10064F03_2.jpg',
      name: 'Sky Blue Shirt',
      category: 'Shirt',
      seller: 'Shirt Ltd',
      price: 323,
    },
    {
      url: 'https://thehouseofrare.com/cdn/shop/files/Throner---navy0030HERO_900x.jpg?v=1692873083',
      name: 'Navy Blue Shirt',
      category: 'Shirt',
      seller: 'Shirt Ltd',
      price: 366,
    },
    {
      url: 'https://www.southindiaeshop.com/pub/media/catalog/product/cache/f3083ab5e46fa316edf25a7bed8c5432/k/u/ku-dr-1594-red-1.jpg',
      name: 'Kurtha',
      category: 'Kurtha',
      seller: 'Kurtha Ltd',
      price: 319,
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default Cart;