import React from "react";
function TableRow(props) {
	return (
		<tr>
			<td>{props.firstColumn}</td>
			<td>{props.secondColumn}</td>
		</tr>
	);
}
class InputData extends React.Component {
	handleSelect(event) {
		event.target.select();
	}

	render() {
		const input = (
			<input
				id={this.props.id}
				name={this.props.name}
				onClick={this.handleSelect}
				type="text"
				value={this.props.value}
				onChange={this.props.onChange}
			/>
		);
		return (
			<tr>
				<td>{this.props.visibleName}</td>
				<td>{input}</td>
			</tr>
		);
	}
}

function YourDataTable(props) {
	const table = [
		{
			id: 0,
			name: "yourName",
			visibleName: "nazwa",
			value: props.yourNameValue,
		},
		{
			id: 1,
			name: "yourStreet",
			visibleName: "ulica",
			value: props.yourStreetValue,
		},
		{
			id: 2,
			name: "yourBuildingNr",
			visibleName: "numer domu",
			value: props.yourBuildingNrValue,
		},
		{
			id: 3,
			name: "yourApartmenNr",
			visibleName: "numer lokalu",
			value: props.yourApartmenNrValue,
		},
		{
			id: 4,
			name: "yourZipCode",
			visibleName: "kod pocztowy",
			value: props.yourZipCodeValue,
		},
		{
			id: 5,
			name: "yourCity",
			visibleName: "miejscowość",
			value: props.yourCityValue,
		},
	];
	const list = table.map((data) => (
		<InputData
			key={data.id}
			name={data.name}
			visibleName={data.visibleName}
			value={data.value}
			onChange={props.onChange}
		/>
	));
	return (
		<table>
			<thead>
				<tr>
					<td colSpan="2">Dane wpłacającego</td>
				</tr>
			</thead>
			<tbody>{list}</tbody>
		</table>
	);
}
function RecipientDataTable(props) {
	const table = [
		{
			id: 0,
			name: "recipientName",
			visibleName: "nazwa",
			value: props.recipientNameValue,
		},
		{
			id: 1,
			name: "recipientStreet",
			visibleName: "ulica",
			value: props.recipientStreetValue,
		},
		{
			id: 2,
			name: "recipientBuildingNr",
			visibleName: "numer domu",
			value: props.recipientBuildingNrValue,
		},
		{
			id: 3,
			name: "recipientApartmenNr",
			visibleName: "numer lokalu",
			value: props.recipientApartmenNrValue,
		},
		{
			id: 4,
			name: "recipientZipCode",
			visibleName: "kod pocztowy",
			value: props.recipientZipCodeValue,
		},
		{
			id: 5,
			name: "recipientCity",
			visibleName: "miejscowość",
			value: props.recipientCityValue,
		},
		{
			id: 6,
			name: "recipientAccountNr",
			visibleName: "numer konta",
			value: props.recipientAccountNrValue,
		},
		{
			id: 7,
			name: "paymentTitle",
			visibleName: "tytuł przelewu",
			value: props.paymentTitleValue,
		},
	];
	const list = table.map((data) => (
		<InputData
			key={data.id}
			name={data.name}
			visibleName={data.visibleName}
			value={data.value}
			onChange={props.onChange}
		/>
	));
	return (
		<table>
			<thead>
				<tr>
					<td colSpan="2">Dane odbiorcy</td>
				</tr>
			</thead>
			<tbody>{list}</tbody>
		</table>
	);
}

export { YourDataTable, RecipientDataTable };
