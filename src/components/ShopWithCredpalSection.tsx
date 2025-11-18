// ShopWithCredpalSection component - displays shopping app information
import { ArrowRightIcon } from './IconComponents';
import './ShopWithCredpalSection.css';

const ShopWithCredpalSection = () => {
  return (
    <section className="shop-with-credpal-section">
      <div className="shop-with-credpal-container">
        <div className="shop-with-credpal-grid">
          {/* Left side - text content */}
          <div className="shop-with-credpal-content">
            <h3 className="shop-with-credpal-label">
              SHOP WITH CREDPAL
            </h3>

            <h2 className="shop-with-credpal-title">
              Shopping, simplified
            </h2>

            <h4 className="shop-with-credpal-subtitle">
              One app to find, shop, and pay your way — CredPal connects you to
              the best brands, flexible payments, and real-time tracking of your
              favourite products, all in one place.
            </h4>

            <button className="shop-with-credpal-button">
              <span>Learn More</span>
              <ArrowRightIcon className="shop-with-credpal-button-icon" />
            </button>
          </div>

          {/* Right side - image */}
          <div className="shop-with-credpal-image-wrapper">
            <div className="shop-with-credpal-image-container">
              <div className="shop-with-credpal-card-background">
                <div className="shop-with-credpal-card-content">
                  <div className="shop-with-credpal-top-image">
                    <img
                      src="/comapny.png"
                      alt="CredPal Shopping App"
                      className="shop-with-credpal-company-image"
                    />
                  </div>

                  <div className="shop-with-credpal-bottom-image">
                    <img
                      src="/watch.png"
                      alt="CredPal Watch"
                      className="shop-with-credpal-watch-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopWithCredpalSection;
