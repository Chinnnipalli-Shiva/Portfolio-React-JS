import "./education.css";
import Navbar from "./navbar";

function Education() {
  return (
    <div className="shiva">
      <div className="container2">
        <Navbar />
        <div className="Studies">
          <div className="education">
            <div className="year y1" id="g1">
              <h2>B.tech (Mechanical)</h2>
              <p>~RGUKT(IIIT), NUZVID</p>
              <p>2019-2023</p>
              <h4>CGPA:8.5</h4>
              <p>
                I'm pursuing B.tech 4th year in the stream of mechanical and I'm
                also learning web development technologies to become web developer.
              </p>
            </div>
            <div className="year y2" id="g2">
              <h2>Pre University Course</h2>
              <p>~RGUKT(IIIT), NUZVID</p>
              <p>2017-2019</p>
              <h4>CGPA:8.0</h4>
              <p>
                I completed my Pre University Course in the stream of MPC (MATHS
                PHYSICS CHEMISTRY) and I learned basic technical skills.
              </p>
            </div>
            <div className="year y3" id="g3">
              <h2>
                SSC 10<sup>th</sup>
              </h2>
              <p>~GVMC High School, Malkapuram</p>
              <p>2016-2017</p>
              <h4>CGPA:9.8</h4>
              <p className="description">
                In School I learned leadership qualities and Communicaion skills which helped me a lot.
                
              </p>
            </div>
          </div>
          <div className="skills">
            <h2>SKILLS</h2>
            <ul>
              <li>React Js</li>
              <li>Java Script</li>
              <li>Python</li>
              <li>Css</li>
              <li>Html</li>
              <li>BootStrap</li>
              <li>Solid Works</li>
              <li>PhotoShop</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Education;
