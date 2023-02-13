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
              <th>af_sens_1_ratio</th>
              <th>baro_pressure</th>
              <th>cl_fuel_target</th>
              <th>calculated_load</th>
              <th>comm_fuel_final</th>
              <th>coolant_temp</th>
              <th>feedback_knock</th>
              <th>fuel_pressure</th>
              <th>fuel_pressure_target</th>
              <th>ignition_timing</th>
              <th>inj_duty_cycle</th>
              <th>intake_temp</th>
              <th>intake_temp_manifold</th>
              <th>maf_volts</th>
              <th>req_torque</th>
              <th>td_boost_error_ext</th>
              <th>tgv_map_ratio</th>
              <th>wastegate_duty</th>
              {/* <th>ap_info</th> */}
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
                <td>{datalog.af_sens_1_ratio}</td>
                <td>{datalog.baro_pressure}</td>
                <td>{datalog.cl_fuel_target}</td>
                <td>{datalog.calculated_load}</td>
                <td>{datalog.comm_fuel_final}</td>
                <td>{datalog.coolant_temp}</td>
                <td>{datalog.feedback_knock}</td>
                <td>{datalog.fuel_pressure}</td>
                <td>{datalog.fuel_pressure_target}</td>
                <td>{datalog.ignition_timing}</td>
                <td>{datalog.inj_duty_cycle}</td>
                <td>{datalog.intake_temp}</td>
                <td>{datalog.intake_temp_manifold}</td>
                <td>{datalog.maf_volts}</td>
                <td>{datalog.req_torque}</td>
                <td>{datalog.td_boost_error_ext}</td>
                <td>{datalog.tgv_map_ratio}</td>
                <td>{datalog.wastegate_duty}</td>
                {/* <td>{datalog.ap_info}</td> */}
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
