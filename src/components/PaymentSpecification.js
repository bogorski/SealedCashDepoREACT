import React from "react";

function Header(props) {
	return (
		<div>
			<p className="header">{props.text}</p>
		</div>
	);
}

function Paragraph(props) {
	return (
		<div>
			<p className="paragraph">{props.text}</p>
		</div>
	);
}

function TableRow(props) {
	return (
		<tr>
			<td>{props.firstColumn}</td>
			<td>{props.secondColumn}</td>
			<td>{props.thirdColumn}</td>
			<td>{props.fourthColumn}</td>
		</tr>
	);
}

function Table(props) {
	return (
		<div className="tableStyle">
			<table>
				<thead>
					<TableRow
						firstColumn="Nominał"
						secondColumn="Ilość sztuk"
						thirdColumn="Kwota"
						fourthColumn="Waluta"
					/>
				</thead>
				<tbody>
					<TableRow
						firstColumn="500,00"
						secondColumn="0"
						thirdColumn="0,00"
						fourthColumn="PLN"
					/>
					<TableRow
						firstColumn="200,00"
						secondColumn="0"
						thirdColumn="0,00"
						fourthColumn="PLN"
					/>
					<TableRow
						firstColumn="100,00"
						secondColumn="0"
						thirdColumn="0,00"
						fourthColumn="PLN"
					/>
					<TableRow
						firstColumn="50,00"
						secondColumn="0"
						thirdColumn="0,00"
						fourthColumn="PLN"
					/>
					<TableRow
						firstColumn="20,00"
						secondColumn="0"
						thirdColumn="0,00"
						fourthColumn="PLN"
					/>
					<TableRow
						firstColumn="10,00"
						secondColumn="0"
						thirdColumn="0,00"
						fourthColumn="PLN"
					/>
					<TableRow
						firstColumn="5,00"
						secondColumn={props.amountFives}
						thirdColumn={props.sumFives}
						fourthColumn="PLN"
					/>
					<TableRow
						firstColumn="2,00"
						secondColumn={props.amountTwos}
						thirdColumn={props.sumTwos}
						fourthColumn="PLN"
					/>
					<TableRow
						firstColumn="1,00"
						secondColumn={props.amountOnes}
						thirdColumn={props.sumOnes}
						fourthColumn="PLN"
					/>
					<TableRow
						firstColumn="0,50"
						secondColumn={props.amountFifty}
						thirdColumn={props.sumFifty}
						fourthColumn="PLN"
					/>
					<TableRow
						firstColumn="0,20"
						secondColumn={props.amountTwenty}
						thirdColumn={props.sumTwenty}
						fourthColumn="PLN"
					/>
					<TableRow
						firstColumn="0,10"
						secondColumn={props.amountTens}
						thirdColumn={props.sumTens}
						fourthColumn="PLN"
					/>
				</tbody>
				<tfoot>
					<TableRow
						firstColumn="Razem"
						secondColumn={props.totalAmount}
						thirdColumn={props.totalValue}
						fourthColumn="PLN"
					/>
				</tfoot>
			</table>
		</div>
	);
}

function PaymentSpecification(props) {
	return (
		<div className="containerA4">
			<Header text="Specyfikacja wpłaty zamkniętej" />
			<Paragraph text="DANE JEDNOSTKI ORGANIZACYJNEJ KLIENTA DOKONUJĄCEJ WPŁATY:" />
			<div className="row">
				<Paragraph text="Nazwa klienta:" />
				<Paragraph text="Robert S" />
			</div>
			<div className="row">
				<Paragraph text="Ulica:" />
				<Paragraph text="al. Katowicka 66" />
			</div>
			<div className="row">
				<Paragraph text="Kod pocztowy:" />
				<Paragraph text="05-830" />
				<Paragraph text="Miejscowość:" />
				<Paragraph text="Nadarzyn" />
			</div>
			<Paragraph text="WPŁATA DOKONYWANA W ODDZIALE:" />
			<div className="row">
				<Paragraph text="Miasto:" />
				<Paragraph text="Warszawa" />
			</div>
			<div className="row">
				<Paragraph text="Kwota wpłaty:" />
				<Paragraph text={props.totalValue} />
			</div>
			<div className="row">
				<Paragraph text="Słownie:" />
				<Paragraph text={props.AmountInWords} />
			</div>
			<Paragraph text="SPECYFIKACJA WPŁATY:" />
			<div className="row">
				<Paragraph text="Dotyczy bezpiecznej koperty o nr:" />
				<Paragraph text={props.sealNumber} />
			</div>
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
