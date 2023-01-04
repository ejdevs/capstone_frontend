import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import "./App.css";
import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  title: {
    text: "My chart",
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
};

const App = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
    <Header />
    <Home />
    <Footer />
  </div>
);

render(<App />, document.getElementById("root"));

export default App;
