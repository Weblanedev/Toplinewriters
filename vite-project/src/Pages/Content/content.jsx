import "./content.css";
import ebony from "../../assets/ebony.jpg";

export default function Content() {
  return (
    <>
      <div className="contentBody">
        <div className="contentWrap">
          <div className="leftContent">
            <img src={ebony} alt="" />
          </div>
          <div className="rightContent">
            <div className="contentText">
              <h1>
                CONTENT THAT <h1 style={{color:"red"}}>WORKS</h1>
              </h1>

              <p>
                Whatever industry you’re in, you need expert writers who can
                engage your audience. We’ll find those writers for you.
              </p>
              <p>
                With our deep writer pool, our Content Success Specialists are
                able to build teams of highly specialized writers for any
                vertical. With a focus on writer retention for each client, we
                ensure consistency over the course of our relationship.
              </p>
              <p>
                Our areas of expertise include health and medical, legal,
                finance, automotive, eCommerce, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
