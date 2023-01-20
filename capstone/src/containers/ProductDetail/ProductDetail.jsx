
import { images } from '../../constants';
import './Product.css';
import { Rating, ReviewBlock } from '../../components';


const productImage = images.gallery01;

const ProductDetail = () => {
    var productName = null;
    var price = null;
    var description = null;
    var stars = 4;

    //Default Variable for review block
    var customerDefaultName = "Very Cool Name";
    var customerDefaultTitle = "Default Title";
    var customerDefaultDescription = "Default Description";
    return (
        <div className="app__gallery ">
            <img
                className="app__gallery-images_card "
                src={productImage}
                alt="product image"
            />
            <div className="app__benefits-headtext">
                <h3>{productName == null ? "Needs product name" : productName}</h3>
            </div>

            <Rating starRating={stars}/>

            <div className="app__benefits-paragraph">
                <strong>Price: ${price == null ? 9998.88 : price}</strong>
                <p>{description == null ? "This is the default description of the product" : description}</p>
            </div>

            <button className="custom__button">
                Add to Cart
            </button>
            <div className="">
                <div className="app__benefits-headtext">
                    <h3>Product Information</h3>

                </div>
                <div className="app__benefits-paragraph">
                    <p>
                        Varying other Information
                    </p>
                </div>
            </div>
            <div>
                <div className="app__benefits-headtext">
                    <h3>Reviews</h3>
                    <ReviewBlock
                    customerUsername={customerDefaultName}
                    customerDescription={customerDefaultDescription}
                    customerTitle={customerDefaultTitle}
                    reviewStarRating={stars}
                    />
                </div>
                <div>
                
                </div>
            </div>
        </div>

    )
};


export default ProductDetail;