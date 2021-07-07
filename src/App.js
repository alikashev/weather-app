import React, { useState } from 'react';

const api = {
    key: 'efdc32feb10ebfa81107426a8a352c7d',
    base: 'http://api.openweathermap.org/data/2.5/',
};

const maps = {
    key: 'AIzaSyBhIQCTv8_dBW16RtWhelBN0UsNoRS-zl0',
    base: 'https://www.google.com/maps/embed/v1/',
};

function App() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [url, setUrl] = useState('');

    const search = (evt) => {
        if (evt.key === 'Enter') {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then((res) => res.json())
                .then((result) => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                    setUrl(
                        `${maps.base}place?key=${maps.key}&q=${result.name}&zoom=8`
                    );
                });
        }
    };

    const dateBuilder = (d) => {
        let months = [
            'Januari',
            'Februari',
            'Maart',
            'April',
            'Mei',
            'Juni',
            'Juli',
            'Augustus',
            'September',
            'Oktober',
            'November',
            'December',
        ];

        let days = [
            'Zondag',
            'Maandag',
            'Dinsdag',
            'Woensdag',
            'Donderdag',
            'Vrijdag',
            'Zaterdag',
        ];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    };

    return (
        <div
            className={
                typeof weather.main != 'undefined'
                    ? weather.main.temp > 20
                        ? 'app warm'
                        : 'app'
                    : 'app'
            }
        >
            <main>
                <div className='search-box'>
                    <input
                        type='text'
                        className='search-bar'
                        placeholder='Typ een stad of land en druk op enter'
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                </div>
                {typeof weather.main != 'undefined' ? (
                    <div>
                        <div className='location-box'>
                            <div className='location'>
                                {weather.name}, {weather.sys.country}
                            </div>
                            <div className='date'>
                                {dateBuilder(new Date())}
                            </div>
                        </div>
                        <div className='weather-box'>
                            <div className='temp'>
                                {Math.round(weather.main.temp)}°c
                            </div>
                            <div className='weather'>
                                {weather.weather[0].main}
                            </div>
                            <iframe
                                className='flex flex-col'
                                id='iframeUrl'
                                width='100%'
                                height='400'
                                frameborder='0'
                                allowfullscreen
                                // src=''
                                // src='https://www.google.com/maps/embed/v1/place?q=nederland&key=AIzaSyBhIQCTv8_dBW16RtWhelBN0UsNoRS-zl0'
                                src={url}
                            ></iframe>
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </main>
        </div>
    );
}

export default App;
