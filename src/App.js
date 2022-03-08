import "./App.css";
import ProductList from "./Component/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const listproduct = [
    {
      imgSrc:
        "https://s.alicdn.com/@sc01/kf/Hc72f3726c52c459a8c9d68be9cea111eF.jpg_300x300.jpg",
      name: "AirPods",
      price: `70 $`,
    },
    {
      imgSrc: `https://s.alicdn.com/@sc01/kf/Hdfd49d641a21425b980735a170a9de89K.jpg_300x300.jpg`,
      name: "Smart watch",
      price: `8,64 $`,
    },
    {
      imgSrc:
        "https://s.alicdn.com/@sc01/kf/H06b8a5528adc413b8f4eeef65d889acfK.jpg_300x300.jpg",
      name: "Iphone 11 ",
      price: `150 $`,
    },
  ];
  const clickme = (el) => {
    alert(`the product name is ${el}`);
  };
  return (
    <div className="App">
      {/* <h1>Product List</h1> */}
      <ProductList produits={listproduct} handelclick={clickme} title={15}>
        <h1>hi je suis props children</h1>
        <p>est ce qu fhemtouni</p>
      </ProductList>
    </div>
  );
}

export default App;
