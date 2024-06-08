import { FC } from "react";
import AboutHero from "../components/AboutHero";
import aboutSectionImg from "../assets/slide-image-free-img.jpg";

const About: FC = () => {
  return (
    <>
      <AboutHero />
      <div className="about__section">
        <div className="about__section__content">
          <div className="about__section__info">
            <div className="heading__border"></div>
            <h2>Who We Are</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam
              nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
              vitae erat consequat auctor eu in elit.
            </p>
          </div>
          <div className="about__section__img">
            <img src={aboutSectionImg} alt="team" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
