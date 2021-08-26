import React from "react"

const Card = ({ cardData }) => {
  return (
    <div className="flex shadow-lg items-center rounded-lg overflow-hidden bg-white">
      <img
        className="h-32 w-32 flex-shrink-0"
        src={cardData.imageUrl}
        alt={cardData.imageAlt}
      />
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {cardData.city.charAt(0).toUpperCase() + cardData.city.slice(1)}
        </h3>
        <p className="text-gray-600">
          ${cardData.averagePrice} / night average
        </p>
        <div className="mt-4">
          <a
            className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm"
            href="#"
          >
            {" "}
            Explore {cardData.propertyCount} properties
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
