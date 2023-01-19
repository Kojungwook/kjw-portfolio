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
              <div className="box" data-aos="flip-left">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
