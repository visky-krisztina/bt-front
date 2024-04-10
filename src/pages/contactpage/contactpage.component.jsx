import React, { useState } from "react";
import Axios from "axios";
import "./contactpage.styles.scss";
import terkep from "../../assets/terkep.jpg";
import lelkeszek from "../../data/lelkeszData";
import MemberCard from "../../components/teamCard/memberCard";
import TitleH1 from "../../components/title_h1/titleH1.component";

function ContactPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [userList, setUserList] = useState([]);
	const [loginStatus, setLoginStatus] = useState(0);

	const getAdmin = () => {
		Axios.post("http://localhost:3001/contact", {
			email: email,
			password: password,
		}).then((response) => {
			setUserList(response.data);
			setLoginStatus(1);
		});
	};

	return (
		<div className='contactContainer'>
			<div className='addressContainer'>
				<div className='centerTitle'>
					<TitleH1 title='Lelkészeink elérhetőségei:' />
					<div className='underline'></div>
				</div>
				<div className='lelkeszek'>
					{lelkeszek.map((person, index) => {
						return (
							<div className='memberContainer'>
								<MemberCard key={index} person={person} contactPage='contactPage' />
							</div>
						);
					})}
				</div>
				<div className='otherContactDetails'>
					<p className='bold'>BANKI ADATOK</p>
					<p>PAROHIA REFORMATA NR IX CLUJ</p>
					<p>str. Arad nr. 10, Cluj-Napoca</p>
					<p>BANCA TRANSILVANIA</p>
					<p>IBAN:RO74BTRL01301205951455XX</p>
					<p>CF: 4349144</p>
					<p>
						Arra kérjük, hogy az utalás céljánál (Scopul platii vagy Detalii) tüntessék fel a cél megnevezésén
						(egyházfenntartói járulék, adomány, szeretetszolgállati adomány, stb.) túl azt is, hogy kinek vagy kiknek a
						nevében történik a befizetés.
					</p>
				</div>
				<div className='address-info'>
					<h1 className='a-title'>LÁTOGASSON EL HOZZÁNK !</h1>
					<h2>Bulgáriatelepi Református Gyülekezet</h2>
					<div className='address'>
						<div>
							<p>400628 Kolozsvár - Cluj Napoca</p>
							<p>Arad út 8-10 szám</p>
							<p>tel: 0264 - 415 756</p>
						</div>
						<img src={terkep} alt='map of church' />
					</div>
					<div id='megkozelites'>
						<h3>Megközelítés:</h3>
						<p>Templomunkat a város központjából a 36B,36L 50, 50L, 52 és 52L buszokkal lehet megközelíteni.</p>
						<p>A Marasti-tér felől gyalog 15-20 perc alatt lehet elérni.</p>
					</div>
					<p></p>
				</div>

				<div></div>
			</div>
		</div>
	);
}

export default ContactPage;
