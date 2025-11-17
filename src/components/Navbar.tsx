import { useState } from 'react';
import { ChevronDownIcon } from './Icons';
import { useFlagImage } from '../hooks/useFlagImage';

interface Country {
  code: string;
  name: string;
}

interface CountryItemProps {
  country: Country;
  isSelected: boolean;
  onSelect: (country: Country) => void;
}

const CountryItem = ({ country, isSelected, onSelect }: CountryItemProps) => {
  const { flagUrl, handleError } = useFlagImage(country.code);

  return (
    <button
      onClick={() => onSelect(country)}
      className={`w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 transition-colors cursor-pointer ${
        isSelected ? 'bg-blue-50' : ''
      }`}
    >
      <img
        src={flagUrl}
        alt={country.name}
        className="w-5 h-5 object-cover rounded-full"
        onError={handleError}
      />
      <span className="text-sm text-gray-700 cursor-pointer">
        {country.name}
      </span>
    </button>
  );
};

const Navbar = () => {
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const countries = [
    { code: 'NG', name: 'Nigeria' },
    { code: 'KE', name: 'Kenya' },
    { code: 'GH', name: 'Ghana' },
  ];

  const products = [
    { name: 'Pay in 4', href: '#' },
    { name: 'CredPal Card', href: '#' },
    { name: 'CredPal Savings', href: '#' },
    { name: 'Shop with CredPal', href: '#' },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const { flagUrl: selectedFlagUrl, handleError: handleSelectedFlagError } =
    useFlagImage(selectedCountry.code);

  return (
    <nav
      className="px-4 md:px-6 lg:px-8 py-4 sticky top-0 z-50"
      style={{
        background:
          'linear-gradient(to right, #E8FCFF, #FCF8F0, #E6EBFE, #D9E8FF)',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6 lg:space-x-8">
          <img src="/logo.svg" alt="CredPal Logo" className="h-6 md:h-7" />

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <div className="relative">
              <button
                onClick={() =>
                  setIsProductsDropdownOpen(!isProductsDropdownOpen)
                }
                className="flex items-center space-x-1 text-[#000000] hover:text-[#0A2540]/80 transition-colors text-sm lg:text-base font-medium cursor-pointer"
              >
                <span>Products</span>
                <ChevronDownIcon
                  className={`w-4 h-4 text-[#000000] transition-transform ${
                    isProductsDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isProductsDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                  {products.map((product) => (
                    <a
                      key={product.name}
                      href={product.href}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      {product.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#"
              className="text-[#000000] hover:text-[#0A2540]/80 transition-colors text-sm lg:text-base font-medium cursor-pointer"
            >
              Business
            </a>
            <a
              href="#"
              className="text-[#000000] hover:text-[#0A2540]/80 transition-colors text-sm lg:text-base font-medium cursor-pointer "
            >
              Shop
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="relative">
            <button
              onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
              className="flex items-center space-x-1 px-2 py-1 rounded-lg hover:bg-white/50 transition-colors cursor-pointer"
            >
              <img
                src={selectedFlagUrl}
                alt={selectedCountry.name}
                className="w-5 h-5 object-cover rounded-full"
                onError={handleSelectedFlagError}
              />
              <ChevronDownIcon
                className={`w-4 h-4 text-[#000000] transition-transform cursor-pointer ${
                  isCountryDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isCountryDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50 cursor-pointer">
                {countries.map((country) => (
                  <CountryItem
                    key={country.code}
                    country={country}
                    isSelected={selectedCountry.code === country.code}
                    onSelect={(country) => {
                      setSelectedCountry(country);
                      setIsCountryDropdownOpen(false);
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <button className="bg-black  text-white px-4 md:px-6 py-2 rounded-full cursor-pointer hover:bg-gray-800 transition-colors font-medium text-sm md:text-base shadow-md hover:shadow-lg">
            Get the App
          </button>
        </div>
      </div>

      {(isCountryDropdownOpen || isProductsDropdownOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsCountryDropdownOpen(false);
            setIsProductsDropdownOpen(false);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
