export default function Table(props) {
  return (
    <div>
      <h1>React Axios Get</h1>
      <table className="table table-bordered">
        <tr>
          <th>id</th>
          <th>datalog_name</th>
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
          <th>user_id</th>
        </tr>
        {props.datalogs.map((datalog) => (
          <tr key={datalog.id}>
            <td>{datalog.id}</td>
            <td>{datalog.datalog_name}</td>
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
            <td>{datalog.user_id}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
