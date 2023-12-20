import React, { useEffect, useState } from "react";
import PropertyCard from "../Cards/PropertyCard";
import { listProperties } from "../../Api/PropertiesAPI";

import Loaderimage from "../../images/loader.gif";

const Properties = ({ searchFilter }) => {
  const [allProperties, setAllProperties] = useState([]);
  const [properties, setProperties] = useState([]);
  const [loader, setLoader] = useState(false);

  const getProperties = () => {
    setLoader(true);
    try {
      listProperties().then((res) => {
        if (res.status === 200) {
          setLoader(false);
          setAllProperties(res.data.data);
          setProperties(res.data.data);
        } else {
          console.error("error");
        }
      });
    } catch (error) {
      setLoader(false);
      console.error(error);
    }
  };

  useEffect(() => {
    getProperties();
  }, []);

  useEffect(() => {
    console.log("Searching Called");
    if (searchFilter.active === 1) {
      console.log("Inside Search");
      console.log(searchFilter);

      let filteredData = allProperties.filter((item) => {
        // console.log(
        //   searchFilter.city.toLowerCase() == ""
        //     ? item.address.city.toLowerCase()
        //     : searchFilter.city.toLowerCase()
        // );
        // console.log(
        //   searchFilter.price == ""
        //     ? parseInt(item.rent)
        //     : parseInt(searchFilter.price)
        // );
        // console.log(
        //   searchFilter.availableFrom == ""
        //     ? new Date(item.availableFrom).getTime()
        //     : new Date(searchFilter.availableFrom).getTime()
        // );
        // console.log(
        //   searchFilter.propertyType.toLowerCase() == ""
        //     ? item.propertyType.toLowerCase()
        //     : searchFilter.propertyType.toLowerCase()
        // );

        return (
          item.address.city.toLowerCase() ===
            (searchFilter.city.toLowerCase() == ""
              ? item.address.city.toLowerCase()
              : searchFilter.city.toLowerCase()) &&
          parseInt(item.rent) <=
            (searchFilter.price == ""
              ? parseInt(item.rent)
              : parseInt(searchFilter.price)) &&
          new Date(item.availableFrom).getTime() <=
            (searchFilter.availableFrom == ""
              ? new Date(item.availableFrom).getTime()
              : new Date(searchFilter.availableFrom).getTime()) &&
          item.propertyType.toLowerCase() ===
            (searchFilter.propertyType.toLowerCase() == ""
              ? item.propertyType.toLowerCase()
              : searchFilter.propertyType.toLowerCase())
        );
      });
      console.log("FilteredData", filteredData);
      setProperties(filteredData);
    }
  }, [searchFilter]);

  return (
    <>
      {loader ? (
        <div className="flex justify-center items-center">
          <img src={Loaderimage} alt="loader" className="w-20 h-20" />
        </div>
      ) : properties.length <= 0 ? (
        <>No Properties Found</>
      ) : (
        <div className="mx-auto grid w-11/12 justify-center px-4 sm:grid-cols-2 sm:gap-4 sm:px-8 md:grid-cols-3">
          {properties.map((data) => {
            return (
              <div key={data._id}>
                <PropertyCard property={data} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Properties;
