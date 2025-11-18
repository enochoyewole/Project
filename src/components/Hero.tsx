// Hero component - the main landing section with title and images
import { ArrowRightIcon } from './IconComponents';
import './Hero.css';

const Hero = () => {
  // Hero section background gradient
  const heroGradient = 'linear-gradient(to right, #E8FCFF, #FCF8F0, #E6EBFE, #D9E8FF)';
  // Primary blue color for the button
  const primaryBlue = '#274FED';
  // Darker blue for button hover
  const primaryBlueDark = '#113EEE';

  // Handle button hover - change background color
  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>, isEntering: boolean) => {
    if (isEntering) {
      e.currentTarget.style.backgroundColor = primaryBlueDark;
    } else {
      e.currentTarget.style.backgroundColor = primaryBlue;
    }
  };

  return (
    <section
      className="hero-section"
      style={{
        background: heroGradient,
      }}
    >
      <div className="hero-container">
        <div className="hero-grid">
          {/* Left side - text content */}
          <div className="hero-content">
            <h1 className="hero-title">
              Payment at your Pace.
            </h1>

            <p className="hero-description">
              Shop confidently and pay in 4 interest-free installments, in 30
              days, or over time — no hidden fees, no jargon. Just smarter
              payments.
            </p>

            <button
              className="hero-button"
              style={{
                backgroundColor: primaryBlue,
              }}
              onMouseEnter={(e) => handleButtonHover(e, true)}
              onMouseLeave={(e) => handleButtonHover(e, false)}
            >
              <span>Get Started</span>
              <ArrowRightIcon className="hero-button-icon" />
            </button>
          </div>

          {/* Right side - images */}
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              {/* Credit card image - positioned and rotated */}
              <div
                className="hero-card-wrapper"
                style={{
                  left: '-30px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              >
                <div style={{ transform: 'rotate(12deg)' }}>
                  <img
                    src="/Credit Card.png"
                    alt="CredPal Credit Card"
                    className="hero-card-image"
                  />
                </div>
              </div>

              {/* Phone image - main image */}
              <img
                src="/phone.png"
                alt="CredPal Mobile App"
                className="hero-phone-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
