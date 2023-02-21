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
				maxLength="4"
				value={this.props.inputValue}
				onChange={this.props.onChange}
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

class CashDepositTable extends React.Component {
	componentDidMount() {
		this.firstInput.focus();
		this.firstInput.select();
	}

	render() {
		const table = [
			{
				id: 0,
				name: "amountFives",
				denomination: "5 zł",
				value: this.props.amountFives,
				sum: this.props.sumFives,
				inputRef: true,
			},
			{
				id: 1,
				name: "amountTwos",
				denomination: "2 zł",
				value: this.props.amountTwos,
				sum: this.props.sumTwos,
			},
			{
				id: 2,
				name: "amountOnes",
				denomination: "1 zł",
				value: this.props.amountOnes,
				sum: this.props.sumOnes,
			},
			{
				id: 3,
				name: "amountFifty",
				denomination: "50 gr",
				value: this.props.amountFifty,
				sum: this.props.sumFifty,
			},
			{
				id: 4,
				name: "amountTwenty",
				denomination: "20 gr",
				value: this.props.amountTwenty,
				sum: this.props.sumTwenty,
			},
			{
				id: 5,
				name: "amountTens",
				denomination: "10 gr",
				value: this.props.amountTens,
				sum: this.props.sumTens,
			},
		];
		const list = table.map((data) =>
			data.inputRef ? (
				<TableRowInput
					key={data.id}
					name={data.name}
					firstColumn={data.denomination}
					inputValue={data.value}
					thirdColumn={data.sum}
					onChange={this.props.onChange}
					inputRef={(input) => {
						this.firstInput = input;
					}}
				/>
			) : (
				<TableRowInput
					key={data.id}
					name={data.name}
					firstColumn={data.denomination}
					inputValue={data.value}
					thirdColumn={data.sum}
					onChange={this.props.onChange}
				/>
			)
		);
		return (
			<table>
				<thead>
					<TableRow
						firstColumn="Nominał"
						secondColumn="Ilość"
						thirdColumn="Razem"
					/>
				</thead>

				<tbody>{list}</tbody>
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
export default CashDepositTable;
