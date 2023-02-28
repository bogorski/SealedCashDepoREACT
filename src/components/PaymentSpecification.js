import React from "react";

function Col12(props) {
	return (
		<div className="row">
			<div className="col-12">
				<p>
					{props.name}&emsp;{props.value}{" "}
				</p>
			</div>
		</div>
	);
}

function Col4(props) {
	return (
		<div className="row">
			<div className="col-4">
				<p>
					{props.firstName}&emsp;{props.firstValue}{" "}
				</p>
			</div>
			<div className="col-4">
				<p>
					{props.secondName}&emsp;{props.secondValue}{" "}
				</p>
			</div>
			<div className="col-4">
				<p>
					{props.thirdName}&emsp;{props.thirdValue}{" "}
				</p>
			</div>
		</div>
	);
}

function TableRow({ firstColumn, secondColumn = "0", thirdColumn = "0.00" }) {
	return (
		<tr>
			<td>{firstColumn}</td>
			<td>{secondColumn}</td>
			<td>{thirdColumn}</td>
			<td>PLN</td>
		</tr>
	);
}
function TableRowHeader(props) {
	return (
		<tr>
			<th>{props.firstColumn}</th>
			<th>{props.secondColumn}</th>
			<th>{props.thirdColumn}</th>
			<th>{props.fourthColumn}</th>
		</tr>
	);
}
function Table(props) {
	return (
		<div className="tablePrint">
			<table>
				<thead>
					<TableRowHeader
						firstColumn="Nominał"
						secondColumn="Ilość sztuk"
						thirdColumn="Kwota"
						fourthColumn="Waluta"
					/>
				</thead>
				<tbody>
					<TableRow firstColumn="500,00" />
					<TableRow firstColumn="200,00" />
					<TableRow firstColumn="100,00" />
					<TableRow firstColumn="50,00" />
					<TableRow firstColumn="20,00" />
					<TableRow firstColumn="10,00" />
					<TableRow
						firstColumn="5,00"
						secondColumn={props.amountFives}
						thirdColumn={props.sumFives}
					/>
					<TableRow
						firstColumn="2,00"
						secondColumn={props.amountTwos}
						thirdColumn={props.sumTwos}
					/>
					<TableRow
						firstColumn="1,00"
						secondColumn={props.amountOnes}
						thirdColumn={props.sumOnes}
					/>
					<TableRow
						firstColumn="0,50"
						secondColumn={props.amountFifty}
						thirdColumn={props.sumFifty}
					/>
					<TableRow
						firstColumn="0,20"
						secondColumn={props.amountTwenty}
						thirdColumn={props.sumTwenty}
					/>
					<TableRow
						firstColumn="0,10"
						secondColumn={props.amountTens}
						thirdColumn={props.sumTens}
					/>
					<TableRow firstColumn="0,05" />
					<TableRow firstColumn="0,02" />
					<TableRow firstColumn="0,01" />
				</tbody>
				<tfoot>
					<TableRow
						firstColumn="Razem"
						secondColumn={props.totalAmount}
						thirdColumn={props.totalValue}
					/>
				</tfoot>
			</table>
		</div>
	);
}

function PaymentSpecification(props) {
	return (
		<div className="containerA4">
			<h2>Specyfikacja wpłaty zamkniętej </h2>
			<h4>DANE JEDNOSTKI ORGANIZACYJNEJ KLIENTA DOKONUJĄCEJ WPŁATY:</h4>
			<Col12 name="Nazwa klienta:" value={props.yourName} />
			<Col4
				firstName="Ulica:"
				firstValue={props.yourStreet}
				secondName="Nr domu:"
				secondValue={props.yourBuildingNr}
				thirdName="Nr lokalu:"
				thirdValue={props.yourApartmenNr}
			/>
			<Col4
				firstName="Kod pocztowy:"
				firstValue={props.yourZipCode}
				secondName="Miejscowość:"
				secondValue={props.yourCity}
			/>
			<h4>WPŁATA DOKONYWANA W ODDZIALE:</h4>
			<Col12 name="Miasto:" value={props.branchCity} />
			<Col12 name="Kwota wpłaty:" value={props.totalValue} />
			<Col12 name="Słownie:" value={props.AmountInWords} />

			<h4>SPECYFIKACJA WPŁATY:</h4>
			<Col12
				name="Dotyczy bezpiecznej koperty o nr:"
				value={props.sealNumber}
			/>
			<div>
				<Table
					amountFives={props.amountFives}
					sumFives={props.sumFives}
					amountTwos={props.amountTwos}
					sumTwos={props.sumTwos}
					amountOnes={props.amountOnes}
					sumOnes={props.sumOnes}
					amountFifty={props.amountFifty}
					sumFifty={props.sumFifty}
					amountTwenty={props.amountTwenty}
					sumTwenty={props.sumTwenty}
					amountTens={props.amountTens}
					sumTens={props.sumTens}
					totalAmount={props.totalAmount}
					totalValue={props.totalValue}
					AmountInWords={props.AmountInWords}
					sealNumber={props.sealNumber}
				/>
			</div>
		</div>
	);
}

export default PaymentSpecification;
