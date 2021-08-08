import weatherPredictions from "./data/weatherInfo";
import { Weather } from "./components/Weather/Weather";

function App() {
  return weatherPredictions.map((item, index) => {
    return (
      <Weather
        key={index}
        weekDey={item.weekDey}
        icon={item.icon()}
        temp={item.temp}
      />
    );
  });
}

export default App;
