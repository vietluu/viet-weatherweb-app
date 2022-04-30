import React, { useState, useEffect } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  const [filters, setfilters] = useState("Hanoi");
  const [value, setvalues] = useState("");
  const [list, setlist] = useState([{}]);

  document.title = "WeatherWeb App";

  const setvalue = (e) => {
    if (e.key === "Enter") {
      setfilters(value);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const link = `https://api.openweathermap.org/data/2.5/weather?q=${filters}&appid=408ca618c04b191d65bc0737e37adf10&units=metric&lang=vi`;
        await fetch(link)
          .then((Response) => Response.json())
          .then((data) => {
            setlist(data);
          });
        console.log(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [filters]);

  return (
    <div className="container" style={{ width: "100%" }}>
      <div className="search">
        <input
          placeholder="nhập tìm kiếm..."
          className="search-bar"
          onChange={(e) => setvalues(e.target.value)}
          onKeyPress={setvalue}
        ></input>

        <button className="search-btn" onClick={(e) => setfilters(value)}>
          <i className="fa fa-search"></i>
        </button>
      </div>
      {typeof list.main === "undefined" ? (
        <p className="weather-result">không có dữ liệu</p>
      ) : (
        <div className="weather-result">
          <p className="city-name">{list.name}</p>
          <p className="city-temp">{Math.round(list.main.temp)}°C</p>
          <p className="city-des">{list.weather[0].description}</p>
        </div>
      )}
      {list.cod === "404" ? (
        <p className="weather-result">không tìm thấy thành phố này</p>
      ) : (
        <></>
      )}
    </div>
  );
}
export default App;
