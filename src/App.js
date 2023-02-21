import "./App.css";
import CashDepositTable from "./components/InputTable";
import PaymentSpecification from "./components/PaymentSpecification.js";
import { TransferFormView } from "./components/TransferFormView";
import {
	YourDataTable,
	RecipientDataTable,
} from "./components/TransferFormData";
import React from "react";
import druk from "./images/druk.png";
import {
	convertValueNumberGroszy,
	convertValueWordGroszy,
} from "./components/convertNumbers";

/*function NameForm({ product, onFilterTextChange }) {
	return (
		<label>
			{product}
			<input
				type="text"
				value={product}
				onChange={(e) => onFilterTextChange(e.target.value)}
			/>
		</label>
	);
}*/
/*function CityBank(props){
	
	return
		name: "branchCity",
		visibleName: "miasto oddziału w którym dokonano wpłaty",
		value: props.branchCityValue,
	},
}*/
class NameForm extends React.Component {
	render() {
		return (
			<label>
				{this.props.label}
				<input
					type="text"
					value={this.props.value}
					onChange={(event) => this.props.onChange(event)}
				/>
			</label>
		);
	}
}
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			yourName: "",
			yourStreet: "",
			yourBuildingNr: "",
			yourApartmenNr: "",
			yourZipCode: "",
			yourCity: "",
			branchCity: "",
			recipientName: "",
			recipientStreet: "",
			recipientBuildingNr: "",
			recipientApartmenNr: "",
			recipientZipCode: "",
			recipientCity: "",
			recipientAccountNr: "",
			paymentTitle: "",
			sealNumber: "",
			amountFives: 0,
			amountTwos: 0,
			amountOnes: 0,
			amountFifty: 0,
			amountTwenty: 0,
			amountTens: 0,
			imgCanvas: "",
			pushBtn: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeData = this.handleChangeData.bind(this);
		this.handleInputSealNumber = this.handleInputSealNumber.bind(this);
		this.handleButtonPrint = this.handleButtonPrint.bind(this);
		this.handleButtonSave = this.handleButtonSave.bind(this);
		this.handleButtonLoad = this.handleButtonLoad.bind(this);
		this.handleInputName = this.handleInputName.bind(this);
	}

	componentDidMount() {
		if (this.state.pushBtn === true) {
			console.log("ok");
		}
	}
	componentDidUpdate() {
		if (this.state.pushBtn === true) {
			console.log("ok");
		}
	}
	handleChangeData(event) {
		const value = event.target.value;
		const name = event.target.name;
		this.setState({ [name]: value });
	}

	handleInputSealNumber(event) {
		this.setState({ sealNumber: event.target.value });
	}
	handleInputName(event) {
		this.setState({ name: event.target.value });
	}
	handleChange(event) {
		let value = 0;

		if (Number.isNaN(parseFloat(event.target.value))) {
			function setTimeSelect() {
				event.target.select();
			}
			setTimeout(setTimeSelect, 1);
			value = 0;
		} else if (/\D$/.test(event.target.value)) {
			value = this.state[event.target.name];
		} else {
			value = event.target.value;
		}
		const name = event.target.name;
		console.log(name, "name");
		this.setState({ [name]: value });
	}
	handleButtonSave() {
		const data = this.state;
		console.log(data);
		const data2 = {
			yourName: this.state.yourName,
			yourStreet: this.state.yourStreet,
			yourBuildingNr: this.state.yourBuildingNr,
		};
		localStorage.setItem("my-key", JSON.stringify(data));
		console.log("my-key");
	}
	handleButtonLoad() {
		const stringifiedPerson = localStorage.getItem("my-key");
		const personAsObjectAgain = JSON.parse(stringifiedPerson);
		console.log(personAsObjectAgain, "wczytanie");
		this.setState(personAsObjectAgain);
	}
	handleButtonPrint(event) {
		this.setState({ pushBtn: true });

		console.log(this.state.pushBtn);
		/*	const canvas = document.querySelector("canvas");
		if (canvas) {
			canvas.remove();
		}*/
		const sumFives = (parseFloat(this.state.amountFives) * 5).toFixed(2);
		const sumTwos = (parseFloat(this.state.amountTwos) * 2).toFixed(2);
		const sumOnes = (parseFloat(this.state.amountOnes) * 1).toFixed(2);
		const sumFifty = (
			Math.round(parseFloat(this.state.amountFifty) * 0.5 * 10) / 10
		).toFixed(2);
		const sumTwenty = (
			Math.round(parseFloat(this.state.amountTwenty) * 0.2 * 10) / 10
		).toFixed(2);
		const sumTens = (
			Math.round(parseFloat(this.state.amountTens) * 0.1 * 10) / 10
		).toFixed(2);

		const totalValue = (
			Math.round(
				(parseFloat(sumFives) +
					parseFloat(sumTwos) +
					parseFloat(sumOnes) +
					parseFloat(sumFifty) +
					parseFloat(sumTwenty) +
					parseFloat(sumTens)) *
					10
			) / 10
		).toFixed(2);
		const wordValue = convertValueNumberGroszy(totalValue);
		const sealNumber = this.state.sealNumber;
		const recipientAdressNr =
			this.state.recipientApartmenNr && " m. " + this.state.recipientApartmenNr;
		const recipientAdress =
			this.state.recipientStreet +
			" " +
			this.state.recipientBuildingNr +
			recipientAdressNr +
			", " +
			this.state.recipientZipCode +
			" " +
			this.state.recipientCity;

		const yourAdressNr =
			this.state.yourApartmenNr && " m. " + this.state.yourApartmenNr;
		const yourAdress =
			this.state.yourStreet +
			" " +
			this.state.yourBuildingNr +
			yourAdressNr +
			", " +
			this.state.yourZipCode +
			" " +
			this.state.yourCity;
		this.setState({
			imgCanvas: print(
				totalValue,
				wordValue,
				sealNumber,
				this.state.recipientName,
				recipientAdress,
				this.state.recipientAccountNr,
				this.state.yourName,
				yourAdress,
				this.state.paymentTitle
			),
		});
		//	window.print();
	}

	render() {
		const sumFives = (parseFloat(this.state.amountFives) * 5).toFixed(2);
		const sumTwos = (parseFloat(this.state.amountTwos) * 2).toFixed(2);
		const sumOnes = (parseFloat(this.state.amountOnes) * 1).toFixed(2);
		const sumFifty = (
			Math.round(parseFloat(this.state.amountFifty) * 0.5 * 10) / 10
		).toFixed(2);
		const sumTwenty = (
			Math.round(parseFloat(this.state.amountTwenty) * 0.2 * 10) / 10
		).toFixed(2);
		const sumTens = (
			Math.round(parseFloat(this.state.amountTens) * 0.1 * 10) / 10
		).toFixed(2);
		const totalAmount =
			parseFloat(this.state.amountFives) +
			parseFloat(this.state.amountTwos) +
			parseFloat(this.state.amountOnes) +
			parseFloat(this.state.amountFifty) +
			parseFloat(this.state.amountTwenty) +
			parseFloat(this.state.amountTens);
		console.log(totalAmount);
		const totalValue = (
			Math.round(
				(parseFloat(sumFives) +
					parseFloat(sumTwos) +
					parseFloat(sumOnes) +
					parseFloat(sumFifty) +
					parseFloat(sumTwenty) +
					parseFloat(sumTens)) *
					10
			) / 10
		).toFixed(2);
		const sumWeight = (
			Math.round(
				(parseFloat(this.state.amountFives) * 0.00654 +
					parseFloat(this.state.amountTwos) * 0.00521 +
					parseFloat(this.state.amountOnes) * 0.005 +
					parseFloat(this.state.amountFifty) * 0.00394 +
					parseFloat(this.state.amountTwenty) * 0.00322 +
					parseFloat(this.state.amountTens) * 0.00251) *
					100
			) / 100
		).toFixed(2);
		const overloaded =
			sumWeight >= 16 ? "Worek za ciężki" : "Worek ma odpowiednią wagę";

		return (
			<div>
				<div className="onlyScreen">
					<div className="screenView">
						<header className="App-header">Wpłaty zamknięte</header>
						<div className="Input-component ">
							<NameForm
								label="Numer plomby"
								value={this.state.sealNumber}
								onChange={this.handleInputSealNumber}
							/>
						</div>
						<CashDepositTable
							amountFives={this.state.amountFives}
							sumFives={sumFives}
							amountTwos={this.state.amountTwos}
							sumTwos={sumTwos}
							amountOnes={this.state.amountOnes}
							sumOnes={sumOnes}
							amountFifty={this.state.amountFifty}
							sumFifty={sumFifty}
							amountTwenty={this.state.amountTwenty}
							sumTwenty={sumTwenty}
							amountTens={this.state.amountTens}
							sumTens={sumTens}
							totalAmount={totalAmount}
							totalValue={totalValue}
							overloaded={overloaded}
							sumWeight={sumWeight}
							onChange={this.handleChange}
						/>
						<div className="divButton">
							<TransferFormView onClick={this.handleButtonPrint} />
							<button onClick={this.handleButtonSave}>Zapisz</button>
							<button onClick={this.handleButtonLoad}>Wczytaj</button>
						</div>
						<div>
							<ul>
								<YourDataTable
									onChange={this.handleChangeData}
									yourNameValue={this.state.yourName}
									yourStreetValue={this.state.yourStreet}
									yourBuildingNrValue={this.state.yourBuildingNr}
									yourApartmenNrValue={this.state.yourApartmenNr}
									yourZipCodeValue={this.state.yourZipCode}
									yourCityValue={this.state.yourCity}
									branchCityValue={this.state.branchCity}
								/>
							</ul>
							<ul>
								<RecipientDataTable
									onChange={this.handleChangeData}
									recipientNameValue={this.state.recipientName}
									recipientStreetValue={this.state.recipientStreet}
									recipientBuildingNrValue={this.state.recipientBuildingNr}
									recipientApartmenNrValue={this.state.recipientApartmenNr}
									recipientZipCodeValue={this.state.recipientZipCode}
									recipientCityValue={this.state.recipientCity}
									recipientAccountNrValue={this.state.recipientAccountNr}
									paymentTitleValue={this.state.paymentTitle}
								/>
							</ul>
						</div>
					</div>
				</div>

				<div className="containerA4 A4 sheet">
					<PaymentSpecification
						yourName={this.state.yourName}
						yourStreet={this.state.yourStreet}
						yourBuildingNr={this.state.yourBuildingNr}
						yourApartmenNr={this.state.yourApartmenNr}
						yourZipCode={this.state.yourZipCode}
						yourCity={this.state.yourCity}
						branchCity={this.state.branchCity}
						totalValue={totalValue}
						AmountInWords={convertValueWordGroszy(totalValue)}
						sealNumber={this.state.sealNumber}
						amountFives={this.state.amountFives}
						sumFives={sumFives}
						amountTwos={this.state.amountTwos}
						sumTwos={sumTwos}
						amountOnes={this.state.amountOnes}
						sumOnes={sumOnes}
						amountFifty={this.state.amountFifty}
						sumFifty={sumFifty}
						amountTwenty={this.state.amountTwenty}
						sumTwenty={sumTwenty}
						amountTens={this.state.amountTens}
						sumTens={sumTens}
						totalAmount={totalAmount}
					/>
				</div>

				<div className="containerA4 nextPage A4 sheet">
					<div className="myContainer">
						<div className="blankietCanvas">
							<img className="imgimg" alt="blankier"></img>
						</div>
						<div className="blankietCanvas">
							<img className="imgimg" alt="blankier"></img>
						</div>
					</div>
					<div className="myContainer">
						<div className="blankietCanvas">
							<img className="imgimg" alt="blankier"></img>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default App;

function print(
	totalValue,
	wordValue,
	sealNumber,
	recipentName,
	recipentAdress,
	accountNumber,
	yourName,
	yourAdress,
	title
) {
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d");
	canvas.height = 1253;
	canvas.width = 1772;
	const image = new Image();
	image.onload = canvasLoadAsync;
	function formField(text, x, y) {
		if (text.length <= 27) {
			text = text.toUpperCase();
			for (let i = 0; i < text.length; i++) {
				ctx.font = "bold 50px Courier";
				if (i === 0) {
					ctx.fillText(text[i], x, y);
				} else {
					ctx.fillText(text[i], x + 59 * i, y);
				}
			}
		} else {
			for (let i = 0; i < text.length; i++) {
				ctx.font = "bold 50px Courier";
				ctx.fillText(text, x, y);
			}
		}
	}
	function canvasLoad() {
		ctx.drawImage(image, 0, 0);
		formField(recipentName, 110, 100);
		formField(recipentAdress, 110, 200);
		formField(accountNumber, 110, 300);
		const sum = totalValue.toString();
		formField(sum, 1003, 400);
		formField(wordValue, 110, 500);
		formField(yourName, 110, 600);
		formField(yourAdress, 110, 700);
		formField(title, 110, 800);
		const secureEnvelope = "BEZPIECZNA KOPERTA O NR. " + sealNumber;
		formField(secureEnvelope, 110, 900);
		/*const now = new Date();
			"UTARG WARSZAWA " +
			(now.getDate() < 10 ? "0" + now.getDate() : now.getDate()) +
			"." +
			(now.getMonth() < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1) +
			//(now.getMonth() + 1) +
			"." +
			now.getFullYear();
      */
		const url = canvas.toDataURL("image/jpeg", 0.5);
		const img = document.querySelectorAll(".imgimg");
		img.forEach(function (img) {
			img.src = url;
		});
		console.log("imge wczytany 1111");
		console.log("imge wczytany 222");
	}
	image.src = druk;
	async function canvasLoadAsync() {
		await canvasLoad();
		await printCanvas();
	}
}

function printCanvas() {
	console.log("print 111");
	window.print();
	console.log("print 222");
}
