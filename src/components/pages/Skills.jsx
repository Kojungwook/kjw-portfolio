import React from "react";
import { Heading } from "../common/Heading";
import { skills } from "../data/dummydata";

export const Skills = () => {
  return (
    <>
      <section className="skills">
        <div className="container">
          <Heading title="skills" />
          <div className="content grid3">
            {skills.map((item) => (
              <div className="box" key={item.id} data-aos="flip-left">
                <img src={item.cover} alt={item.title} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
