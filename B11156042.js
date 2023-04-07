const prices = [8,11,14,17,20 ];
let html = "<table id='tableCaption'><tr><td></td><td id='tableTitle'>5號餐8元<br></td><td id='tableTitle'>4號餐11元<br></td><td id='tableTitle'>3號餐14元<br></td><td id='tableTitle'>2號餐17元<br></td><td id='tableTitle'>1號餐20元<br></td></tr>";
    for (let i = 0; i < 5; i++) {
        html += "<tr><td id='tableTitle'>" + (i+3) + "份<br></td>";
    for (let j = 0; j < prices.length; j++) {
        html += "<td>" + prices[j] + " x " + (i+3) + " = " + (prices[j] * (i+3)) + "</td>";
}
    html += "</tr>";
}
document.write(html);