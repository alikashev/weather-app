import React from 'react'

const api = {
  key: "efdc32feb10ebfa81107426a8a352c7d",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {

  const dateBuilder = (d) => {
    let months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];

    let days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`

  }

  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text"
            className="search-bar"
            placeholder="Zoeken..."
          />
        </div>
        <div className="location-box">
          <div className="location">Utrecht, Nederland</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            15°c
          </div>
          <div className="weather">Zonnig</div>
        </div>
      </main>
    </div>
  );
}

export default App;
