import"./product.css";
import React from 'react'
import {Link} from "react-router-dom";
import Chart from "../../components/chart/Chart";
import {productData} from "../../dummyData";
import { Publish } from "@material-ui/icons";
const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create </button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales performance"/>
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQkZwPvIgKwub291Ye6xLgb-yxB_KkSptENteZX-c6TF7WgbKAPE36bY0jCicjOTIXEYFulfmgGaUk&usqp=CAc" 
            alt="" className="productImg" />
             <span className="productName">iphone 14</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales</span>
              <span className="productInfoValue">500000</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form  className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="iphone 14"/>
            <label>In Stock</label>
            <select name="inStock" id="idStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
                <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQkZwPvIgKwub291Ye6xLgb-yxB_KkSptENteZX-c6TF7WgbKAPE36bY0jCicjOTIXEYFulfmgGaUk&usqp=CAc" alt="" 
                className="productUploadImg" />
                <label for="file">
                    <Publish/>
                </label>
                <input type="file" id="file" style={{display:"none"}} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Product
