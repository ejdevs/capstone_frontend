export default function Table(props) {
  return (
    <div className="accordian" id="accordianExample">
      <div className="accordian-item">
        <h1 className="accordian-header">
          <button
            className="btn btn-primary btn-lg"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            View Datalog
            {/* {props?.datalogs[0]?.datalog_name} */}
          </button>
        </h1>
        {/* <h1>Datalog112</h1> */}
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <table className="table table-hover">
            <tr>
              <th>id</th>
              <th>af_correction_1</th>
              <th>af_learning_1</th>
              <th>accel_position</th>
              <th>boost_extended</th>
              <th>dyn_adv_mult</th>
              <th>fine_knock_learn</th>
              <th>gear_position</th>
              <th>maf_corr_final</th>
              <th>oil_temp</th>
              <th>throttle_pos</th>
            </tr>
            {props.datalogs.map((datalog) => (
              <tr key={datalog.id}>
                <td>{datalog.id}</td>
                <td>{datalog.af_correction_1}</td>
                <td>{datalog.af_learning_1}</td>
                <td>{datalog.accel_position}</td>
                <td>{datalog.boost_extended}</td>
                <td>{datalog.dyn_adv_mult}</td>
                <td>{datalog.fine_knock_learn}</td>
                <td>{datalog.gear_position}</td>
                <td>{datalog.maf_corr_final}</td>
                <td>{datalog.oil_temp}</td>
                <td>{datalog.throttle_pos}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
