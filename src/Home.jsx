import axios from "axios";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { useState, useEffect } from "react";
import { DatalogsIndex } from "./DatalogsIndex";
import Table from "./Table";

export function Home() {
  const [datalogs, setDatalogs] = useState([]);
  const [rpm, setRpm] = useState({});
  const [oilTemp, setOilTemp] = useState({});
  const [accelThrottle, setAccelThrottle] = useState({});
  const [extData, setExtData] = useState({});

  const handleIndexDatalogs = () => {
    console.log("handleIndexDatalogs");
    axios.get("http://localhost:3000/datalogs.json").then((response) => {
      setDatalogs(response.data);
      let extData = [
        { name: "af_correction_1", data: [] },
        { name: "af_learning_1", data: [] },
        // { name: "accel_position", data: [] },
        { name: "boost_extended", data: [] },
        { name: "dyn_adv_mult", data: [] },
        { name: "fine_knock_learn", data: [] },
        { name: "gear_position", data: [] },
        { name: "maf_corr_final", data: [] },
        // { name: "throttle_pos", data: [] },
      ];
      let accelThrottle = [
        { name: "accel_position", data: [] },
        { name: "throttle_pos", data: [] },
      ];
      let rpm = [{ name: "rpm", data: [] }];
      let oilTemp = [{ name: "oil_temp", data: [] }];
      for (let i = 0; i < extData.length; i++) {
        for (let j = 0; j < response.data.length; j++) {
          if (response.data[j][extData[i]["name"]]) {
            extData[i]["data"].push([
              parseFloat(response.data[j]["time"]),
              parseFloat(response.data[j][extData[i]["name"]]),
            ]);
          }
        }
      }

      for (let k = 0; k < response.data.length; k++) {
        if (response.data[k]["accel_position"]) {
          accelThrottle[0]["data"].push([
            parseFloat(response.data[k]["time"]),
            parseFloat(response.data[k]["accel_position"]),
          ]);
        }
        if (response.data[k]["throttle_pos"]) {
          accelThrottle[1]["data"].push([
            parseFloat(response.data[k]["time"]),
            parseFloat(response.data[k]["throttle_pos"]),
          ]);
        }
        if (response.data[k]["rpm"]) {
          rpm[0]["data"].push([parseFloat(response.data[k]["time"]), parseFloat(response.data[k]["rpm"])]);
        }
        if (response.data[k]["oil_temp"]) {
          oilTemp[0]["data"].push([parseFloat(response.data[k]["time"]), parseFloat(response.data[k]["oil_temp"])]);
        }
      }

      setRpm({
        chart: {
          borderColor: "#6f42c1",
          borderWidth: 0.5,
          type: "line",
        },
        title: {
          text: "RPM",
        },
        subtitle: {
          text: " ",
        },
        xAxis: {
          type: "integer",
          title: {
            text: "Time (in seconds)",
          },
        },
        yAxis: {
          title: {
            text: "Tachometer (0 - 8k)",
          },
        },
        series: rpm,
      });

      setOilTemp({
        chart: {
          borderColor: "#6f42c1",
          borderWidth: 0.5,
          type: "line",
        },
        title: {
          text: "Oil Temp (F°)",
        },
        subtitle: {
          text: " ",
        },
        xAxis: {
          type: "integer",
          title: {
            text: "Time (in seconds)",
          },
        },
        yAxis: {
          title: {
            text: "Degree F°",
          },
        },
        series: oilTemp,
      });

      setAccelThrottle({
        chart: {
          borderColor: "#6f42c1",
          borderWidth: 0.5,
          type: "line",
        },
        title: {
          text: "Accelerator : Throttle Position",
        },
        subtitle: {
          text: " ",
        },
        xAxis: {
          type: "integer",
          title: {
            text: "Time (in seconds)",
          },
        },
        yAxis: {
          title: {
            text: "%",
          },
        },
        series: accelThrottle,
      });

      setExtData({
        chart: {
          borderColor: "#6f42c1",
          borderWidth: 0.5,
          type: "line",
        },
        title: {
          text: "Air:Fuel, Boost, Gear, Knock",
        },
        subtitle: {
          text: " ",
        },
        xAxis: {
          type: "integer",
          title: {
            text: "Time (in seconds)",
          },
        },
        yAxis: {
          title: {
            text: "g/s, psi, %",
          },
        },
        series: extData,
      });
    });
    console.log(datalogs);
  };

  useEffect(handleIndexDatalogs, []);

  return (
    <div className="container">
      <HighchartsReact highcharts={Highcharts} options={rpm} />
      <HighchartsReact highcharts={Highcharts} options={oilTemp} />
      <HighchartsReact highcharts={Highcharts} options={accelThrottle} />
      <HighchartsReact highcharts={Highcharts} options={extData} />
      {/* <DatalogsIndex datalogs={datalogs} /> */}
      <Table datalogs={datalogs} />
    </div>
  );
}
