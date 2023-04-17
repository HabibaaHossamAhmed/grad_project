import React from 'react'
import  ReactDOM  from "react-dom";
import '../css/style.css'
import '../css/titleforms.css'
import '../css/data_of_Arriving.css';
const Data_of_Arriving_ships = () => {
  return (
    <div>
<div className='menuWrapper' id='menuWrapperofarrship'>
 <div className='titleWrapper d-flex' id='titleWrapperofarrship'>
 <div className='menuText' id='menuTextofarrship'>
 Data of Arriving ships
 </div>
 </div>
<div className="data_Arrival_Wrapper d-flex">
<div className="dataContainer">
<form action="" className='formHeight'>
<div className="formContaier">
<div className="labelontainer">
<div className="labelMain">
Voyage Number
</div>
</div>
<div className="inputContainer">
<div className="inputWrapper">
<select name="Voyage_Number" id='Voyage_Number'>
  <option value=""></option>
</select>
</div>
</div>
</div>


<div className="formContaier">
<div className="labelontainer">
<div className="labelMain">
IMO
</div>
</div>
<div className="inputContainer">
<div className="inputWrapper">
<select name="imo_Number" id='imo_Number'>
  <option value=""></option>
</select>
</div>
</div>

</div>



<div className="formContaier">
<div className="labelontainer">
<div className="labelMain">
Expected date of Arrival
</div>
</div>
<div className="inputContainer">
<div className="inputWrapper">
<input type="text" id='expected_Date_Arrival' />
</div>
</div>

</div>


<div className="formContaier">
<div className="labelontainer">
<div className="labelMain">
Actual date of Arrival
</div>
</div>
<div className="inputContainer">
<div className="inputWrapper">
<input type="text" id='Actual_date_of_Arrival' />

</div>
</div>

</div>



<div className="formContaier">
<div className="labelontainer">
<div className="labelMain">
Mooring Date
</div>
</div>
<div className="inputContainer">
<div className="inputWrapper">
<input type="text" id='Mooring_Date' />
</div>
</div>
<div className="arrivalBerthWrapper">
<div className="berthLabel">
Arrival Berth
</div>
<div className="berthWrapperinput">
<input type="text" id='Arrival_Birth' />
</div>


</div>
</div>



<div className="formContaier">
<div className="labelontainer">
<div className="labelMain">
Ship’s Cargo upon Arrival
</div>
</div>
<div className="inputContainer">
<div className="inputWrapper">
<input type="text" id='Cargo_upon_Arrival' />
</div>
</div>

</div>


<div className="formContaier">
<div className="labelontainer">
<div className="labelMain">
Operation Type
</div>
</div>
<div className="inputContainer">
<div className="inputWrapper">
<select name="Operation_Type" id='Operation_Type'>
  <option value=""></option>
</select>
</div>
</div>

</div>


<div className="formContaier">
<div className="labelontainer">
<div className="labelMain">
port coming from
</div>
</div>
<div className="inputContainer">
<div className="inputWrapper">
<select name="port_coming_from" id='port_coming_from'>
  <option value=""></option>
</select>
</div>
</div>

</div>



<div className="formContaier">
<div className="labelontainer">
<div className="labelMain">
ship Agent
</div>
</div>
<div className="inputContainer">
<div className="inputWrapper">
<select name="ship_Agent" id='ship_Agent'>
  <option value=""></option>
</select>
</div>
</div>

</div>


<div className="formContaier notesArea">
<div className="labelontainer">
<div className="labelMain">
Notes
</div>
</div>
<div className="inputContainer">
<div className="inputWrapper">
<textarea id='Notes'>

</textarea>
</div>
</div>

</div>



</form>

</div>
</div>
 </div>
    </div>
  )
}

export default Data_of_Arriving_ships
