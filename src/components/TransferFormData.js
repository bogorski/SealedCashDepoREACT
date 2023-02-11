import React from "react";

class InputData extends React.Component {
	handleSelect(event) {
		event.target.select();
	}

	render() {
		const input = (
			<input
				id={this.props.id}
				ref={this.props.inputRef}
				onClick={this.handleSelect}
				type="tel"
				value={this.props.inputValue}
				onChange={(event) => this.props.onChange(event)}
			/>
		);
		return (
			<tr>
				<td>{this.props.name}</td>
				<td>{input}</td>
			</tr>
		);
	}
}
class Table extends React.Component {
	componentDidMount() {
		//this.firstInput.focus();
		//this.firstInput.select();
	}

	render() {
		return (
			<table>
				<tbody>
					<InputData
						id={this.props.id}
						name={this.props.name}
						inputValue={this.props.value}
						onChange={(event) => this.props.onChange(event)}
						inputRef={(input) => {
							this.input = input;
						}}
					/>
				</tbody>
			</table>
		);
	}
}
export default Table;
