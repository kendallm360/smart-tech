import { StyledCategories } from "../styles/Categories.styled";
import homeSecurity from "../../images/home_security.jpeg";
import desktop from "../../images/newDesktop.jpeg";
import digital_camera from "../../images/digital_camera.jpeg";
import headphones from "../../images/headphones.jpeg";
import laptop from "../../images/newLaptop1.jpeg";
import refrigerator from "../../images/refrigerator.jpeg";
import tablet from "../../images/newTablet1.jpeg";
import tv from "../../images/newTV1.jpeg";
import washers from "../../images/washers.jpeg";
import { Link } from "react-router-dom";

export const linkStyle = {
  textDecoration: "none",
};

const Categories = () => {
  return (
    <StyledCategories>
      <h2 className="header">
        Black Friday Deals<span className="header-span"> right now</span>
      </h2>
      <h3 className="sub-header"> Shop deals by category:</h3>
      <div data-cy="categories" className="categories">
        <section data-cy="category" className="category">
          <Link style={linkStyle} to={`/Desktops`}>
            <div className="category-body">
              <img className="category-images" src={desktop} alt="Desktop" />
            </div>
            <p className="category-label">Desktops</p>
          </Link>
        </section>
        <section data-cy="category" className="category">
          <Link style={linkStyle} to={`/Digital_Cameras`}>
            <div className="category-body">
              <img
                className="category-images"
                src={digital_camera}
                alt="Digital Camera"
              />
            </div>
            <p className="category-label">Digital Cameras</p>
          </Link>
        </section>
        <section data-cy="category" className="category">
          <Link style={linkStyle} to={`/Headphones`}>
            <div className="category-body">
              <img
                className="category-images"
                src={headphones}
                alt="Headphones"
              />
            </div>
            <p className="category-label">Headphones</p>
          </Link>
        </section>
        <section data-cy="category" className="category">
          <Link style={linkStyle} to={`/Home_Security`}>
            <div className="category-body">
              <img
                className="category-images"
                src={homeSecurity}
                alt="Home Security"
              />
            </div>
            <p className="category-label">Home Security</p>
          </Link>
        </section>
        <section data-cy="category" className="category">
          <Link style={linkStyle} to={`/Laptops`}>
            <div className="category-body">
              <img className="category-images" src={laptop} alt="Laptop" />
            </div>
            <p className="category-label">Laptops</p>
          </Link>
        </section>
        <section data-cy="category" className="category">
          <Link style={linkStyle} to={`/Refrigerators`}>
            <div className="category-body">
              <img
                className="category-images"
                src={refrigerator}
                alt="Refrigerator"
              />
            </div>
            <p className="category-label">Refrigerators</p>
          </Link>
        </section>
        <section data-cy="category" className="category">
          <Link style={linkStyle} to={`/Tablets`}>
            <div className="category-body">
              <img className="category-images" src={tablet} alt="Tablet" />
            </div>
            <p className="category-label">Tablets</p>
          </Link>
        </section>
        <section data-cy="category" className="category">
          <Link style={linkStyle} to={`/TVs`}>
            <div className="category-body">
              <img className="category-images" src={tv} alt="Flat screen TV" />
            </div>
            <p className="category-label">TVs</p>
          </Link>
        </section>
        <section data-cy="category" className="category washers">
          <Link style={linkStyle} to={`/Washers_and_Dryers`}>
            <div className="category-body">
              <img
                className="category-images"
                src={washers}
                alt="Side by Side Washer and Dryer combo"
              />
            </div>
            <p className="category-label">Washers/Dryers</p>
          </Link>
        </section>
      </div>
    </StyledCategories>
  );
};
export default Categories;
