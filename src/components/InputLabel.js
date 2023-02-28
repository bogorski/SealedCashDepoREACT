function InputLabel(props) {
	return (
		<div>
			<label htmlFor={props.for}>
				<b>{props.label}</b>
			</label>
			<input
				id={props.id}
				type="text"
				value={props.value}
				placeholder={props.placeholder}
				onChange={props.onChange}
			/>
		</div>
	);
}

export default InputLabel;
