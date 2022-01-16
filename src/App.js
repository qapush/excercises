import { setState, useState } from "react";
import Kurs from "./components/services/Kurs";

function App() {
  const [loading, setLoading] = useState(false);
  const [rate, setRate] = useState(null);
  const kurs = new Kurs();

  const getRate = () => {
    setLoading(true)
    kurs.getRate()
        .then( res => {
          
          setRate(res.rates[0].mid)
          setLoading(false)
        })
  }

  return (
    <>
      <h1>Siema</h1>
      <p>
        {loading ? 'Loading' : null}
      </p>
      <button onClick={getRate}>
        Get rate
      </button>
      <p>
      {rate ? `Rate: ${rate}` : null}
      </p>
    </>
  );
}

export default App;
