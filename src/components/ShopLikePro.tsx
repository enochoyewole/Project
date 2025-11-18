// ShopLikePro component - displays a full-width image section
import './ShopLikePro.css';

const ShopLikePro = () => {
  return (
    <section className="shop-like-pro-section">
      <div className="shop-like-pro-container">
        <div className="shop-like-pro-image-wrapper">
          <img
            src="/shop-like-pro.png"
            alt="Shop like a pro"
            className="shop-like-pro-image"
          />
        </div>
      </div>
    </section>
  );
};

export default ShopLikePro;
