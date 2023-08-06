import heroBlob from "../assets/images/blob.svg";
import foodDish from "../assets/images/food_dish.png";
import sideImg from "../assets/images/side_img.png";
import menuDish1 from "../assets/images/food_plates/plate1.jpg";
import { useEffect, useState } from "react";

export default function Landing() {
  const infoSectionList = [
    {
      id: 1,
      iconClass: "bi bi-clock-fill",
      title: "Today 10:00 am - 7:pm",
      subTitle: "Working hours",
    },
    {
      id: 2,
      iconClass: "bi bi-geo-alt-fill",
      title: "Velyka Vasylkivska 100",
      subTitle: "Get Directions",
    },
    {
      id: 3,
      iconClass: "bi bi-telephone-fill",
      title: "+38 (063)833 24 15",
      subTitle: "Call Online",
    },
  ];

  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    setFoodList(JSON.parse(sessionStorage.getItem("foodList"))??[]);
  }, []);

  return (
    <>
      <header className="main-header sectionX">
        <div className="logo">Potoba.</div>
        <div className="header-right-section">
          <nav className="nav">
            <a className="active" href="#ok">
              Home
            </a>
            <a href="#ok">Packages</a>
            <a href="#ok">About us</a>
            <a href="#ok">Contact us</a>
          </nav>
          <div className="action-buttons">
            <i className="bi bi-cart3" />
            <button className="buttonX white">Booking Now</button>
          </div>
        </div>
      </header>
      <section className="hero-section sectionX">
        <img className="hero-blob" src={heroBlob} alt="" />
        <div className="hero-left-section">
          <h1 className="hero-heading">
            Your Favorite Food Delivered Hot & Fresh
          </h1>
          <p className="hero-left-para">
            Healthy switcher chefs do all the prep work, like feeding,chopping &
            marinating, so you cam cook a fresh food.
          </p>
          <button className="buttonX">
            Order Now
            <i className="bi bi-arrow-right-short" />
          </button>
        </div>
        <img className="" src={foodDish} alt="Food Dish" />
        <img className="hero-side-img" src={sideImg} alt="" />
      </section>
      <section className="visit-info-section sectionX">
        <div className="info-box">
          <i className={infoSectionList[0].iconClass} />
          <h4>{infoSectionList[0].title}</h4>
          <p>{infoSectionList[0].subTitle}</p>
        </div>

        <div className="info-box">
          <i className={infoSectionList[1].iconClass} />
          <h4>{infoSectionList[1].title}</h4>
          <p>{infoSectionList[1].subTitle}</p>
        </div>

        <div className="info-box">
          <i className={infoSectionList[2].iconClass} />
          <h4>{infoSectionList[2].title}</h4>
          <p>{infoSectionList[2].subTitle}</p>
        </div>
      </section>
      <section className="menu-section sectionX">
        <div className="section-header">
          <label>Menu</label>
          <h2>Explore Our Best Menu</h2>
          <p>
            It's through mistakes that you actually grow <br />
            You have to get bad in order to get good.
          </p>
        </div>
        <div className="menu-list">
          {foodList.map((food) => (
            <div className="food-item" key={"food" + food.id}>
              <img className="food-img" src={menuDish1} alt="food item" />
              <div className="food-details">
                <h3 className="food-title">{food.title}</h3>
                <p className="food-subtitle">{food.subTitle}</p>
                <p className="price">{food.price}$</p>
                <p>{food.aboutFood}</p>
                <div>
                  {[...Array(parseInt(food.stars))].map((star, index) => (
                    <i className="bi bi-star-fill" key={food.title + index} />
                  ))}
                </div>
                <div className="add-to-cart">
                  <i className="bi bi-plus-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="menu-button">
          <button className="buttonX">Load More</button>
        </div>
      </section>
      <section className="testimonial-section sectionX">
        <div className="section-header">
          <label>Testimonial</label>
          <h2>What They Are Saying</h2>
          <p>
            It's through mistakes that you actually grow <br />
            You have to get bad in order to get good.
          </p>
        </div>
      </section>
      <section className="opinion-section sectionX">
        <div className="opinion-box"></div>
      </section>
    </>
  );
}
