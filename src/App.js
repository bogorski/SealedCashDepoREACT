import "./App.css";
import CashDepositTable from "./components/InputTable";
import "./components/InputTable.css";
import PaymentSpecification from "./components/PaymentSpecification";
import "./components/PaymentSpecification.css";
import {
	YourDataTable,
	RecipientDataTable,
} from "./components/TransferFormData";
import "./components/TransferFormData.css";
import TransferFormImage from "./components/TransferFormImage";
import "./components/TransferFormImage.css";
import React from "react";
import {
	convertValueNumberGroszy,
	convertValueWordGroszy,
} from "./components/convertNumbers";
import InputLabel from "./components/InputLabel";
import "./components/InputLabel.css";
import DivButtons from "./components/Buttons";
import "./components/Buttons.css";
import print from "./components/print";

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
			overloaded: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeData = this.handleChangeData.bind(this);
		this.handleInputSealNumber = this.handleInputSealNumber.bind(this);
		this.handleButtonPrint = this.handleButtonPrint.bind(this);
		this.handleButtonSave = this.handleButtonSave.bind(this);
		this.handleButtonLoad = this.handleButtonLoad.bind(this);
		this.handleInputName = this.handleInputName.bind(this);
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
		this.setState({ [name]: value });
	}
	handleButtonSave() {
		const data = this.state;
		localStorage.setItem("my-key", JSON.stringify(data));
	}
	handleButtonLoad() {
		const stringifiedPerson = localStorage.getItem("my-key");
		const personAsObjectAgain = JSON.parse(stringifiedPerson);
		this.setState(personAsObjectAgain);
	}
	handleButtonPrint() {
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
		print(
			totalValue,
			wordValue,
			sealNumber,
			this.state.recipientName,
			recipientAdress,
			this.state.recipientAccountNr,
			this.state.yourName,
			yourAdress,
			this.state.paymentTitle
		);
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
		const disableBtn = sumWeight >= 16 ? true : false;
		const tooltip = sumWeight >= 16 ? "tooltip" : "";
		return (
			<div>
				<div className="onlyScreen">
					<div className="screenView">
						<div className="header">
							<h1>Wpłaty zamknięte</h1>
							<InputLabel
								for="seal"
								id="seal"
								label="Numer plomby"
								placeholder="Numer plomby"
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
							overloadedAlert={sumWeight}
							sumWeight={sumWeight}
							onChange={this.handleChange}
						/>

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
						<DivButtons
							disabled={disableBtn}
							tooltipClass={tooltip}
							onClickDisable={this.handleButtonPrint}
							buttonDisableName="Drukuj"
							tooltipText="Worek za ciężki"
							onClickMiddle={this.handleButtonSave}
							buttonMiddleName="Zapisz"
							onClickRight={this.handleButtonLoad}
							buttonRightName="Wczytaj"
						/>
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

				<TransferFormImage />
			</div>
		);
	}
}
export default App;
