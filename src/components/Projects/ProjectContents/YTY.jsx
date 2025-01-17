import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const YTY = ({ project }) => {
  return (
    <div>
      <div className="YTY-wrapper project-wrapper">
        <div>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Dashboard.jpg`}
              alt="Dashboard"
            />
          </div>
          <h2 className="uppercase">Enhancing Manufacturing Efficiency</h2>
          <h3 className=" mt-4">Objective</h3>
          <p className="text-left text-sm mt-2">
            YTY, a leading disposable medical gloves manufacturer, sought to
            enhance their operational efficiency and product quality by
            analyzing key aspects of their manufacturing process.
          </p>

          <h3 className=" mt-4">Challenges</h3>

          <ul className="text-left text-sm mt-2">
            <li>Frequent machine downtimes impacting production schedules.</li>
            <li>Variability in monthly production yields.</li>
            <li>Lack of detailed machine log analysis.</li>
            <li>Inefficient monitoring of current and torque.</li>
            <li>
              Inconsistent production output across different lines and SKUs.
            </li>
            <li>High rework rates due to quality failures.</li>
          </ul>

          <h3 className=" mt-4">Solution</h3>
          <p className="text-left text-sm mt-2">
            Leveraging data analytics and visualization to address these
            challenges with following approaches.
          </p>

          <h3 className=" mt-4">Machine Downtime Analysis</h3>

          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Downtime.png`}
              alt="Downtime"
            />
          </div>

          <ul className="text-left text-sm mt-2">
            <li>
              <strong>Data Sources:</strong> Downtime, Downtime Reason Category
            </li>

            <li>
              <strong>Analysis:</strong> Identified primary causes and durations
              of downtimes, created detailed reports to address recurring
              issues.
            </li>

            <li>
              <strong>Outcome:</strong> Reduced downtimes through targeted
              maintenance and optimization strategies.
            </li>
          </ul>

          <h3 className=" mt-4">Monthly Production vs Yield</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Production Vs Yield.jpg`}
              alt="Production Vs Yield"
            />
          </div>

          <ul className="text-left text-sm mt-2">
            <li>
              <strong>Data Sources:</strong> Production Data, Quality Control,
              Rejection
            </li>

            <li>
              <strong>Analysis:</strong> Compared monthly production volumes
              with yield rates, visualized trends to identify inefficiencies.
            </li>

            <li>
              <strong>Outcome:</strong> Improved yield rates by optimizing
              production processes and reducing waste.
            </li>
          </ul>

          <h3 className=" mt-4">Machine Log Analysis</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Machine Log.jpg`}
              alt="Machine Log"
            />
          </div>

          <ul className="text-left text-sm mt-2">
            <li>
              <strong>Data Sources:</strong> Machine Log
            </li>

            <li>
              <strong>Analysis:</strong> Monitored machine temperatures and
              operating conditions, performed trend analysis to detect
              deviations.
            </li>

            <li>
              <strong>Outcome:</strong> Enhanced machine performance and early
              detection of potential issues.
            </li>
          </ul>

          <h3 className=" mt-4">Current & Torque Monitoring</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Current & Torque.jpg`}
              alt="Current & Torque"
            />
          </div>

          <ul className="text-left text-sm mt-2">
            <li>
              <strong>Data Sources:</strong> Torque Current, Machine Log
            </li>

            <li>
              <strong>Analysis:</strong> Correlated current and torque
              measurements with machine performance data.
            </li>

            <li>
              <strong>Outcome:</strong> Improved maintenance schedules and
              reduced machine failures.
            </li>
          </ul>

          <h3 className=" mt-4">Monthly Production by Line, by SKU</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Production.png`}
              alt="Production"
            />
          </div>

          <ul className="text-left text-sm mt-2">
            <li>
              <strong>Data Sources:</strong> Production Data, SKU Data
            </li>

            <li>
              <strong>Analysis:</strong> Aggregated data by production line and
              SKU, visualized monthly production trends.
            </li>

            <li>
              <strong>Outcome:</strong> Optimized production planning and
              identified high-performing lines and SKUs.
            </li>
          </ul>

          <h3 className=" mt-4">Rework Analysis Due to Failure</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Second Grade Rework Analysis.png`}
              alt="Second Grade Rework Analysis"
            />
          </div>

          <ul className="text-left text-sm mt-2">
            <li>
              <strong>Data Sources:</strong> Rejection, Re-work
            </li>

            <li>
              <strong>Analysis:</strong> Tracked instances of rework due to
              failures, identified root causes and types of failures.
            </li>

            <li>
              <strong>Outcome:</strong> Minimized rework through corrective
              actions and improved overall quality.
            </li>
          </ul>

          <h3 className=" mt-4">Results</h3>
          <p className="text-left text-sm mt-2">
            By implementing these data-driven strategies, YTY achieved
            significant improvements in operational efficiency, product quality,
            and overall manufacturing performance. The insights gained from the
            analysis enabled YTY to make informed decisions, reduce downtimes,
            optimize production processes, and enhance product quality.
          </p>

          <h2 className="mt-4">Architecture</h2>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Architecture.png`}
              alt="Architecture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YTY;
