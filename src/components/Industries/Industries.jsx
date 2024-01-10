import React from "react";
import "./industry.css"
import wavee from "./bottom_wave_02.png";
import ind_banner from "./Screenshot (1).png";

const Industries = () => {
  return (
    <section className="indsection">
      <div className="inddiv">
        <img src={wavee} alt={wavee} />
      </div>
      <div className="inddiv2">
        <h1>INSURANCE</h1>
        <p>
          We combine analytics, design and development to assist our insurance
          clients
        </p>
      </div>
      <div className="inddiv3">
        <div className="div3_img">
          <img src={ind_banner} alt={ind_banner} />
        </div>
        <div className="div3_p">
          <p>
            The global insurance industry witnessed a moderate growth of 4.9
            percent in 2019 over 2018, a slightly higher level than its CAGR
            from 2010 to 2018 of 3 percent with total premiums reaching 5
            trillion euros (Exhibit 1). The following years, the pandemic dealt
            a big blow to the industry with the repeated lockdowns resulting in
            a mighty slowdown. But now, with the world recovering post Covid,
            insurers are hoping for a bright future for the industry.
          </p>
          <p>
            With digital being the buzzword in the world of insurance, most
            insurance companies are using cutting-edge technologies to transform
            themselves. Yes, gone are the days when insurance agents went from
            door to door selling policies. Today, more and more insurance
            companies are turning to technology to make the entire process
            easier for policyholders. Not only does technology help insurance
            companies maintain a flexible work schedule but it also leaves the
            customers satisfied. This is one of the main reasons why ‘Insurtech’
            sure is the way to go.
          </p>
          <p>
            At Test Yantra Global, the skilled team combines analytics, design
            and development and assists its insurance clients to seamlessly
            blend into the digital world. Our solutions consist of a wide range
            of advanced analytics that keep us ahead of our contemporaries.
            Adept at building risk strategies for our clients in their security
            and regulatory requirements, Test Yantra Global’s strategies lead to
            more profit and better business outcomes.
          </p>
        </div>
      </div>
      <div className="inddiv4">
        <p>
          Test Yantra Global uses easy-to-understand business models and
          operational excellence to educate clients on the importance of being
          tech-savvy.
        </p>
        <p>
          We also impart knowledge on how to make customer experience
          interesting and easier so that it benefits both the company as well as
          policy holders.
        </p>
      </div>
    </section>
  );
};

export default Industries;
