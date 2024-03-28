import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
} from "chart.js";
import { Radar } from "react-chartjs-2";
ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale);

export default function CustomRadar({ data }) {
  const options = { elements: { line: { borderWidth: 2 } } };

  return <Radar data={data} options={options}></Radar>;
}
