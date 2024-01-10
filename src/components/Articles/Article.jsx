import React from "react";
import white from "./Wave_White_bottom_right_shape_02.png";
import card from "./art.json";
import { useState } from "react";
import { BsDot } from "react-icons/bs";
import { AiOutlineRightCircle } from "react-icons/ai";
import "./art.css";

const Article = () => {
  const [first, setfirst] = useState({ ucards: card });
  return (
    <div className="arts">
      <div className="wind">
        <div className="art_text">
          <h1>Articles</h1>
          <p>We have helped companies digitally transform</p>
          <p>themselves</p>
        </div>
        <img src={white} alt={white} />
      </div>
      <div className="navsi">
        <div className="navs_1">
          <p>All</p>
        </div>
        <div>
          <p>Blogs</p>
        </div>
        <div>
          <p>Case Study</p>
        </div>
        <div>
          <p>Consulting</p>
        </div>
        <div>
          <p>IT Training</p>
        </div>
        <div>
          <p>Software Development</p>
        </div>
        <div>
          <p>Software Testing</p>
        </div>
      </div>
      <div className="cards">
        {first.ucards.map((e) => {
          return (
            <div className="in">
              <img src={e.pic} alt={e.pic} />
              <div className="inn">
                <div className="blogging">
                  <p>{e.type}</p>
                  <p>
                    <span>
                      <BsDot />
                    </span>
                  </p>
                  <p>{e.sub}</p>
                </div>
                <div className="inn_title">
                  <p>{e.title}</p>
                </div>
                <div className="more">
                  <p>
                    READ MORE{" "}
                    <span>
                      <AiOutlineRightCircle />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Article;