import { StyledCategories } from "../styles/Categories.styled";
import cellphone from "../../images/iphone.jpeg";
import desktop from "../../images/desktop1.jpeg";
import digital_camera from "../../images/digital_camera.jpeg";
import headphones from "../../images/headphones.jpeg";
import laptop from "../../images/laptop.jpeg";
import refrigerator from "../../images/refrigerator.jpeg";
import tablet from "../../images/tablet.jpeg";
import tv from "../../images/tv.jpeg";
import washers from "../../images/washers.jpeg";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <StyledCategories>
      <h2>Fall Sale</h2>
      <h3> Shop these deals and more by category:</h3>
      <div className="categories">
        <Link to={`/cellphones`}>
          <section className="category">
            <div className="category-body">
              <img
                className="category-images"
                src={cellphone}
                alt="Cell Phone"
              />
            </div>
            <p className="category-label">Cell Phones</p>
          </section>
        </Link>

        <section className="category">
          <div className="category-body">
            <img className="category-images" src={desktop} alt="Desktop" />
          </div>
          <p className="category-label">Desktops</p>
        </section>
        <section className="category">
          <div className="category-body">
            <img
              className="category-images"
              src={digital_camera}
              alt="Digital Camera"
            />
          </div>
          <p className="category-label">Digital Cameras</p>
        </section>
        <section className="category">
          <div className="category-body">
            <img
              className="category-images"
              src={headphones}
              alt="Headphones"
            />
          </div>
          <p className="category-label">Headphones</p>
        </section>
        <section className="category">
          <div className="category-body">
            <img className="category-images" src={laptop} alt="Laptop" />
          </div>
          <p className="category-label">Laptops</p>
        </section>
        <section className="category">
          <div className="category-body">
            <img
              className="category-images"
              src={refrigerator}
              alt="Refrigerator"
            />
          </div>
          <p className="category-label">Refrigerators</p>
        </section>
        <section className="category">
          <div className="category-body">
            <img className="category-images" src={tablet} alt="Tablet" />
          </div>
          <p className="category-label">Tablets</p>
        </section>
        <section className="category">
          <div className="category-body">
            <img className="category-images" src={tv} alt="Flat screen TV" />
          </div>
          <p className="category-label">TVs</p>
        </section>
        <section className="category">
          <div className="category-body">
            <img
              className="category-images"
              src={washers}
              alt="Side by Side Washer and Dryer combo"
            />
          </div>
          <p className="category-label">Washer & Dryers</p>
        </section>
      </div>
    </StyledCategories>
  );
};
export default Categories;
