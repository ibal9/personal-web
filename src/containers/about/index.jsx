import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Iqbal",
  },
  {
    label: "Age",
    value: "18",
  },
  {
    label: "Address",
    value: "Indonesia",
  },
  {
    label: "Email",
    value: "muhhammadiqbal0909@gmail.com",
  },
  {
    label: "Contact No",
    value: "+62 85174250996",
  },
];

const jobSummary =
  "Seasoned and independent IT Support Specialist with 5 years of experience in delivering reliable and efficient technical solutions to optimize system performance and user satisfaction. Skilled in troubleshooting, proactive system maintenance, and implementing best practices to ensure seamless IT operations. Passionate about enhancing user experience by providing exceptional support, adhering to ITIL standards, and maintaining robust communication with stakeholders. Demonstrates attention to detail, a strong understanding of technical frameworks, and a commitment to resolving complex issues to drive organizational efficiency.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --blue-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var( --blue-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --blue-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var( --blue-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;