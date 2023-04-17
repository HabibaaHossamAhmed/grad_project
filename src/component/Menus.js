import React from 'react'
import  ReactDOM  from "react-dom";
import '../css/style.css'
import '../css/titleforms.css'
import '../css/menuStyle.css'
import { Link } from 'react-router-dom';
const Menus = () => {
  return (
    <div>
<div className='menuWrapper' id='menuWrapper'>
 <div className='titleWrapper d-flex' id='titleWrapper'>
 <div className='menuText' id='menuText'>
    Main Menu
 </div>
 </div>
<div className='menuContainer d-flex'>
<div className='dataWrapper heightofforms'>
<fieldset className='menuSection' id='menuSection'>
 <legend>Main Data</legend>
   <div className='mainDataWrapper' id='mainDataWrapper'>
<div className="wrapperbuttons d-flex">
<div className="btn d-flex">
Data of Ship Types
</div>
</div>
<div className="wrapperbuttons d-flex">
<div className="btn d-flex">
Data of Countries
</div>
  </div>
  <div className="wrapperbuttons d-flex">
  <div className="btn d-flex">
  Data of Agents
  </div>
</div>
<div className="wrapperbuttons d-flex">
<div className="btn d-flex">
Data of Ports
</div>
  </div>
  <div className="wrapperbuttons d-flex">
  <div className="btn d-flex">
  Main Data of ships
  </div>
</div>
   </div>
 </fieldset>
</div>
<div className='shipMovWrapper heightofforms'>
<fieldset className='menuSection' id='menuSection'>
 <legend>Ship Movement Data</legend>
   <div className='mainDataWrapper' id='shipWrapper'>

   <div className="wrapperbuttons d-flex">
   <div className="btn d-flex">
   <Link to="/menu/Data_of_Arriving_ships">Data of Arriving ships </Link>
  </div>

</div>
  <div className="wrapperbuttons d-flex">
  <div className="btn d-flex">
  Data of departing ships
  </div>
</div>

   </div>
 </fieldset>
</div>
<div className='reportsWrapper heightofforms'>
<fieldset className='menuSection' id='menuSection'>
 <legend>Reports</legend>
   <div className='mainDataWrapper' id='reportWrapper'>
   <div className="wrapperbuttons d-flex">
  <div className="btn btnrep d-flex">
  Main Data of Ships Report
  </div>
</div>
<div className="btnrepWrapper d-flex">
  <div className="btnrepContainer">
  <div className="btnreprtReal  d-flex">
    <div className="restrepBtns d-flex">
    Data of Ship Types Report
    </div>
     <div className="restrepBtns d-flex">
     Ship Departing Report
    </div>
    </div>

    <div className="btnreprtReal  d-flex">
    <div className="restrepBtns d-flex">
    Data of Countries Report
    </div>
     <div className="restrepBtns d-flex">
     Ships Arriving Report For a Period
    </div>
    </div>

    <div className="btnreprtReal  d-flex">
    <div className="restrepBtns d-flex">
    Data of Ports Report
    </div>
     <div className="restrepBtns d-flex">
     Ships Departing Report For a Period
    </div>
    </div>

    <div className="btnreprtReal  d-flex">
    <div className="restrepBtns d-flex">
    Data of Agents Report
    </div>
     <div className="restrepBtns d-flex">
     Ship frequentation to the port for a period Report (Arrival)
    </div>
    </div>
    <div className="btnreprtReal  d-flex">
    <div className="restrepBtns d-flex">
    Ship Arriving Report
    </div>
     <div className="restrepBtns d-flex">
     Ship frequentation to the port for a period Report (Departure)
    </div>
    </div>

  </div>



</div>
   </div>
 </fieldset>
</div>
</div>
</div>
    </div>
  )
}

export default Menus
