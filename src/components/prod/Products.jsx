import React from "react";
import Orange from "../../images/asset 6.png";
import white from "../../images/asset 5.png";
import skill from "./skillrary.jpg";
import blue from"../../images/asset 3.png"
import { BsArrowRightSquare } from "react-icons/bs";
import "./product.css";

const Products = () => {
  return (
    <div className="prod">
      <div className="skill">
        <div className="heads">
            <h1>SkillRary</h1>
            <p>One stop solution for online learning and assessment,</p>
            <p>tailored to suit every individual’s needs.</p>
        </div>
        <div className="whites">
            <img src={Orange} alt={Orange} className="one"/>
        </div>
            <div className="whitey">
              <img src={white} alt={white}  className="two"/>
            </div>
      </div>
      <div className="skillrary">
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3aEWGhR79OM?si=Ok1KF_z_oFIyPHq0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="rary">
          <img src={skill} alt={skill} />
          <p>
            Whether you are a passionate professional with a keen understanding
            of a particular skill that you want to teach the world or a company
            owner looking at polishing the skills of your employees, Skillrary
            is the platform that you are looking for. An online learning and
            assessment platform tailored to suit every individual’s needs,
            Skillrary provides computer-based training and e-learning in a range
            of subjects. It also makes curating and launching a course a quick
            and easy affair.{" "}
          </p>
          <p>
            With courses on varied subjects like design, marketing, business and
            AI, learners can opt for anything that excites them or suits their
            business requirements. Skillrary’s courses also involve a variety of
            multimedia elements, including graphics, audios, videos and web
            links. Be it self-paced or real-time, each course caters to an
            individual’s needs.
          </p>
          <p>
            The platform is also coupled with assessments for you to rate the
            skills of your learners or employees. So far, the trainers of
            Skillrary have conducted over 87,000 lectures; created more than
            99,000 videos and trained over 354,000 students in over 14,000
            courses.
          </p>
          <p>
            Join the community of Skillrary to sharpen your skills and make
            learning a fun and wholesome experience.
          </p>
        </div>
      </div>
      <div className="skil">
        <button>
          SkillRary - Know more{" "}
          <span>
            <BsArrowRightSquare />
          </span>
        </button>
        <img src={blue} alt={blue} />
      </div>
    </div>
  );
};

export default Products;
