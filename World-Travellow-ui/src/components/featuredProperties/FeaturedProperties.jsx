import './featuredProperties.css'

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
          <img 
            src="https://cf.bstatic.com/xdata/images/hotel/max500/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o=" 
            alt="" 
            className="fpImg" 
          />
          <span className="fpName">Sugar loft Apartment</span>
          <span className="fpName">Mumbai</span>
          <span className="fpName">Starting from 5999/-</span>
          <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
          <div className="fpItem">
            <img 
              src="https://cf.bstatic.com/xdata/images/hotel/max500/115324042.jpg?k=d5256e704ea0699668f17867af8bfa411767e8840b34e764f08a2bef3f63b431&o=" 
              alt="" 
              className="fpImg" 
            />
            <span className="fpName">Luxuary Apartment</span>
            <span className="fpName">Hyderabad</span>
            <span className="fpName">Starting from 15999/-</span>
            <div className="fpRating">
              <button>9.9</button>
              <span>Excellent</span>
            </div>
          </div>
          <div className="fpItem">
            <img 
              src="https://cf.bstatic.com/xdata/images/hotel/max500/80970678.jpg?k=5522889e6ffe1e96899b9e82cee9a7653af667b6892383a42820c64acdacdae3&o=" 
              alt="" 
              className="fpImg" 
            />
            <span className="fpName">Habitat Apartments</span>
            <span className="fpName">New Delhi</span>
            <span className="fpName">Starting from 20000/-</span>
            <div className="fpRating">
              <button>10</button>
              <span>Excellent</span>
            </div>
        </div>
          <div className="fpItem">
            <img 
              src="https://cf.bstatic.com/xdata/images/hotel/max500/112346687.jpg?k=b0c1b36d31151ed463b8960c21e868584043522f4f380c0f382994d4b3e7ada2&o=" 
              alt="" 
              className="fpImg" 
            />
            <span className="fpName">Sugar loft Apartment</span>
            <span className="fpName">Bangalore</span>
            <span className="fpName">Starting from 10999/-</span>
            <div className="fpRating">
              <button>9.9</button>
              <span>Exceptional</span>
            </div>
        </div>
      </div>
  )
}

export default FeaturedProperties
