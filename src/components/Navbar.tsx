// Navbar component - navigation bar with logo, menu, and country selector
import { useState } from 'react';
import { ChevronDownIcon } from './IconComponents';
import './Navbar.css';

// Define country type
interface Country {
  code: string;
  name: string;
}

// Define product type
interface Product {
  name: string;
  href: string;
}

// Country item component - displays a country option in the dropdown
interface CountryItemProps {
  country: Country;
  isSelected: boolean;
  onSelect: (country: Country) => void;
}

const CountryItem = ({ country, isSelected, onSelect }: CountryItemProps) => {
  // Build flag image URL from country code
  const FLAG_CDN_BASE_URL = 'https://flagcdn.com/w20';
  const DEFAULT_COUNTRY_CODE = 'ng';
  
  const buildFlagUrl = (countryCode: string): string => {
    return `${FLAG_CDN_BASE_URL}/${countryCode.toLowerCase()}.png`;
  };
  
  const getDefaultFlagUrl = (): string => {
    return buildFlagUrl(DEFAULT_COUNTRY_CODE);
  };
  
  const flagUrl = buildFlagUrl(country.code);
  const defaultFlagUrl = getDefaultFlagUrl();
  
  // Handle flag image error - use default flag if image fails to load
  const handleFlagError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = defaultFlagUrl;
  };

  return (
    <button
      onClick={() => onSelect(country)}
      className={`country-item ${isSelected ? 'country-item-selected' : ''}`}
    >
      <img
        src={flagUrl}
        alt={country.name}
        className="country-item-flag"
        onError={handleFlagError}
      />
      <span className="country-item-name">
        {country.name}
      </span>
    </button>
  );
};

const Navbar = () => {
  // State for dropdown menus
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  // List of available countries
  const countryList: Country[] = [
    { code: 'NG', name: 'Nigeria' },
    { code: 'KE', name: 'Kenya' },
    { code: 'GH', name: 'Ghana' },
  ];

  // List of products
  const productList: Product[] = [
    { name: 'Pay in 4', href: '#' },
    { name: 'CredPal Card', href: '#' },
    { name: 'CredPal Savings', href: '#' },
    { name: 'Shop with CredPal', href: '#' },
  ];

  // Selected country state
  const [selectedCountry, setSelectedCountry] = useState(countryList[0]);
  
  // Build flag URL for selected country
  const FLAG_CDN_BASE_URL = 'https://flagcdn.com/w20';
  const DEFAULT_COUNTRY_CODE = 'ng';
  
  const buildFlagUrl = (countryCode: string): string => {
    return `${FLAG_CDN_BASE_URL}/${countryCode.toLowerCase()}.png`;
  };
  
  const getDefaultFlagUrl = (): string => {
    return buildFlagUrl(DEFAULT_COUNTRY_CODE);
  };
  
  const selectedFlagUrl = buildFlagUrl(selectedCountry.code);
  const defaultFlagUrl = getDefaultFlagUrl();
  
  // Handle flag image error
  const handleSelectedFlagError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = defaultFlagUrl;
  };

  // Handle country selection
  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsCountryDropdownOpen(false);
  };

  // Close all dropdowns when clicking outside
  const handleDropdownClose = () => {
    setIsCountryDropdownOpen(false);
    setIsProductsDropdownOpen(false);
  };

  // Hero gradient background
  const heroGradient = 'linear-gradient(to right, #E8FCFF, #FCF8F0, #E6EBFE, #D9E8FF)';

  return (
    <nav
      className="navbar"
      style={{
        background: heroGradient,
      }}
    >
      <div className="navbar-container">
        <div className="navbar-left">
          <img src="/logo.svg" alt="CredPal Logo" className="navbar-logo" />

          {/* Desktop menu items */}
          <div className="navbar-menu">
            <div className="navbar-menu-item-wrapper">
              <button
                onClick={() =>
                  setIsProductsDropdownOpen(!isProductsDropdownOpen)
                }
                className="navbar-menu-button"
              >
                <span>Products</span>
                <ChevronDownIcon
                  className={`navbar-chevron ${isProductsDropdownOpen ? 'navbar-chevron-open' : ''}`}
                />
              </button>

              {/* Products dropdown */}
              {isProductsDropdownOpen && (
                <div className="navbar-dropdown">
                  {productList.map((product) => (
                    <a
                      key={product.name}
                      href={product.href}
                      className="navbar-dropdown-item"
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      {product.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="navbar-menu-link">
              Business
            </a>
            <a href="#" className="navbar-menu-link">
              Shop
            </a>
          </div>
        </div>

        <div className="navbar-right">
          {/* Country selector */}
          <div className="navbar-country-wrapper">
            <button
              onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
              className="navbar-country-button"
            >
              <img
                src={selectedFlagUrl}
                alt={selectedCountry.name}
                className="navbar-country-flag"
                onError={handleSelectedFlagError}
              />
              <ChevronDownIcon
                className={`navbar-chevron ${isCountryDropdownOpen ? 'navbar-chevron-open' : ''}`}
              />
            </button>

            {/* Country dropdown */}
            {isCountryDropdownOpen && (
              <div className="navbar-dropdown navbar-dropdown-right">
                {countryList.map((country) => (
                  <CountryItem
                    key={country.code}
                    country={country}
                    isSelected={selectedCountry.code === country.code}
                    onSelect={handleCountrySelect}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Get the App button */}
          <button className="navbar-app-button">
            Get the App
          </button>
        </div>
      </div>

      {/* Overlay to close dropdowns when clicking outside */}
      {(isCountryDropdownOpen || isProductsDropdownOpen) && (
        <div
          className="navbar-overlay"
          onClick={handleDropdownClose}
        />
      )}
    </nav>
  );
};

export default Navbar;
