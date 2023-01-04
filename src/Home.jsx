import axios from "axios";
import { useState, useEffect } from "react";
import { DatalogsIndex } from "./DatalogsIndex";
import Table from "./Table";

export function Home() {
  const [datalogs, setDatalogs] = useState([]);

  const handleIndexDatalogs = () => {
    console.log("handleIndexDatalogs");
    axios.get("http://localhost:3000/datalogs.json").then((response) => {
      console.log(response.data);
      setDatalogs(response.data);
    });
  };

  useEffect(handleIndexDatalogs, []);

  return (
    <div>
      {/* <DatalogsIndex datalogs={datalogs} /> */}
      <Table datalogs={datalogs} />
    </div>
  );
}
