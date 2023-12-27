import "./restaurant.css";

export default function Restaurant(props) {
  let arr = [];
  let arr2 = [];
  for (let i = 0; i < 5; i++) {
    if (i < props.rating) {
      arr.push(<i className="fa fa-star checked"></i>);
    } else {
      arr2.push(<i className="fa fa-star"></i>);
    }
  }

  return (
    <div className="restaruantCard">
      <div className="upperContainer">
        <div className="nameTitle">
          <p className="title">{props.name}</p>
          <div className="ratingContainer">
            {arr.map((e) => e)}

            {arr2.map((e) => e)}
          </div>
        </div>
        <div className="addressContainer">
          <i class="fa-solid fa-location-dot"></i>
          <p className="address">{props.address}</p>
        </div>
        <p className="code">{props.code}</p>
      </div>
      <div className="cuisineContainer">
        <div className="cuisine">
          <i class="fa-solid fa-utensils"></i>
          <p>{props.cuisine}</p>
        </div>
        <a href="">Visit Menu</a>
      </div>
    </div>
  );
}
