import React from "react";
import  ReactDOM  from "react-dom";
import '../css/style.css'
import NavBar from "./NavBar";
import '../css/heroStyle.css'
const HeroStart =()=>{
    return(
        <div>
            <div className="heroConatiner">
            <NavBar/>
            <div className="TextMain" id="TextMain">
            <div className="titleMain">
            Lorem Ipsum is simply dummy
            </div>
            <div className="desMain" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            <div className="buttonMain d-flex">
                <div className="startedWrapper buttonSize d-flex">GET STARTED</div>
                <div className="learnWrapper buttonSize d-flex"> LEARN MORE</div>
            </div>
            </div>
            </div>
            <div className="secSection">
            <div className="AboutPort d-flex">
            Port Authority System
            </div>
            <div className="AboutWrapper d-flex">
            <div className=" d-flex AboutSize ">
            <div className="AboutImagewrapper ">
            </div>
            </div>
            <div className="AboutSize typeAbout">
            <div className="AboutDescWrapper ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Diam sit amet nisl suscipit adipiscing bibendum. Id cursus metus aliquam eleifend mi in nulla posuere. Aliquam faucibus purus in massa tempor nec. Mauris ultrices eros in cursus turpis massa tincidunt dui. Morbi enim nunc faucibus a pellentesque sit. Consequat interdum varius sit amet mattis vulputate. Integer quis auctor elit sed vulputate mi. Platea dictumst quisque sagittis purus sit amet volutpat. Lacus sed viverra tellus in hac. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Vitae suscipit tellus mauris a diam maecenas sed enim ut.
            Et egestas quis ipsum suspendisse ultrices. Elit sed vulputate mi sit amet mauris commodo.
            </div>
            </div>
            </div>
            </div>
            <div className="ServicesSection">
            <div className="titleSpace "></div>
            <div className="titleServices d-flex">
            Our SERVICES
            </div>
            <div className="ServicesWrapper d-flex">
            <div className="ServiesParent ">
                <div className="ServciesBorder d-flex">
                <div className="ServiceMain">

                </div>
                </div>
                <div className="ServciesBorder d-flex">
                <div className="ServiceMain">

</div>
                </div>
                <div className="ServciesBorder d-flex">
                <div className="ServiceMain">

</div>
                </div>
                <div className="ServciesBorder d-flex">
                <div className="ServiceMain">

</div>
                </div>
                <div className="ServciesBorder d-flex">
                <div className="ServiceMain">

</div>
                </div>
                <div className="ServciesBorder d-flex">
                <div className="ServiceMain">

</div>
                </div>
            </div>
            </div>
            <div className="titleSpace "></div>
            </div>

            <div className="recentInfo">
            <div className="titleInfo" id="titleInfo">
            <div className="titleRecentWrapper">
                <span className="recentTitle" id="recentTitle">
                Recent Information
                </span>
                <span className="recentArdep" id="recentArdep">
                Arriving and Departing data that is updated day by day
                </span>
                </div>
            </div>
            <div className="recentWrapperphoto d-flex" id="recentWrapperphoto">
            <div className="recentWrapper d-flex">
            <div className="arrivingSection halfwidth d-flex" id="arrivingSection">
            <div className="arrivingWrapper recentCovers" id="arrivingWrapper">
            <div className="recentImagesCover d-flex">

            <div className="borderinfo">
                <div className="arriving_Photo" id="arriving_Photo">

                </div>
            </div>
            </div>
            <div className="recentdesc d-flex">
            Arriving Ships

            </div>


            </div>



            </div>
            <div className="departingSection halfwidth d-flex" id="departingSection">
            <div className="departingWrapper recentCovers" id="departingWrapper">
            <div className="recentImagesCover d-flex">
            <div className="borderinfo">
            <div className="departing_Photo" id="departing_Photo">

</div>
</div>
            </div>
            <div className="recentdesc d-flex">
            Departing Ships
</div>


</div>
            </div>
            </div>
            </div>

            </div>

        </div>

    )
}
ReactDOM.render(<HeroStart/>, document.getElementById('root'))
export default HeroStart;