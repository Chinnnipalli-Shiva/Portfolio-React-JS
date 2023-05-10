import a from "./mypic2.jpg";
import linkedin from "./iconmonstr-linkedin-2.png";
import FaceBook from "./iconmonstr-facebook-2.png";
import Instagram from "./iconmonstr-instagram-12.png";
import gmail from "./iconmonstr-gmail-2.png";
import Navbar from "./navbar";
import "./home.css";

function Home() {
  return (
    <div className="shiva">
      <div className="container">
        <Navbar />
        <div className="box">
          <div className="intro">
            <h1 className="hello">
              Hello <span className="exclam">🙷</span>
            </h1>
            <p className="hellodown">
              I'm <span className="name">CHINNIPALLI SHIVA ,</span>
            </p>
            <p className="title">
              To take a challenging role as Front End Web Developer in a
              highly/any technical company where I could utilize my skills in
              Web Design, Front-End Web Development and I'll give my best
              performance in every ascept to serve the company.
            </p>
            <div className="skillinfo">
              <h3>Front-End Developer</h3>
              <h3>UI/UX Designer</h3>
              <h3>Programmer</h3>
            </div>
          </div>
          <div className="image">
            <img src={a} alt="Pic" />
          </div>
        </div>
        <div className="socialmedia">
          <ul className="social-list">
            <li>
              <a href="https://www.linkedin.com/in/chinnipalli-shiva-65207724a" target={"_blank"}  rel="noreferrer"><img src={linkedin} alt="LInkedin" /></a>
            </li>
            <li>
              <a href="https://www.gmail.com" t rel="noreferrer"  target={"_blank"} ><img src={gmail} alt="gmail"/></a>
            </li>
            <li>
              <a  href="https://instagram.com/s_shivs1?igshid=ZDdkNTZiNTM=" target={"_blank"} rel="noreferrer" ><img src={Instagram} alt="insta" /></a>
            </li>
            <li>
              <a rel="https://www.linkedin.com noreferrer" target={"_blank"} href="https://facebook.com/sshivs1" ><img src={FaceBook} alt="fb"/></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
