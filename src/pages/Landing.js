import heroBlob from "../assets/images/blob.svg";
import foodDish from "../assets/images/food_dish.png";

export default function Landing() {
  return (
    <>
      <header className="main-header sectionX">
        <div className="logo">Potoba.</div>
        <div className="header-right-section">
          <nav className="nav">
            <a className="active" href="#">
              Home
            </a>
            <a href="#">Packages</a>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
          </nav>
          <div className="action-buttons">
            <button className="buttonX white">Booking Now</button>
          </div>
        </div>
      </header>
      <section className="hero-section sectionX">
        <img className="hero-blob" src={heroBlob} alt="" />
        <div className="hero-left-section">
          <h1 className="hero-heading">Your Favorite Food Delivered Hot & Fresh</h1>
          <p className="hero-left-para">
            Healthy switcher chefs do all the prep work, like feeding,chopping &
            marinating, so you cam cook a fresh food.
          </p>
          <button className="buttonX">Order Now</button>
        </div>

        <img className="" src={foodDish} alt="" />
      </section>
    </>
  );
}
