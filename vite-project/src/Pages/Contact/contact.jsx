import "./contact.css";
import ebony from "../../assets/ebony.jpg";

export default function () {
  return (
    <>
      <div className="contact">
        <div className="contactWrap">
          <GetInTouch />
        </div>
      </div>
    </>
  );
}

function GetInTouch() {
  return (
    <>
      <div className="getIn">
        <div className="touch">
          <h1>
            Get In <h1 style={{ color: "red" }}>Touch</h1>
          </h1>
        </div>
        <div className="getCard">
          <Reviewcard
            text="5th flora, 700/D kings road, 
            greenlane New York"
            ptext="Visit Us "
            image={ebony}
          />
          <Reviewcard
            text="+ 1782+10 367 826 2567 "
            ptext="Contact Us"
            image={ebony}
          />
          <Reviewcard
            text="contact@carpenter.com"
            // text=" Webyourinfo@gmail.com"        
            ptext="Email Us  "
            image={ebony}
          />
        </div>
      </div>
    </>
  );
}

const Reviewcard = ({ text, ptext, image }) => {
  return (
    <div className="revCard">
      <div className="reviewcirlce">
        <img src={image} alt="" />
      </div>
      <div className="reviewcardwrap">
        <p>{ptext}</p>
        <div className="reviewdown">
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};
