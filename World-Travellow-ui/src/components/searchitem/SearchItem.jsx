import './searchItem.css'

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square200/223496641.webp?k=a2395bdb7f1ce5c33815dee6d9d0f825e8cf88d1aac4d7ad2ec288fcbd8bba78&o=&s=1" 
        alt="" 
        className="siImg" 
        />
        <div className="siDesc">
          <h1 className="siTitle">Tower Street Apartments</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire Studio * 1 bathroom *21m^2 1 full bed
          </span>
          <span className="siCancelOp">Free cancelation</span>
          <span className="siCancelOpSubtitle">
            you can cancel later, so lock in this great price today!
          </span>
        </div>
          <div className="siDetails">
            <div className="siRating">
              <span>Excellent</span>
              <button>8.9</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">3999</span>
              <span className="siTaxOp">include Taxes and Fees</span>
              <button className='siCheckButton'>see Availability</button>
          </div> 
        </div>
      </div>
  )
}

export default SearchItem
