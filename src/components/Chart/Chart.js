import "./Chart.css"
import ChartBar from "./ChartBar";
const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(datapoint=>datapoint.value);
    const maximumValue = Math.max(...dataPointValues)
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          label={datapoint.label}
          value={datapoint.value}
          maxValue = {maximumValue}
        ></ChartBar>
      ))}
    </div>
  );
};
export default Chart;
