import Navbar from "./navbar";
import "./personalinfo.css";

function Personal() {
  return (
    <div className="shiva">
      <div className="container4">
        <Navbar />
        <h2>PERSONAL INFORMATION</h2>
        <div className="boxee">
          <div>
            <p className="detailll">Name: Chinnipallli Shiva</p>
            <p className="detailll">Father Name: Ch Nagireddy</p>
            <p className="detailll">Mother Name: Ch Varalakshmi</p>
            <p className="detailll">D.O.B : 26-08-2000</p>
            <p className="detailll">Gender : Male</p>
            <p className="detailll">Religion : Hindu</p>
          </div>
          <div>
            <p className="detailll">Nationality : Indian</p>
            <p className="detailll">Phone No : +91 8096156264</p>
            <p className="detailll gmail">
              G-Mail: Chinnipalllishiva26@gmail.com
            </p>
            <p className="address">
              Address :{" "}
              <address>
                Door No.71-31-54, Asrr Colony , Malkapuram , Visakhapatnam -
                530011
              </address>
            </p>
          </div>
        </div>
        <div className="HandL">
          <div className="hobbies HL">
            <h3>HOBBIES</h3>
            <p>Cooking</p>
            <p>Wacthing Movies</p>
            <p>Playing Gamaes</p>
          </div>
          <div className="languages HL">
            <h3>LANGUAGES</h3>
            <p>Telugu</p>
            <p>English</p>
            <p>Hindi (Basic)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
