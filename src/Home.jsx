import React from "react";
import "./Global.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";
import backg from "./images/asset 11.jpeg";
import leftimg from "./images/asset 3.png";
import bottomimg from "./images/asset 6.png";
import rightimg from "./images/asset 4.png";
import waves from "./images/asset 5.png";
import WB from "./images/asset 10.png";
import Counts from "react-countup";
import DOT1 from "./images/background_dots_01.png";
import IMG1 from "./images/asset 7.jpeg";
import IMG2 from "./images/asset 8.jpeg";
import IMG3 from "./images/training_01-1280x960.jpg";
import IMG4 from "./images/asset 8.jpeg";
import RUN1 from "./images/01-160x160.jpg";
import RUN2 from "./images/02-160x160.jpg";
import RUN3 from "./images/03-160x160.jpg";
import RUN4 from "./images/04-160x160.jpg";
import FLOAT from "./images/asset 6.png";
import WEB from "./images/website-1500X800-1280x800.jpg";
import PURSE from "./images/test-automation-Fireflink-testyantra-720x800.jpg";
import PHONE from "./images/Automate-Software-Testing-1280x800.jpg";
import GREY from "./images/Wave_grey_bottom_left_shape_01 (2).png";

const Home = () => {
  return (
    <section className="main_home_section">
      <div className="third">
        <img src={backg} alt={backg} />
        <div className="left">
          <img src={leftimg} alt={leftimg} />
        </div>
        <div className="bottom">
          <img src={bottomimg} alt={bottomimg} />
        </div>
        <div className="right">
          <img src={rightimg} alt={rightimg} />
        </div>
        <div className="zig">
          <img src={waves} alt={waves} />
        </div>
        <div className="bottom1">
          <img src={bottomimg} alt={bottomimg} />
        </div>
        {/* <div className='top'><img src={TOP} alt={TOP} /></div> */}
        <div className="l1">
          <h1>Enabling the Digital</h1>
        </div>
        <div className="l2">
          <h1>Transformation</h1>
        </div>
        <div className="p1">
          <h2>
            Test Yantra Global provides a range of innovative technology
            solutions to digitally transform your organization.
          </h2>
        </div>
        <div className="white">
          <img src={WB} alt={WB} />
        </div>
        <div className="dot1">
          <img src={DOT1} alt={DOT1} />
        </div>

        <div className="content">
          <div className="dlist">
            <h1>Our Services & Industries</h1>
            <p>
              We provide industry-specific services and solutions expertise to
              Global brands across a range of verticals.
            </p>
            <p>Some of the industries that we have worked with are :</p>
            <ul>
              <li>
                <span>
                  <AiOutlineCheckCircle />
                </span>
                Banking and Finance
              </li>
              <li>
                <span>
                  <AiOutlineCheckCircle />
                </span>
                Insurance
              </li>
              <li>
                <span>
                  <AiOutlineCheckCircle />
                </span>
                Retail and e-commerce
              </li>
              <li>
                <span>
                  <AiOutlineCheckCircle />
                </span>
                Healthcare
              </li>
              <li>
                <span>
                  <AiOutlineCheckCircle />
                </span>
                Information, Communication, Technology (ICT)
              </li>
              <li>
                <span>
                  <AiOutlineCheckCircle />
                </span>
                Education
              </li>
              <li>
                <span>
                  <AiOutlineCheckCircle />
                </span>
                Travel
              </li>
              <li>
                <span>
                  <AiOutlineCheckCircle />
                </span>
                Media and Entertainment
              </li>
            </ul>
          </div>
          <div className="cards">
            <div className="firstline">
              <div className="card1">
                <div className="cimg1">
                  <img src={IMG1} alt={IMG1} />
                </div>
                <div className="c_content1">
                  <h1>Software Design and Development</h1>
                  <p>
                    We deliver IT solutions in a wide variety of verticals and
                    elevate businesses to the next level.
                  </p>
                  <h2>
                    READ MORE
                    <span>
                      <AiOutlineRightCircle />
                    </span>
                  </h2>
                </div>
              </div>
              <div className="card2">
                <div className="cimg1">
                  <img src={IMG2} alt={IMG2} />
                </div>
                <div className="c_content1">
                  <h1 className="st">Software Testing</h1>
                  <p>
                    We offer cost-effective, reliable and scalable software
                    testing services.
                  </p>
                  <h2 className="rm2">
                    READ MORE
                    <span>
                      <AiOutlineRightCircle />
                    </span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="secondline">
              <div className="card3">
                <div className="cimg1">
                  <img src={IMG3} alt={IMG3} />
                </div>
                <div className="c_content1">
                  <h1>Elevate IT - IT Skills Development</h1>
                  <p>
                    Our customized and curated training models help
                    organizations elevate their IT quotient.
                  </p>
                  <h2 className="rm3">
                    READ MORE
                    <span>
                      <AiOutlineRightCircle />
                    </span>
                  </h2>
                </div>
              </div>
              <div className="card4">
                <div className="cimg1">
                  <img src={IMG4} alt={IMG4} />
                </div>
                <div className="c_content1">
                  <h1>IT Consulting & Managed Services</h1>
                  <p>
                    Our team of experts help you craft a winning IT strategy for
                    your organization
                  </p>
                  <h2>
                    READ MORE
                    <span>
                      <AiOutlineRightCircle />
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* AFTER CAREDS */}

        <div className="last_third">
          <div className="iframe">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tuwxrL7Kh4E?si=vnS9HkBDSlC03cgy"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="exp">
            <h1>At the forefront of innovation</h1>
            <p>
              Test Yantra Global provides industry leading expertise and
              advanced technology solution to Digitally Transform leading brands
              across various industries. Connect with one of our Expert
              Solutions Specialist to see how Test Yantra can give your
              organization a leading edge.
            </p>
          </div>
        </div>
      </div>

      <div className="nspeack">
        <h1>The numbers speak for </h1>
        <h1>themselves</h1>
      </div>

      <div className="run">
        <div className="div_p">
          <img src={RUN1} alt={RUN1} />
          <h1 className="runtime">
            <Counts end={6} duration={2} />
          </h1>
          <p>Countries & Growing</p>
        </div>

        <div className="div_p">
          <img src={RUN2} alt={RUN2} />
          <h1 className="runtime">
            <Counts end={3000} suffix="+" duration={2} />
          </h1>
          <p>Clients Across Globe</p>
        </div>

        <div className="div_p">
          <img src={RUN3} alt={RUN3} />
          <h1 className="runtime">
            <Counts end={5000} suffix="+" duration={2} />
          </h1>
          <p>Team Members</p>
        </div>

        <div className="div_p">
          <img src={RUN4} alt={RUN4} />
          <h1 className="runtime">
            <Counts end={12000} suffix="+" duration={2} />
          </h1>
          <p>On Demand Engineers</p>
        </div>
      </div>

      {/* side orange float */}
      <div className="float">
        <img src={FLOAT} alt={FLOAT} />
      </div>

      <div className="single_line">
        <h1>Articles</h1>
      </div>
      <div className="a_cards">
        <div className="a_cards1">
          <img src={WEB} alt={WEB} />
          <h3>May 16, 2023</h3>
          <h1>
            One stop solution for Scriptless Automated Testing – FireFlink
          </h1>
          <p>
            READ MORE
            <span>
              <AiOutlineRightCircle />
            </span>
          </p>
        </div>

        <div className="a_cards2">
          <img src={PURSE} alt={PURSE} />
          <h3>April 19, 2023</h3>
          <h1>Test Automation Suite- Selenium , Oracle or FireFlink</h1>
          <p>
            READ MORE
            <span>
              <AiOutlineRightCircle />
            </span>
          </p>
        </div>

        <div className="a_cards3">
          <img src={PHONE} alt={PHONE} />
          <h3>March 24, 2023</h3>
          <h1>Automated software testing -101</h1>
          <p>
            READ MORE
            <span>
              <AiOutlineRightCircle />
            </span>
          </p>
        </div>
      </div>

      {/* READ MORE BUTTON */}
      <div className="single_line2">
        <button>Read more Articles</button>
      </div>

      {/* SINGLE LINE AFTER BUTTON */}
      <div className="single_line3">
        <h1>We enable you to digitally transform your business to</h1>
        <h1>help you create the company of your dreams.</h1>
      </div>

      <div className="sec_dot">
        <img src={GREY} alt={GREY} />
      </div>
    </section>
  );
};

export default Home;
