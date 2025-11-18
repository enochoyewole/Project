// TakePaySection component - displays information about CredPal Card
import { ArrowRightIcon } from './IconComponents';
import './TakePaySection.css';

const TakePaySection = () => {
  return (
    <section className="take-pay-section">
      <div className="take-pay-container">
        <div className="take-pay-grid">
          {/* Left side - image */}
          <div className="take-pay-image-wrapper take-pay-image-order-2">
            <div className="take-pay-image-container">
              <div className="take-pay-card-background">
                <div className="take-pay-card-wrapper">
                  <div className="take-pay-card-rotated">
                    <img
                      src="/credit-ca.png"
                      alt="CredPal Card"
                      className="take-pay-card-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - text content */}
          <div className="take-pay-content take-pay-content-order-1">
            <h3 className="take-pay-label">
              CREPAL CARD
            </h3>

            <h2 className="take-pay-title">
              Take Pay in 4 anywhere
            </h2>

            <h4 className="take-pay-subtitle">
              Spread purchases from your favourite brands with Credpal. You can
              pay in 4 with your Credpal card anywhere mastercard is accepted.
            </h4>

            <button className="take-pay-button">
              <span>Learn More</span>
              <ArrowRightIcon className="take-pay-button-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TakePaySection;
