// CredpalSavings component - displays savings information
import { ArrowRightIcon } from './IconComponents';
import './CredpalSavings.css';

const CredpalSavings = () => {
  return (
    <section className="credpal-savings-section">
      <div className="credpal-savings-container">
        <div className="credpal-savings-grid">
          {/* Left side - image */}
          <div className="credpal-savings-image-wrapper">
            <div className="credpal-savings-image-container">
              <div className="credpal-savings-card-background">
                <div className="credpal-savings-card-content">
                  <div className="credpal-savings-image-inner">
                    <img
                      src="/hand-phone.png"
                      alt="CredPal Hand Phone"
                      className="credpal-savings-phone-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - text content */}
          <div className="credpal-savings-content">
            <h3 className="credpal-savings-label">
              CREDPAL SAVINGS
            </h3>

            <h2 className="credpal-savings-title">
              Save smarter, not harder
            </h2>

            <h4 className="credpal-savings-subtitle">
              With CredPal, saving isn't complicated. Set your goals, create
              budgets, and watch your savings grow automatically.
            </h4>

            <button className="credpal-savings-button">
              <span>Learn More</span>
              <ArrowRightIcon className="credpal-savings-button-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredpalSavings;
