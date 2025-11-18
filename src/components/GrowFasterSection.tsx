// GrowFasterSection component - displays business information
import { ArrowRightIcon } from './IconComponents';
import './GrowFasterSection.css';

const GrowFasterSection = () => {
  return (
    <section className="grow-faster-section">
      <div className="grow-faster-container">
        <div className="grow-faster-grid">
          {/* Left side - text content */}
          <div className="grow-faster-content">
            <h2 className="grow-faster-title">
              Grow faster with
              <br />
              CredPal
            </h2>

            <p className="grow-faster-description">
              With CredPal, you turn interest into action. Offer flexible credit
              at checkout, increase sales and attract customers who spend more,
              all without taking on risk.
            </p>

            <button className="grow-faster-button">
              <span>CredPal for Business</span>
              <ArrowRightIcon className="grow-faster-button-icon" />
            </button>
          </div>

          {/* Right side - image */}
          <div className="grow-faster-image-wrapper">
            <div className="grow-faster-image-container">
              <img
                src="/pos.png"
                alt="CredPal Business POS"
                className="grow-faster-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowFasterSection;
