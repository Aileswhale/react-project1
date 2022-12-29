import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/hero";
import Card from "./component/card";
import Data from "./data";

function App() {
  const Newcard = Data.map((props) => {
    return (
      <Card
        key={props.id}
        // or {...props}
       data={props}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cardholder">
        {Newcard}
      </section>
    </>
  );
}

export default App;


