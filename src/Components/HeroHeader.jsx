import React, { useEffect, useState } from "react";
import "./HeroHeaderStyle.css";
import { HomePageData } from "../data/Data";

function HeroHeader() {
  const [currIndex, setCurrIndex] = useState(0);
  // const { tabsData} = HomePageData.courseList
  // console.log("tabsData",tabsData[0].topics);
  // isse ek ek topics ka data milega but yaha pe currIndex daal du to jispe click krunga woh milega

  const { tabsData } = HomePageData.courseList;
  console.log("tabsData", tabsData[currIndex].topics);

  const clickHandler = (index) => {
    console.log(index, "index");
    setCurrIndex(index);
  };

  return (
    <div className="skill">
      <h2 className="Skill-header">All the skills you need in one place</h2>
      <div className="normal-para">
        From critical skills to technical topics, Udemy supports your
        professional development.
      </div>
      <div className="skill-btn">
        <div className="flex items-center gap-5 border-1">
          {tabsData.map((tab, index) => {
            return (
              <button
                className={`${currIndex === index ? "border-2 border-indigo-600" : ""
                  } pt-3`}
                onClick={() => clickHandler(index)}
                key={index}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* <button className='btn-1'>Data Science</button>
        <button className='btn-2'>IT Certifications</button>
        <button className='btn-3'>Leadership</button>
        <button className='btn-4'>Web Development</button>
        <button className='btn-5'>Communication</button>
        <button className='btn-6'>Business Analytics&intelligence</button> */}
      </div>
      <div className="data-sci-info">
        {tabsData[currIndex].topics.map((topic, index) => (
          <button>{topic.name}</button>
        ))}
      </div>
    </div>
  );
}

export default HeroHeader;
