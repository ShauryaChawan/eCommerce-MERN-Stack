import React, { useState } from "react";
import "./product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span>$1234</span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          maxime natus, exercitationem reprehenderit deserunt magnam asperiores
          eos officiis nemo repellendus quidem aspernatur accusantium facere rem
          provident explicabo quaerat! Voluptatem, numquam?
        </p>
        <div className="quantity">
          <button
            onClick={() =>
              quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)
            }
          >
            -
          </button>
          {quantity}
          <button onClick={(e) => setQuantity(quantity + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
				<div className="links">
					<div className="item">
						<FavoriteBorderIcon/> ADD TO WISH LIST
					</div>
					<div className="item">
						<BalanceIcon/> ADD TO COMPARE
					</div>
				</div>
				<div className="info">
					<span>Vendor: Polo</span>
					<span>Product Type: T-Shirt</span>
					<span>Tag: T-Shirt, Women, Top</span>
				</div>
				<hr/>
				<div className="details">
					<span>DESCRIPTION</span>
					<hr/>
					<span>ADDITIONAL INFORMATION</span>
					<hr/>
					<span>FAQ</span>
				</div>
      </div>
    </div>
  );
};

export default Product;
