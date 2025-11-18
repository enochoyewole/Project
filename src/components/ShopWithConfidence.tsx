// ShopWithConfidence component - displays three feature cards
import './ShopWithConfidence.css';

// Define the feature item type
interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

const ShopWithConfidence = () => {
  // List of features to display
  const featureList: FeatureItem[] = [
    {
      icon: '/Bag.svg',
      title: 'Pay Later',
      description:
        'Shop now and split your purchases into 4 interest-free payments.',
    },
    {
      icon: '/ArrowUpRight.svg',
      title: '0% Interest',
      description:
        'Shop now and split your purchases into 4 interest-free payments.',
    },
    {
      icon: '/CreditCard.svg',
      title: 'Build Credit',
      description: 'Seamless financial empowerment for your everyday lifestyle',
    },
  ];

  return (
    <section className="shop-with-confidence-section">
      <div className="shop-with-confidence-container">
        <h2 className="shop-with-confidence-title">
          Shop with confidence
        </h2>

        {/* Grid of feature cards */}
        <div className="shop-with-confidence-grid">
          {featureList.map((feature, index) => (
            <div key={index} className="shop-with-confidence-card">
              <div className="shop-with-confidence-icon-wrapper">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="shop-with-confidence-icon"
                />
              </div>

              <h3 className="shop-with-confidence-card-title">
                {feature.title}
              </h3>

              <p className="shop-with-confidence-card-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopWithConfidence;
