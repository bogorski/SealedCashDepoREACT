import React from "react";
//{ useEffect, useRef }
//import druk from "../images/druk.png";
//import ReactDOM from "react-dom";

//class TransferForm extends React.Component {
function TransferFormView(props) {
	/*constructor(props) {
		super(props);
		this.state = {
			zmiana: "zmiana",
		};
		this.handleCanvas = this.handleCanvas.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		console.log("bynt");
		this.setState({
			zmiana: 0 > -1 ? <CanvasTTT totalValue={this.props.totalValue} /> : null,
		});
	}
	render() {*/
	return <button onClick={(event) => props.onClick(event)}>Drukuj</button>;
	//}
}

//const Canvas = (props) => {
/*function CanvasTTT(props) {
	const canvasRef = useRef(null);
	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		canvas.height = 1253;
		canvas.width = 1772;
		const image = new Image();
		image.onload = function () {
			ctx.drawImage(image, 0, 0);
			let aaa = "Automat Sp. k.";
			aaa = aaa.toUpperCase();
			if (aaa > 27) {
				aaa = [...aaa];
				for (let i = 0; i < aaa.length; i++) {
					if (aaa[i] === ".") {
						aaa[i - 1] = aaa[i - 1] + aaa[i];
						aaa.splice(i, 1);
					}
				}
			}
			//console.log(aaa)
			const bbb = "KASZÓW	100	32-060	LISZKI";
			const nr = "9417501048000000000000024";
			/////
			const kwota = props.totalvalue;
			////
			const nazwaZleceniodwacy = "inputName.value.toUpperCase()";
			const now = new Date();
			const nazwaZlecenia =
				"UTARG WARSZAWA " +
				now.getDate() +
				"." +
				(now.getMonth() + 1) +
				"." +
				now.getFullYear();
			for (let i = 0; i < bbb.length; i++) {
				//ctx.moveTo(20, i*20);
				ctx.font = "bold 50px Courier";
				if (i === 0) {
					ctx.fillText(bbb[i], 110, 200);
				} else {
					ctx.fillText(bbb[i], 110 + 59 * i, 200);
				}
			}
			for (let i = 0; i < nr.length; i++) {
				//ctx.moveTo(20, i*20);
				ctx.font = "bold 50px Courier";
				if (i === 0) {
					ctx.fillText(nr[i], 110, 300);
				} else {
					ctx.fillText(nr[i], 110 + 59 * i, 300);
				}
			}
			console.log(kwota);
			for (let i = 0; i < kwota.length; i++) {
				ctx.font = "bold 50px Courier";
				if (i === 0) {
					ctx.fillText(kwota[i], 1003, 400);
				} else {
					ctx.fillText(kwota[i], 1003 + 59 * i, 400);
				}
			}
			/////
			let vbb = "amountWords.innerText.toUpperCase();";
			//console.log(vbb)
			for (let i = 0; i < vbb.length; i++) {
				ctx.font = "bold 30px Courier";
				if (i === 0) {
					ctx.fillText(vbb[i], 110, 500);
				} else {
					ctx.fillText(vbb[i], 110 + 20 * i, 500);
				}
			}
			for (let i = 0; i < nazwaZleceniodwacy.length; i++) {
				ctx.font = "bold 50px Courier";
				if (i === 0) {
					ctx.fillText(nazwaZleceniodwacy[i], 110, 600);
				} else {
					ctx.fillText(nazwaZleceniodwacy[i], 110 + 59 * i, 600);
				}
			}
			for (let i = 0; i < nazwaZlecenia.length; i++) {
				ctx.font = "bold 50px Courier";
				if (i === 0) {
					ctx.fillText(nazwaZlecenia[i], 110, 800);
				} else {
					ctx.fillText(nazwaZlecenia[i], 110 + 59 * i, 800);
				}
			}
			for (let i = 0; i < nazwaZleceniodwacy.length; i++) {
				ctx.font = "bold 50px Courier";
				if (i === 0) {
					ctx.fillText(nazwaZleceniodwacy[i], 110, 900);
				} else {
					ctx.fillText(nazwaZleceniodwacy[i], 110 + 59 * i, 900);
				}
			}
			/////////
			const koperta = "BEZPIECZNA KOPERTA O NR. " + "sealNumber.value";
			ctx.font = "bold 30px Courier";
			ctx.fillText(koperta, 110, 1000);
		};
		image.src = druk;
	}, []);
	return <canvas id="qwer" ref={canvasRef} {...props} />;
}*/
export { TransferFormView };
//export default Canvas;

/*function aaa() {
	console.log("saf");
	const element = (
		<div>
			<h1>Witaj świecie!</h1>
			<h2>Aktualny czas: {new Date().toLocaleTimeString()}.</h2>
		</div>
	);
	ReactDOM.render(element, document.getElementById("asd"));
	//React.createElement("div", { class: "asd" }, "Test");
}
*/
