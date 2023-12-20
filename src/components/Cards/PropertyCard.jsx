import React from "react";
import {
  Bars4Icon,
  CheckBadgeIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

const PropertyCard = ({ property }) => {
  return (
    <div className="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
      <a href="#">
        <img
          src={
            property?.propertyImg?.img_url ??
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcnRuZXJzaGlwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          }
          className="h-56 w-full object-cover"
          alt=""
        />
        <div className="flex-auto px-6 py-5">
          <span className="mb-2 flex items-center text-sm font-semibold">
            <p>
              <span className="text-lg font-bold text-blue-500">
                ₹{property.rent}
              </span>
              <span className="text-slate-600 text-sm">/month</span>
            </p>
          </span>
          <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
            {property.propertyName}
          </h3>
          <p className="mb-4 text-base font-light">
            {property.address.city}, {property.address.state},{" "}
            {property.address.country}
          </p>
          <div className="flex flex-wrap items-center justify-between border-t-2 border-slate-500">
            <div className="mt-1">
              <span className="mr-3 ml-auto inline-flex items-center py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                <CreditCardIcon
                  className="block h-6 w-6 mr-1"
                  aria-hidden="true"
                />
                {property.bed} Beds
              </span>
            </div>
            <div className="mt-1">
              <span className="mr-3 ml-auto inline-flex items-center py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                <CheckBadgeIcon
                  className="block h-6 w-6 mr-1"
                  aria-hidden="true"
                />
                {property.bathroom} Bathrooms
              </span>
            </div>
            <div className="mt-1">
              <span className="mr-3 ml-auto inline-flex items-center py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                <Bars4Icon className="block h-6 w-6 mr-1" aria-hidden="true" />
                {property.area.length}x{property.area.width}m<sup>2</sup>
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PropertyCard;
