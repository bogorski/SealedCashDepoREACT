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
			dataEntered: {
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
			},
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
		this.handleSaveToXml = this.handleSaveToXml.bind(this);
		this.handleLoadXml = this.handleLoadXml.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeData = this.handleChangeData.bind(this);
		this.handleInputSealNumber = this.handleInputSealNumber.bind(this);
		this.handleButtonPrint = this.handleButtonPrint.bind(this);
		this.handleButtonSave = this.handleButtonSave.bind(this);
		this.handleButtonLoad = this.handleButtonLoad.bind(this);
		this.handleInputName = this.handleInputName.bind(this);
	}

	handleSaveToXml() {
		const filename =
			"Dane użytkownika " + this.state.dataEntered.yourName + ".xml";
		const data = this.state.dataEntered;
		let xmltext = '<?xml version="1.0" encoding="UTF-8"?><DATA>';
		for (const [key, value] of Object.entries(data)) {
			xmltext +=
				" <" +
				key.toUpperCase() +
				">" +
				value +
				"</" +
				key.toUpperCase() +
				"> ";
		}
		xmltext += "</DATA>";
		const a = document.createElement("a");
		a.setAttribute("download", filename);
		const blow = new Blob([xmltext], { type: "text/xml" });
		a.href = window.URL.createObjectURL(blow);
		a.click();
	}

	handleLoadXml(event) {
		const file = event.target.files[0];
		if (!file) {
			return;
		}
		const reader = new FileReader();
		reader.readAsText(file);
		reader.onloadend = (evt) => {
			const readerData = evt.target.result;
			const parser = new DOMParser();
			const xml = parser.parseFromString(readerData, "text/xml");
			const data = this.state.dataEntered;
			for (const [key] of Object.entries(data)) {
				let upperCaseKey = key.toUpperCase();
				let loadValue = xml
					.evaluate(`//${upperCaseKey}`, xml)
					.iterateNext().textContent;
				this.setState((prevState) => ({
					dataEntered: { ...prevState.dataEntered, [key]: loadValue },
				}));
			}
		};
	}
	handleChangeData(event) {
		const value = event.target.value;
		const name = event.target.name;
		this.setState((prevState) => ({
			dataEntered: { ...prevState.dataEntered, [name]: value },
		}));
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
			this.state.dataEntered.recipientApartmenNr &&
			" m. " + this.state.dataEntered.recipientApartmenNr;
		const recipientAdress =
			this.state.dataEntered.recipientStreet +
			" " +
			this.state.dataEntered.recipientBuildingNr +
			recipientAdressNr +
			", " +
			this.state.dataEntered.recipientZipCode +
			" " +
			this.state.dataEntered.recipientCity;

		const yourAdressNr =
			this.state.dataEntered.yourApartmenNr &&
			" m. " + this.state.dataEntered.yourApartmenNr;
		const yourAdress =
			this.state.dataEntered.yourStreet +
			" " +
			this.state.dataEntered.yourBuildingNr +
			yourAdressNr +
			", " +
			this.state.dataEntered.yourZipCode +
			" " +
			this.state.dataEntered.yourCity;
		print(
			totalValue,
			wordValue,
			sealNumber,
			this.state.dataEntered.recipientName,
			recipientAdress,
			this.state.dataEntered.recipientAccountNr,
			this.state.dataEntered.yourName,
			yourAdress,
			this.state.dataEntered.paymentTitle
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
							yourNameValue={this.state.dataEntered.yourName}
							yourStreetValue={this.state.dataEntered.yourStreet}
							yourBuildingNrValue={this.state.dataEntered.yourBuildingNr}
							yourApartmenNrValue={this.state.dataEntered.yourApartmenNr}
							yourZipCodeValue={this.state.dataEntered.yourZipCode}
							yourCityValue={this.state.dataEntered.yourCity}
							branchCityValue={this.state.dataEntered.branchCity}
						/>
						<RecipientDataTable
							onChange={this.handleChangeData}
							recipientNameValue={this.state.dataEntered.recipientName}
							recipientStreetValue={this.state.dataEntered.recipientStreet}
							recipientBuildingNrValue={
								this.state.dataEntered.recipientBuildingNr
							}
							recipientApartmenNrValue={
								this.state.dataEntered.recipientApartmenNr
							}
							recipientZipCodeValue={this.state.dataEntered.recipientZipCode}
							recipientCityValue={this.state.dataEntered.recipientCity}
							recipientAccountNrValue={
								this.state.dataEntered.recipientAccountNr
							}
							paymentTitleValue={this.state.dataEntered.paymentTitle}
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
						<div className="divTwoButtons" style={{ textAlign: "center" }}>
							<button onClick={this.handleSaveToXml}>Zapisz jako xml</button>
							<label className="loadFileButton">
								Wczytaj plik xml
								<input
									type="file"
									className="loadFile"
									onChange={this.handleLoadXml}
								/>
							</label>
						</div>
					</div>
				</div>

				<div className="containerA4 A4 sheet">
					<PaymentSpecification
						yourName={this.state.dataEntered.yourName}
						yourStreet={this.state.dataEntered.yourStreet}
						yourBuildingNr={this.state.dataEntered.yourBuildingNr}
						yourApartmenNr={this.state.dataEntered.yourApartmenNr}
						yourZipCode={this.state.dataEntered.yourZipCode}
						yourCity={this.state.dataEntered.yourCity}
						branchCity={this.state.dataEntered.branchCity}
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
