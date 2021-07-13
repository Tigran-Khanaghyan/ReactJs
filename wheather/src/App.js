import weatherPredictions from "./data/weatherInfo";
import { Card } from "./components/icons/Card/Card";

function App() {
  return (
    weatherPredictions.map((item, index) => {
     return  (
       <Card key={index} weekDey={item.weekDey}
             icon={item.icon() }
             temp={item.temp}
       />
     )
    })
  );
}

export default App;
