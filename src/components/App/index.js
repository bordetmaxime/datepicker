// == Import

import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles.css';
import { MdSend } from 'react-icons/md';
import { GoCalendar } from 'react-icons/go';
import { FiUser } from 'react-icons/fi';
import { GiPartyPopper } from 'react-icons/gi';




// == Composant
const App = () => {
	const [startDate, setStartDate] = useState('');
	const[validate, setValidate] = useState(false)
	const [name, setName] = useState('')
	const [surname, setSurname] = useState('')
	const [telephone, setTelephone] = useState('')
	const [time, setTime] = useState()

	const changeValue = (event) => {
		const name = event.target.name;	
		const value = event.target.value;	

		
		switch (name) {
			case 'name':
				setName(value)
			  break;
			  case 'surname':
				setSurname(value)
			  break;
			  case 'telephone':
				setTelephone(value)
			  break;
	}
}

const formSubmit = (event) => {
	setValidate(true)
	event.preventDefault()
}

const changeTime = (event) => {
	setTime(event.target.value)

}




	return (
		<div className="app">
		
	 {validate ? <p className="textValidation"><GiPartyPopper/> {name} {surname} Vous avez rendez-vous le {startDate.toLocaleDateString("fr")} à {time}</p> : 
	 
	 <div>
	 <p className="textRdv">PRENDRE UN RENDEZ-VOUS <GoCalendar/></p>
	 <form onSubmit={formSubmit} className='formulaire'>
		 <div className="inputDiv">
		<div> <FiUser/></div>
		<input type="text" name="name" id="name" value={name} onChange={changeValue} placeholder='Name' required/>
		<input type="text" name="surname" id="lastName" value={surname} onChange={changeValue} placeholder='Surname'  required/>
		<input type="tel" name="telephone" id="number" value={telephone} onChange={changeValue}  placeholder='Telephone'  required/>
		</div>
		{startDate ? <div className="timeInput">
			<label for="appt">Choisissez une heure</label>
<input onChange={changeTime} type="time" id="appt" name="appt" min="09:00" max="18:00" required />
</div>

:

<Calendar locale='fr' id='datepicker' onChange={(date) => setStartDate(date)}  dateclassName="calendrier"/>}
	 <button type="submit" className="buttonSubmit"> <MdSend/></button>	 
	 </form>
	 
	 </div>
	 
	 
	 }
	 
		</div>
	);
};

// == Export
export default App;
