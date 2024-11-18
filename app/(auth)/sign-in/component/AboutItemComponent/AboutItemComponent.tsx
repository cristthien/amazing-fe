import React from "react";

interface Specific {
  label: string;
  value: string;
}

interface AboutItemProps {}

const AboutItemComponent: React.FC<AboutItemProps> = () => {
  const itemDetails = {
    responsibility: "Seller assumes all responsibility for this listing.",
    itemNumber: "387531456033",
    lastUpdated: "Oct 24, 2024 06:45:21 PDT",
    specifics: [
      { label: "Condition", value: "New/Factory Sealed" },
      { label: "Convention/Event", value: "Yu-Gi-Oh! TCG World Championship" },
      { label: "Card Size", value: "Standard" },
      { label: "Set", value: "2017" },
      { label: "Configuration", value: "Box" },
      { label: "Character", value: "Joey Wheeler, Yami Yugi" },
      { label: "Year Manufactured", value: "2017" },
      { label: "Game", value: "Yu-Gi-Oh! TCG" },
      { label: "Language", value: "English" },
      { label: "Manufacturer", value: "Konami" },
      { label: "Country/Region of Manufacture", value: "United States" },
    ] as Specific[],
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg mt-8 text-gray-800">
      <h2 className="text-xl font-bold border-b pb-2 mb-4 text-gray-700">
        About This Item
      </h2>
      <div className="space-y-2">
        <p>{itemDetails.responsibility}</p>
        <p>
          <strong>eBay item number:</strong> {itemDetails.itemNumber}
        </p>
        <p>
          <strong>Last updated on:</strong> {itemDetails.lastUpdated}
        </p>
      </div>
      <div className="mt-6 border-t pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {itemDetails.specifics.map((specific, index) => (
          <div key={index} className="text-sm">
            <strong className="block font-semibold text-gray-700">
              {specific.label}
            </strong>
            <span className="text-gray-600">{specific.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutItemComponent;
