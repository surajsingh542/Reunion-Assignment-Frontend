import React from "react";
import { useState } from "react";
import Properties from "../Property/Properties";

const HomePage = () => {
  const [search, setSearch] = useState({
    city: "",
    availableFrom: "",
    price: "",
    propertyType: "",
  });

  const [searchData, setSearchData] = useState({
    active: 0,
    city: "",
    availableFrom: "",
    price: "",
    propertyType: "",
  });

  const onChangeHandler = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = () => {
    setSearchData({ ...search, active: 1 });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="m-2 w-11/12">
        <div className="bg-white p-6">
          <h2 className="text-stone-700 text-xl font-bold">
            Search Properties for Rent
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 p-4 bg-slate-400 rounded-xl shadow-lg">
            <div className="flex flex-col lg:border-r-4 lg:pr-5 lg:border-indigo-500">
              <label
                htmlFor="city"
                className="text-stone-600 text-sm font-medium"
              >
                City
              </label>

              <select
                onChange={onChangeHandler}
                value={search.city}
                id="city"
                name="city"
                className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                <option value="" disabled hidden>
                  Select Location
                </option>
                <option value="Faridabad">Faridabad</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Noida">Noida</option>
              </select>
            </div>

            <div className="flex flex-col lg:border-r-4 lg:pr-5 lg:border-indigo-500">
              <label
                htmlFor="date"
                className="text-stone-600 text-sm font-medium"
              >
                Available From
              </label>
              <input
                name="availableFrom"
                type="date"
                placeholder="Select Move-In Date"
                id="date"
                onChange={onChangeHandler}
                value={search.availableFrom}
                className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>

            <div className="flex flex-col lg:border-r-4 lg:pr-5 lg:border-indigo-500">
              <label
                htmlFor="price"
                className="text-stone-600 text-sm font-medium"
              >
                Price
              </label>
              <input
                type="range"
                id="price"
                name="price"
                min="0"
                max="10000"
                step="100"
                onChange={onChangeHandler}
                value={search.price}
                className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>

            <div className="flex flex-col lg:border-r-4 lg:pr-5 lg:border-indigo-500">
              <label
                htmlFor="property"
                className="text-stone-600 text-sm font-medium"
              >
                Propety Type
              </label>

              <select
                id="property"
                name="propertyType"
                onChange={onChangeHandler}
                value={search.propertyType}
                className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                <option value="" disabled hidden>
                  Select Propety Type
                </option>
                <option value="commercial">Commercial</option>
                <option value="housing">Housing</option>
                <option value="agricultural">Agricultural</option>
              </select>
            </div>

            <div className="flex flex-col justify-end ">
              <button
                onClick={submitHandler}
                className="active:scale-95 rounded-full bg-blue-600 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      <Properties searchFilter={searchData} />
    </div>
  );
};

export default HomePage;
