const API_KEY = 'BK0RIRVAE6GRUAZH';
let month = ['2021-01-31', '2021-02-28', '2021-03-31', '2021-04-30','2021-05-31','2021-06-30','2021-07-31','2021-08-31','2021-09-30','2021-10-31','2021-11-30','2021-12-31','2022-01-31','2022-02-28','2022-03-31','2022-04-30','2022-05-31','2022-06-30','2022-07-31','2022-08-31','2022-09-30','2022-10-31','2022-11-30','2022-12-31','2023-01-31','2023-02-28','2023-03-31','2023-04-30','2023-05-31','2023-06-30','2023-07-31','2023-08-29',]; // Aus dem Array von der API
let course = ['']

async function init(){
   await loadCourse();
    await loadMonthlyCourse();
    renderChart();
}

async function loadCourse(){
    let url = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=EUR&apikey=' + API_KEY;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    let currentCourse = (Math.round(responseAsJson['Realtime Currency Exchange Rate']['5. Exchange Rate']))

document.getElementById('course').innerHTML += `<b>${currentCourse} €</b>`

}

async function loadMonthlyCourse(){

     url = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=EUR&apikey=` + API_KEY; // Link für die monatlichen Kurse
    let response = await fetch(url); // Lade die URL
    let responseAsJson = await response.json(); // Lasse dieses als JSON umwandeln

    let monthlyCourse = responseAsJson['Time Series (Digital Currency Monthly)']; // Diese Variable wird unser JSON im JSON sein. Also bei Time Series...
    //console.log(responseAsJson['Time Series (Digital Currency Monthly)'])

    for (let i = 0; i < month.length; i++) { // Iteriere durch das Array month
        const courseEachMonth = Math.round(monthlyCourse[month[i]]['1a. open (EUR)']); // Diese Variable soll unser Json aus monthlycourse an der Stelle des Monats also i in dem Array 1a open ... sein
        course.push(courseEachMonth) // fügt dem Array course jedes Element aus monthlyCourse[month[i]]['1a. open (EUR)'] hinzu. Also die Zahlen aus diesen Monaten
    }

}