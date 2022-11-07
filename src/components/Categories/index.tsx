import { StyledCategories } from "../styles/Categories.styled";
import homeAudio from "../../images/stereo.jpeg";
import desktop from "../../images/desktop1.jpeg";
import digital_camera from "../../images/digital_camera.jpeg";
import headphones from "../../images/headphones.jpeg";
import laptop from "../../images/newLaptop.jpeg";
import refrigerator from "../../images/refrigerator.jpeg";
import tablet from "../../images/newTablet.jpeg";
import tv from "../../images/newTv.jpeg";
import washers from "../../images/washers.jpeg";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <StyledCategories>
      <h2 className="header">Fall Sale</h2>
      <h3 className="sub-header"> Shop these deals and more by category:</h3>
      <div data-cy="categories" className="categories">
        <section data-cy="category" className="category">
          <Link to={`/Home_Audio`}>
            <div className="category-body">
              <img
                className="category-images"
                src={homeAudio}
                alt="Home Audio"
              />
            </div>
            <p className="category-label">Home Audio</p>
          </Link>
        </section>

        <section data-cy="category" className="category">
          <Link to={`/Desktops`}>
            <div className="category-body">
              <img className="category-images" src={desktop} alt="Desktop" />
            </div>
            <p className="category-label">Desktops</p>
          </Link>
        </section>

        <section data-cy="category" className="category">
          <Link to={`/Digital_Cameras`}>
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
          <Link to={`/Headphones`}>
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
          <Link to={`/Laptops`}>
            <div className="category-body">
              <img className="category-images" src={laptop} alt="Laptop" />
            </div>
            <p className="category-label">Laptops</p>
          </Link>
        </section>

        <section data-cy="category" className="category">
          <Link to={`/Refrigerators`}>
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
          <Link to={`/Tablets`}>
            <div className="category-body">
              <img className="category-images" src={tablet} alt="Tablet" />
            </div>
            <p className="category-label">Tablets</p>
          </Link>
        </section>

        <section data-cy="category" className="category">
          <Link to={`/TVs`}>
            <div className="category-body">
              <img className="category-images" src={tv} alt="Flat screen TV" />
            </div>
            <p className="category-label">TVs</p>
          </Link>
        </section>

        <section data-cy="category" className="category washers">
          <Link to={`/Washers_and_Dryers`}>
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
