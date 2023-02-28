function ButtonDisable(props) {
	return (
		<button
			className={props.tooltipClass}
			disabled={props.disabled}
			onClick={props.onClick}
		>
			<span className="tooltiptext">{props.tooltipText}</span>
			{props.buttonName}
		</button>
	);
}
function DivButtons(props) {
	return (
		<div style={{ textAlign: "center" }}>
			<ButtonDisable
				disabled={props.disabled}
				tooltipClass={props.tooltipClass}
				onClick={props.onClickDisable}
				tooltipText={props.tooltipText}
				buttonName={props.buttonDisableName}
			/>
			<button onClick={props.onClickMiddle}>{props.buttonMiddleName}</button>
			<button onClick={props.onClickRight}>{props.buttonRightName}</button>
		</div>
	);
}
export default DivButtons;
