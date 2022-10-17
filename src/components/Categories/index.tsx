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

const Categories = () => {
  return (
    <StyledCategories>
      <h2>Fall Sale</h2>
      <h3> Shop these deals and more by category:</h3>
      <div className="categories">
        <div className="category-body">
          <img className="category-images" src={cellphone} alt="Cell Phone" />
        </div>
        <div className="category-body">
          <img className="category-images" src={desktop} alt="Desktop" />
        </div>
        <div className="category-body">
          <img
            className="category-images"
            src={digital_camera}
            alt="Digital Camera"
          />
        </div>
        <div className="category-body">
          <img className="category-images" src={headphones} alt="Headphones" />
        </div>
        <div className="category-body">
          <img className="category-images" src={laptop} alt="Laptop" />
        </div>
        <div className="category-body">
          <img
            className="category-images"
            src={refrigerator}
            alt="Refrigerator"
          />
        </div>
        <div className="category-body">
          <img className="category-images" src={tablet} alt="Tablet" />
        </div>
        <div className="category-body">
          <img className="category-images" src={tv} alt="Flat screen TV" />
        </div>
        <div className="category-body">
          <img
            className="category-images"
            src={washers}
            alt="Side by Side Washer and Dryer combo"
          />
        </div>
      </div>
    </StyledCategories>
  );
};
export default Categories;
