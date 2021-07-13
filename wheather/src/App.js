import weatherPredictions from "./data/weatherInfo";

function App() {
  return (
    weatherPredictions.map((weather, index) => {
     return  (<div key={index}>
        <weather.icon />
      </div>)
    })
  );
}

export default App;
