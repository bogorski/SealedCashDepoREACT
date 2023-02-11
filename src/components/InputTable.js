import React from "react";

function TableRow(props) {
	return (
		<tr>
			<td>{props.firstColumn}</td>
			<td>{props.secondColumn}</td>
			<td>{props.thirdColumn}</td>
		</tr>
	);
}

class TableRowInput extends React.Component {
	handleSelect(event) {
		event.target.select();
	}

	render() {
		const input = (
			<input
				ref={this.props.inputRef}
				onClick={this.handleSelect}
				name={this.props.name}
				type="tel"
				value={this.props.inputValue}
				//onChange={this.props.onChange}
				onChange={(event) => this.props.onChange(event)}
			/>
		);
		return (
			<TableRow
				firstColumn={this.props.firstColumn}
				secondColumn={input}
				thirdColumn={this.props.thirdColumn}
			/>
		);
	}
}

class Table extends React.Component {
	componentDidMount() {
		this.firstInput.focus();
		this.firstInput.select();
	}

	render() {
		/*	const sumFives = (parseFloat(this.props.amountFives) * 5).toFixed(2);
		const sumTwos = (parseFloat(this.props.amountTwos) * 2).toFixed(2);
		const sumOnes = (parseFloat(this.props.amountOnes) * 1).toFixed(2);
		const sumFifty = (
			Math.round(parseFloat(this.props.amountFifty) * 0.5 * 10) / 10
		).toFixed(2);
		const sumTwenty = (
			Math.round(parseFloat(this.props.amountTwenty) * 0.2 * 10) / 10
		).toFixed(2);
		const sumTens = (
			Math.round(parseFloat(this.props.amountTens) * 0.1 * 10) / 10
		).toFixed(2);
		const sumQuantity =
			parseFloat(this.props.amountFives) +
			parseFloat(this.props.amountTwos) +
			parseFloat(this.props.amountOnes) +
			parseFloat(this.props.amountFifty) +
			parseFloat(this.props.amountTwenty) +
			parseFloat(this.props.amountTens);
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
				(parseFloat(this.props.amountFives) * 0.00654 +
					parseFloat(this.props.amountTwos) * 0.00521 +
					parseFloat(this.props.amountOnes) * 0.005 +
					parseFloat(this.props.amountFifty) * 0.00394 +
					parseFloat(this.props.amountTwenty) * 0.00322 +
					parseFloat(this.props.amountTens) * 0.00251) *
					100
			) / 100
		).toFixed(2);
		const overloaded =
			sumWeight >= 16 ? "Worek za ciężki" : "Worek ma odpowiednią wagę";
*/
		return (
			<table>
				<thead>
					<TableRow
						firstColumn="Nominał"
						secondColumn="Ilość"
						thirdColumn="Razem"
					/>
				</thead>
				<tbody>
					<TableRowInput
						name="amountFives"
						firstColumn="5 zł"
						thirdColumn={this.props.sumFives}
						inputValue={this.props.amountFives}
						//onChange={this.props.handleChange}
						onChange={(event) => this.props.onChange(event)}
						inputRef={(input) => {
							this.firstInput = input;
						}}
					/>

					<TableRowInput
						name="amountTwos"
						firstColumn="2 zł"
						thirdColumn={this.props.sumTwos}
						inputValue={this.props.amountTwos}
						onChange={(event) => this.props.onChange(event)}
					/>
					<TableRowInput
						name="amountOnes"
						firstColumn="1 zł"
						thirdColumn={this.props.sumOnes}
						inputValue={this.props.amountOnes}
						onChange={(event) => this.props.onChange(event)}
					/>
					<TableRowInput
						name="amountFifty"
						firstColumn="50 gr"
						thirdColumn={this.props.sumFifty}
						inputValue={this.props.amountFifty}
						onChange={(event) => this.props.onChange(event)}
					/>
					<TableRowInput
						name="amountTwenty"
						firstColumn="20 gr"
						thirdColumn={this.props.sumTwenty}
						inputValue={this.props.amountTwenty}
						onChange={(event) => this.props.onChange(event)}
					/>
					<TableRowInput
						name="amountTens"
						firstColumn="10 gr"
						thirdColumn={this.props.sumTens}
						inputValue={this.props.amountTens}
						onChange={(event) => this.props.onChange(event)}
					/>
				</tbody>
				<tfoot>
					<TableRow
						firstColumn="Razem"
						secondColumn={this.props.totalAmount}
						thirdColumn={this.props.totalValue}
					/>
					<TableRow
						firstColumn="Waga"
						secondColumn={this.props.overloaded}
						thirdColumn={this.props.sumWeight}
					/>
				</tfoot>
			</table>
		);
	}
}

class DepositTable extends React.Component {
	/*	constructor(props) {
		super(props);
		/*	this.state = {
			amountFives: 0,
			amountTwos: 0,
			amountOnes: 0,
			amountFifty: 0,
			amountTwenty: 0,
			amountTens: 0,
		};*/
	//	this.handleChange = this.handleChange.bind(this);
	//	}

	/*handleChange(event) {
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
	}*/

	render() {
		return (
			<Table
				amountFives={this.props.amountFives}
				sumFives={this.props.sumFives}
				amountTwos={this.props.amountTwos}
				sumTwos={this.props.sumTwos}
				amountOnes={this.props.amountOnes}
				sumOnes={this.props.sumOnes}
				amountFifty={this.props.amountFifty}
				sumFifty={this.props.sumFifty}
				amountTwenty={this.props.amountTwenty}
				sumTwenty={this.props.sumTwenty}
				amountTens={this.props.amountTens}
				sumTens={this.props.sumTens}
				totalAmount={this.props.totalAmount}
				totalValue={this.props.totalValue}
				overloaded={this.props.overloaded}
				sumWeight={this.props.sumWeight}
				//onChange={this.props.handleChange}
				onChange={(event) => this.props.onChange(event)}
			/>
		);
	}
}

function CashDepositTable(props) {
	return (
		<DepositTable
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
			overloaded={props.overloaded}
			sumWeight={props.sumWeight}
			onChange={(event) => props.onChange(event)}
		/>
	);
}
export default CashDepositTable;
