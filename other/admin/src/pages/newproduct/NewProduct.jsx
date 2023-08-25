import "./newProduct.css";

const NewProduct = () => {
  return (
    <div className="newProduct">
        <h1 className="newProductTitle">New Product</h1>
        <form  className="addProductForm">
            <div className="addProductItem">
                <label>Product Name</label>
                <input type="text" placeholder="iphone 14" />
            </div>
            <div className="addProductItem">
                <label>Image</label>
                <input type="file" id="file" />
            </div>
            <div className="addProductItem">
                <label>Stock</label>
                <input type="text" placeholder="123" />
            </div>
            <div className="addProductItem">
                <label>Active</label>
                    <select className="newProductSelect" name="active" id="active" >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
            </select>
            </div>
            <button className="newProductButton">Create</button>     
        </form>
        </div>
  )
}

export default NewProduct
