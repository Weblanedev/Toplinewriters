import "./Hero.css"
import guywithcap from "../../../public/guywithcap.jpg"

import Content from "../../Pages/Content/content"
const Heropage = ()=>{
  return(
    <>
    <div className="QualityContentScale">
        <div className="QualityContentScaleWrap">
          <div className="Textdiv">
            <div className="Textdivwrap">
              <h1 className="animate-charcter">Quality Content <br /> at Scale.</h1>
              <h2>Access content writing services from a network of <br /> specialized, professional writers.</h2>
              <button className="HirebtnNow">Hire A Writter Now</button>
            </div>
          </div>
          <div className="RightImageGuy">
           <div className="RightImageGuywrap">
           <img src={guywithcap} alt="" />
           </div>
          </div>
        </div>
    </div>
    <Content/>
    </>
  )
}
export default Heropage