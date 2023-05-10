
import Navbar from "./navbar";
import "./projects.css";

function Projects() {
  return (
    <div className="shiva">
      <div className="container3">
        <Navbar />
        
          <div className="projects">
            <h3> &#x272c; Projects &#x272c;</h3>
            <div className="parent">
              <div className="child c1">
                <div className="side">
                  <h2>PortFolio</h2>
                  <p><span className="span">Skills Used : </span>Html,Css,JavaScript,React Js</p>
                  <p>
                    <span className="span">Description :</span> Designed a portfolio webpage that contains
                    full information about me and my studies ,skills etc.,.
                  </p>
                </div>
              </div>
              <div className="child c2">
                <div className="side">
                  <h2> Calc & To-Do List</h2>
                  <p><span className="span">Skills Used : </span> Html,Css,JavaScript,React Js</p>
                  <p>
                  <span className="span">Description :</span> Designed a Calculator and a To-Do List website using react.
                  </p>
                  <p><spna className="span">Calculator :</spna> It performs the basic calculations like addition , subtracion, multiplication and division.</p>
                  <p><spna className="span">To-Do List :</spna> It is used to add some tasks that we want to do in future. It behaves as a remainder for us.</p>
                </div>
              </div>

              <div className="child c3">
                <div className="side">
                  <h2> Form Validation</h2>
                  <p><span className="span">Skills Used : </span> Html,Css,JavaScript,BootStrap</p>
                  <p>
                  <span className="span">Description :</span> Designed a webpage that takes input from the user and checks the conditions that we have assigned, If the conditions satisfies then it takes the values else it throws an error.
                  </p>
                </div>      
              </div>
            </div>
          <div className="certification">
            <h3>&#x272c; Certificates Earned &#x272c;</h3>
            <p>MICROSOFT MTA Certification for Python</p>
            <p>
              Participated in Workshop on Pyhton conducted by Ignited Minds{" "}
            </p>
          </div>
        </div>
      </div>
      </div>
      
  )
  }

export default Projects;
