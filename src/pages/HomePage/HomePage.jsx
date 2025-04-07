"use client";
import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import Image from "next/image";
import { LinkAnim } from "@/components/LinkAnim/LinkAnim";
import { AnimatePresence, motion } from "framer-motion";
import { anim, pagePresence, SearchAnimPresence } from "@/helpers/anim";
import classNames from "classnames";

import citiesArray from "./cities.json";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [isTerroristState, setIsTerroristState] = useState(false);
  // const [isModalActive, setIsModalActive] = useState(true);
  const [isModalActive, setIsModalActive] = useState(false);

  const handleModalClose = () => {
    setSearchTerm(""); // Clear the search input
    setIsModalActive(false);
  };

  // Update filtered cities whenever search term changes
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredCities([]);
      return;
    }

    const lowercasedSearch = searchTerm.toLowerCase();
    const results = citiesArray.filter(
      (city) =>
        city.name.toLowerCase().includes(lowercasedSearch) ||
        city.country.toLowerCase().includes(lowercasedSearch)
    );

    // Limit results to improve performance
    setFilteredCities(results.slice(0, 20));
  }, [searchTerm]);

  useEffect(() => {
    const lowercasedSearch = searchTerm.toLowerCase();
    const terroristTerms = [
      "russia",
      "russi",
      "moskow",
      "mosk",
      "mosc",
      "moscow",
      "saint-peter",
      "st. peter",
      "saint peter",
      "st peter",
    ];

    const hasTerroristTerm = terroristTerms.some((term) =>
      lowercasedSearch.includes(term)
    );

    setIsTerroristState(hasTerroristTerm);
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <motion.div className="home" {...anim(pagePresence)}>
      <motion.div
        initial="initial"
        animate={isModalActive ? "animate" : "exit"}
        variants={SearchAnimPresence.bg}
        className="home__bg"
      >
        <Image
          src="/images/bg.webp"
          fill
          alt="background"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      <div className="top container">
        <motion.input
          type="text"
          className={classNames("search__input", {
            "search__input--terrorist": isTerroristState,
          })}
          placeholder="Enter the city name"
          value={searchTerm}
          onChange={handleSearchChange}
          onClick={() => setIsModalActive(true)}
        />
        {isModalActive && (
          <motion.div
            className="search__close-button"
            onClick={handleModalClose}
            {...anim(SearchAnimPresence.cross)}
          >
            <svg
              className="search__close-button-icon"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.5L8.5 8.5L16 1.5"
                stroke="black"
                strokeWidth="1.4"
              />
              <path
                d="M1 15.5L8.5 8.5L16 15.5"
                stroke="black"
                strokeWidth="1.4"
              />
            </svg>
          </motion.div>
        )}
        <AnimatePresence mode="wait" initial={false}>
          {!isModalActive && (
            <motion.div
              {...anim(SearchAnimPresence.links.top)}
              className="links-wrapper links-wrapper--top"
            >
              <div className="links">
                <LinkAnim
                  text="instagram"
                  href="https://www.instagram.com/"
                  icon="/images/inst-icon.svg"
                />
                <span className="bold">/</span>
                <LinkAnim
                  text="behance"
                  href="https://www.behance.com/"
                  icon="/images/behance-icon.svg"
                />
              </div>
              <p className="uppercase">all rights reserved ©2025 WCFE</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence mode="wait">
        {isModalActive && (
          <motion.div
            {...anim(SearchAnimPresence.links.bottom)}
            className="links-wrapper links-wrapper--bottom"
          >
            <div className="links">
              <LinkAnim
                text="instagram"
                href="https://www.instagram.com/"
                icon="/images/inst-icon.svg"
              />
              <span className="bold">/</span>
              <LinkAnim
                text="behance"
                href="https://www.behance.com/"
                icon="/images/behance-icon.svg"
              />
            </div>
            <p className="uppercase">all rights reserved ©2025 WCFE</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isModalActive && (
          <div className="search-results-wrapper container">
            <div className="search-results">
              {filteredCities.length > 0 && !isTerroristState && (
                <motion.div
                  className="search-results__list"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {filteredCities.map((city, index) => (
                    <motion.h2
                      key={`${city.name}-${index}`}
                      className="search-results__item"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      {`${city.name}, ${city.country}`}
                    </motion.h2>
                  ))}
                </motion.div>
              )}

              {searchTerm &&
                filteredCities.length === 0 &&
                !isTerroristState && (
                  <motion.div
                    className="search-results__empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    No cities found matching "{searchTerm}"
                  </motion.div>
                )}

              {isTerroristState && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="terrorist-state"
                >
                  <h2 className="text red">
                    Warning! You are searching for a childrens killer state.
                  </h2>
                  <svg
                    width="24"
                    height="24"
                    className="terrorist-state__icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.54062 4.71L3.25063 4L20.0006 20.75L19.2906 21.46L15.9506 18.11C14.5806 18.68 13.0806 19 11.5006 19C6.94062 19 3.00063 16.35 1.14062 12.5C2.11063 10.5 3.63063 8.83 5.50063 7.68L2.54062 4.71ZM11.5006 18C12.7906 18 14.0306 17.77 15.1706 17.34L14.0506 16.21C13.3206 16.71 12.4506 17 11.5006 17C9.00062 17 7.00063 15 7.00063 12.5C7.00063 11.55 7.29063 10.68 7.79063 9.95L6.24062 8.41C4.56627 9.38547 3.1901 10.7997 2.26063 12.5C4.04062 15.78 7.50062 18 11.5006 18ZM20.7406 12.5C18.9606 9.22 15.5006 7 11.5006 7C10.3506 7 9.23062 7.19 8.19062 7.53L7.41062 6.75C8.68062 6.26 10.0606 6 11.5006 6C16.0606 6 20.0006 8.65 21.8606 12.5C20.9519 14.3858 19.5444 15.987 17.7906 17.13L17.0706 16.4C18.6006 15.44 19.8706 14.1 20.7406 12.5ZM11.5006 8C14.0006 8 16.0006 10 16.0006 12.5C16.0006 13.32 15.7806 14.08 15.4006 14.74L14.6606 14C14.8806 13.54 15.0006 13.04 15.0006 12.5C15.0006 11.5717 14.6319 10.6815 13.9755 10.0251C13.3191 9.36875 12.4289 9 11.5006 9C10.9606 9 10.4606 9.12 10.0006 9.34L9.26062 8.6C9.92062 8.22 10.6806 8 11.5006 8ZM8.00063 12.5C8.00063 13.4283 8.36937 14.3185 9.02575 14.9749C9.68213 15.6313 10.5724 16 11.5006 16C12.1706 16 12.7906 15.81 13.3206 15.5L8.50063 10.68C8.19063 11.21 8.00063 11.83 8.00063 12.5Z"
                      fill="black"
                    />
                  </svg>
                </motion.div>
              )}
            </div>
            {filteredCities.length > 0 && !isTerroristState && (
              <div className="fade"></div>
            )}
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
