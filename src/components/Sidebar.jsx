import { CircleChevronRight, Dot, Minus, ChevronDown } from "lucide-react";
import { useState } from "react";
import countries from "../data/countries";

function Sidebar() {
  const [selectedCountry, setSelectedCountry] = useState(
    countries.find((c) => c.code === "NP")
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  // Additional state for dropdowns
  const [selectedResidenceCountry, setSelectedResidenceCountry] = useState("");
  const [isResidenceDropdownOpen, setIsResidenceDropdownOpen] = useState(false);
  const [selectedStudyDestination, setSelectedStudyDestination] =
    useState("Australia");
  const [isStudyDropdownOpen, setIsStudyDropdownOpen] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState("12th");
  const [isEducationDropdownOpen, setIsEducationDropdownOpen] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const studyDestinations = [
    "Australia",
    "Canada",
    "UK",
    "USA",
    "New Zealand",
    "Germany",
  ];
  const educationLevels = ["12th", "Bachelor's Degree", "Master's Degree"];
  const residenceCountries = countries.map((c) => c.name);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  return (
    <div className="mb-16">
      {/* Menu section */}
      <div className="w-82 flex flex-col gap-y-[0.1rem]">
        <div className="flex flex-row bg-[#f5f8fb] hover:bg-[#1877f2] cursor-pointer text-[#334770] hover:text-white rounded-t-md justify-between px-6 py-4 font-semibold text-md hover:duration-300">
          <span>Study Abroad</span>
          <div>
            <CircleChevronRight />
          </div>
        </div>
        <div className="flex flex-row bg-[#f5f8fb] hover:bg-[#1877f2] cursor-pointer text-[#334770] hover:text-white  justify-between px-6 py-4 font-semibold text-md hover:duration-300">
          <span>Visa Application</span>
          <div>
            <CircleChevronRight />
          </div>
        </div>
        <div className="flex flex-row bg-[#f5f8fb] hover:bg-[#1877f2] cursor-pointer text-[#334770] hover:text-white  justify-between px-6 py-4 font-semibold text-md hover:duration-300">
          <span>PTE Test Preparation Nepal</span>
          <div>
            <CircleChevronRight />
          </div>
        </div>
        <div className="flex flex-row bg-[#f5f8fb] hover:bg-[#1877f2] cursor-pointer text-[#334770] hover:text-white justify-between px-6 py-4 font-semibold text-md hover:duration-300">
          <span>IELTS Classes in Nepal</span>
          <div>
            <CircleChevronRight />
          </div>
        </div>
        <div className="flex flex-row bg-[#f5f8fb] hover:bg-[#1877f2] cursor-pointer text-[#334770] hover:text-white  justify-between px-6 py-4 font-semibold text-md hover:duration-300">
          <span>Study Abroad Accomodation</span>
          <div>
            <CircleChevronRight />
          </div>
        </div>
        <div className="flex flex-row bg-[#f5f8fb] hover:bg-[#1877f2] cursor-pointer text-[#334770] hover:text-white rounded-b-md justify-between px-6 py-4 font-semibold text-md hover:duration-300">
          <span>Student Health Insurance</span>
          <div>
            <CircleChevronRight />
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-82 flex flex-col bg-[#f5f8fb] mt-7 rounded-lg px-6 pt-8">
        <span className="text-[#344871] text-3xl font-bold">
          Interested to Study Abroad?
        </span>
        <div className="flex flex-row items-center -ml-2 text-[#1877f2]">
          <span>
            <Dot size="35" />
          </span>
          <span>
            <Minus size="35" />
          </span>
        </div>
        <span className="text-[#565757]">
          Enter your details below and we’ll contact you soon.
        </span>
        <span className="text-[#565757] bg-[#cff4fc] pt-6 pb-3 pl-3 mt-6">
          "<span className="text-[#c24b31] ml-2">*</span>" indicates required
          fields
        </span>
        <form className="flex flex-col">
          <span className="text-[#4d4d4d] text-lg font-bold mt-2">
            First Name<span className="text-[#c24b31] ml-2">*</span>
          </span>
          <span>
            <input
              type="text"
              placeholder="E.g. Shesh"
              className="bg-white border border-[#e4e4e4] py-2 pl-2 focus:border-blue-600 focus:outline-none w-full rounded-md mt-2"
            ></input>
          </span>
          <span className="text-[#4d4d4d] text-lg font-bold mt-2">
            Last Name<span className="text-[#c24b31] ml-2">*</span>
          </span>
          <span>
            <input
              type="text"
              placeholder="E.g. Ghale"
              className="bg-white border border-[#e4e4e4] py-2 pl-2 focus:border-blue-600 focus:outline-none w-full rounded-md mt-2"
            ></input>
          </span>
          <span className="text-[#4d4d4d] text-lg font-bold mt-2">
            Email<span className="text-[#c24b31] ml-2">*</span>
          </span>
          <span>
            <input
              type="text"
              placeholder="E.g. ghale.shesh@gmail.com"
              className="bg-white border border-[#e4e4e4] py-2 pl-2 focus:border-blue-600 focus:outline-none w-full rounded-md mt-2"
            ></input>
          </span>
          <span className="text-[#4d4d4d] text-lg font-bold mt-2">
            Mobile<span className="text-[#c24b31] ml-2">*</span>
          </span>
          <div className="relative mt-2">
            <div className="flex bg-white border border-[#e4e4e4] rounded-md focus-within:border-blue-600">
              {/* Country Code Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center px-3 py-2 border-r border-[#e4e4e4] hover:bg-gray-50 focus:outline-none"
                >
                  <span className="mr-2">{selectedCountry.flag}</span>
                  <span className="text-sm font-medium text-gray-700">
                    {selectedCountry.dialCode}
                  </span>
                  <ChevronDown size={16} className="ml-1 text-gray-500" />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 z-50 w-64 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
                    {countries.map((country) => (
                      <button
                        key={country.code}
                        type="button"
                        onClick={() => handleCountrySelect(country)}
                        className="w-full flex items-center px-3 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                      >
                        <span className="mr-3">{country.flag}</span>
                        <span className="flex-1 text-sm">{country.name}</span>
                        <span className="text-sm text-gray-500 ml-2">
                          {country.dialCode}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Phone Number Input */}
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder={selectedCountry.placeholder}
                className="flex-1 py-2 px-3 focus:outline-none rounded-r-md"
              />
            </div>
          </div>
          <span className="text-[#4d4d4d] text-lg font-bold mt-2">
            Current City<span className="text-[#c24b31] ml-2">*</span>
          </span>
          <span>
            <input
              type="text"
              placeholder="E.g. Kathmandu"
              className="bg-white border border-[#e4e4e4] py-2 pl-2 focus:border-blue-600 focus:outline-none w-full rounded-md mt-2"
            ></input>
          </span>
          <span className="text-[#4d4d4d] text-lg font-bold mt-2">
            Country of Residence<span className="text-[#c24b31] ml-2">*</span>
          </span>
          <div className="relative mt-2">
            <button
              type="button"
              onClick={() =>
                setIsResidenceDropdownOpen(!isResidenceDropdownOpen)
              }
              className="w-full bg-white border border-[#e4e4e4] py-2 pl-2 pr-8 focus:border-blue-600 focus:outline-none rounded-md text-left flex items-center justify-between"
            >
              <span
                className={
                  selectedResidenceCountry ? "text-black" : "text-gray-500"
                }
              >
                {selectedResidenceCountry || "Country"}
              </span>
              <ChevronDown size={16} className="text-gray-500" />
            </button>

            {isResidenceDropdownOpen && (
              <div className="absolute top-full left-0 z-50 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
                {residenceCountries.map((country) => (
                  <button
                    key={country}
                    type="button"
                    onClick={() => {
                      setSelectedResidenceCountry(country);
                      setIsResidenceDropdownOpen(false);
                    }}
                    className="w-full px-3 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  >
                    {country}
                  </button>
                ))}
              </div>
            )}
          </div>
          <span className="text-[#4d4d4d] text-lg font-bold mt-2">
            Study Destination<span className="text-[#c24b31] ml-2">*</span>
          </span>
          <div className="relative mt-2">
            <button
              type="button"
              onClick={() => setIsStudyDropdownOpen(!isStudyDropdownOpen)}
              className="w-full bg-white border border-[#e4e4e4] py-2 pl-2 pr-8 focus:border-blue-600 focus:outline-none rounded-md text-left flex items-center justify-between"
            >
              <span className="text-black">{selectedStudyDestination}</span>
              <ChevronDown size={16} className="text-gray-500" />
            </button>

            {isStudyDropdownOpen && (
              <div className="absolute top-full left-0 z-50 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                {studyDestinations.map((destination) => (
                  <button
                    key={destination}
                    type="button"
                    onClick={() => {
                      setSelectedStudyDestination(destination);
                      setIsStudyDropdownOpen(false);
                    }}
                    className="w-full px-3 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  >
                    {destination}
                  </button>
                ))}
              </div>
            )}
          </div>
          <span className="text-[#4d4d4d] text-lg font-bold mt-2">
            Last Education<span className="text-[#c24b31] ml-2">*</span>
          </span>
          <div className="relative mt-2">
            <button
              type="button"
              onClick={() =>
                setIsEducationDropdownOpen(!isEducationDropdownOpen)
              }
              className="w-full bg-white border border-[#e4e4e4] py-2 pl-2 pr-8 focus:border-blue-600 focus:outline-none rounded-md text-left flex items-center justify-between"
            >
              <span className="text-black">{selectedEducation}</span>
              <ChevronDown size={16} className="text-gray-500" />
            </button>

            {isEducationDropdownOpen && (
              <div className="absolute top-full left-0 z-50 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                {educationLevels.map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => {
                      setSelectedEducation(level);
                      setIsEducationDropdownOpen(false);
                    }}
                    className="w-full px-3 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  >
                    {level}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Terms and Privacy Policy Checkbox */}
          <div className="flex items-start mt-4 mb-6">
            <input
              type="checkbox"
              id="terms"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="mt-1 mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="terms" className="text-sm text-[#4d4d4d]">
              I agree to the Expert Education{" "}
              <a
                href="#"
                className="text-[#1877f2] underline hover:text-blue-700"
              >
                Terms and Privacy Policy
              </a>
              <span className="text-[#c24b31] ml-1">*</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#1877f2] text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 mb-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default Sidebar;
