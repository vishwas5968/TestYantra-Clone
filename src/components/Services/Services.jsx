import React from "react";
import "./service.css";
// import BANNER from "./Consulting_banner.jpg"
import wavee from "./bottom_wave_02.png";

const Services = () => {
  return (
    <div className="service_main">
      <div className="service_div">
        <img src={wavee} alt={wavee} />
      </div>
      <div className="service_div2">
        <h1>IT CONSULTING & MANAGED SERVICES</h1>
        <p>
          Our team of IT consultants and managed services experts provide timely
          consulting, software configuration, deployment, and support for an
          array of cloud and premise based applications.
        </p>
      </div>
      <div className="service_container">
        <div>
          <h1>An overview</h1>
          <p>
            It’s extremely crucial for organizations to choose the right IT
            solutions for the growth of their company and brand. But with
            galloping technological advancements, it may be challenging for
            companies to keep up with the fast-changing times. This is where our
            team of consulting experts step in.
          </p>
        </div>
        <div>
          <h1>Why Test Yantra Global?</h1>
          <p>
            Test Yantra Global clients have leveraged our IT Consulting &
            Managed Services to create a competitive edge. With 15+ years of
            experience, 12,000+ engineers, 3,000+ customers, and 180+ enterprise
            deployments, our experts IT Consulting and Managed Services team can
            successfuly guide your business digital transformation.
          </p>
          <p>
            From consulting and planning for the most appropriate technology
            strategy and software stack, to deployment, maintenance, and support
            of applications, we have the resources, skills, and expertise to
            help elevate your business.
          </p>
          <p>
            Get in touch with our team of experts to discuss how we can help
            guide your successful digital transformation journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
