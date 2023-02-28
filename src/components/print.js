import druk from "../images/druk.png";

function print(
	totalValue,
	wordValue,
	sealNumber,
	recipentName,
	recipentAdress,
	accountNumber,
	yourName,
	yourAdress,
	title
) {
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d");
	canvas.height = 1253;
	canvas.width = 1772;
	const image = new Image();
	image.onload = canvasLoadAsync;
	function formField(text, x, y) {
		if (text.length <= 27) {
			text = text.toUpperCase();
			for (let i = 0; i < text.length; i++) {
				ctx.font = "bold 50px Courier";
				if (i === 0) {
					ctx.fillText(text[i], x, y);
				} else {
					ctx.fillText(text[i], x + 59 * i, y);
				}
			}
		} else {
			for (let i = 0; i < text.length; i++) {
				ctx.font = "bold 45px Courier";
				ctx.fillText(text, x, y);
			}
		}
	}
	function canvasLoad() {
		ctx.drawImage(image, 0, 0);
		formField(recipentName, 110, 100);
		formField(recipentAdress, 110, 200);
		formField(accountNumber, 110, 300);
		const sum = totalValue.toString();
		formField(sum, 1003, 400);
		formField(wordValue, 110, 500);
		formField(yourName, 110, 600);
		formField(yourAdress, 110, 700);
		formField(title, 110, 800);
		const secureEnvelope = "BEZPIECZNA KOPERTA O NR. " + sealNumber;
		formField(secureEnvelope, 110, 900);
		/*const now = new Date();
			"UTARG WARSZAWA " +
			(now.getDate() < 10 ? "0" + now.getDate() : now.getDate()) +
			"." +
			(now.getMonth() < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1) +
			//(now.getMonth() + 1) +
			"." +
			now.getFullYear();
      */
		const url = canvas.toDataURL("image/jpeg", 0.5);
		const img = document.querySelectorAll("img");
		img.forEach(function (img) {
			img.src = url;
		});
	}
	image.src = druk;
	function printCanvas() {
		window.print();
	}
	async function canvasLoadAsync() {
		await canvasLoad();
		await printCanvas();
	}
}

export default print;
