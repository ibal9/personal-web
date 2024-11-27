import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs"; // Tambahkan import yang hilang
import ImageOne from "../../images/3db0930680c9a5ee13d1c3fcf8d8f5d1.jpg";
import ImageTwo from "../../images/696e5173916628fa7726aad8dddb1c9b.jpg";
import ImageThree from "../../images/09b1e39647fc7330c320ee6fff68a729.jpg";
import ImageFour from "../../images/91e57696a13a09ce5bc39ae82268e449.jpg";
import ImageFive from "../../images/a08dcda7b0e489a224f69589bc846636.jpg";
import "./styles.scss";
import { useState } from "react";


const portfolioData = [
  {
    id: 1,
    name: "Radiohead",
    image: ImageOne,
    link: "https://www.radiohead.com/",
  },
  {
    id: 2,
    name: "Avenged Sevenfold",
    link: "https://www.avengedsevenfold.com/",
    image: ImageTwo,
  },
  {
    id: 3,
    name: "Oasis",
    image: ImageThree,
    link: "https://oasisinet.com/",
  },
  {
    id: 4,
    name: "Dream Theater",
    image: ImageFour,
    link: "https://dreamtheater.net/",
  },
  {
    id: 5,
    name: "Guns N Roses",
    image: ImageFive,
    link: "https://www.gunsnroses.com/",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
  <img alt="dummy data" src={item.image} />
</div>

              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;