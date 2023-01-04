export function DatalogsIndex(props) {
  console.log(props.datalogs);

  return (
    <div>
      <h1>All datalogs</h1>
      {props.datalogs.map((datalog) => (
        <div key={datalog.id}>
          {" "}
          <h2>{datalog.datalog_name}</h2>
          <p></p>
          <p></p>
        </div>
      ))}
    </div>
  );
}
