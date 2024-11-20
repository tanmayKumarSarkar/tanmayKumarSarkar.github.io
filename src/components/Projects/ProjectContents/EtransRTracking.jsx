import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const EtransRTracking = ({ project }) => {
  return (
    <div>
      <div className="EtransRTracking-wrapper project-wrapper">
        <div>
          <h2>REQUIREMENTS</h2>
          <h3 className="mt-4">FUNCTIONAL REQUIREMENTS</h3>
          <ul className="text-left text-sm">
            <li>
              Real-Time Data Collection from On-board Diagnostic Device (OBD)
              installed on Vehicle.
            </li>
            <li>
              Calculating Driver Score based on Various parameter (i.e. Speed,
              Acceleration, Braking etc.){" "}
            </li>
            <li>
              Calculation Accident Probability based on collect data and some
              External Data (i.e. Weather etc.)
            </li>
            <li>
              Visualization Dashboard & Analytics on Real-Time & Historical Data
            </li>
          </ul>
          <h3 className="mt-4">TECHNICAL REQUIREMENTS</h3>
          <ul className="text-left text-sm">
            <li>
              Based on GPS data, if the truck is greater than 100 meters from
              the route, send an alert to the driver and the control center.
              (The 100 meters needs to be parameterized, as in certain cases it
              will be 30 meters.)
            </li>
            <li>
              If the truck is moving and the driver is not in frame of the
              video, send an alert to the driver and control.
            </li>
            <li>
              If the driver is not looking at the road for greater than 3
              seconds, send an alert to the driver and control.
            </li>
            <li>
              If the driver is yawning 3 times in 5 minutes, send an alert to
              the driver and control.
            </li>
            <li>
              Every 1 hour, if the truck is moving, send a 10-second clip to the
              server.
            </li>
            <li>
              Meta data of the clip will be stored in HarperDB. Video will be
              stored in S3.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="my-4">Driver Scorecard Report/Visualization</h2>

          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Driver Score Card Detailed.jpg`}
              alt="Driver Score Card Detailed"
            />
          </div>

          <h3 className="mt-4">Key Performance Indicators (KPIs)</h3>
          <ul className="text-left text-sm">
            <li>Hard Acceleration</li>
            <li>Harsh Braking/Declaration</li>
            <li>Velocity/Speed</li>
            <li>Idling/Idle Time</li>
            <li>Night Driving</li>
            <li>
              Alert Parameters
              <ul className="text-left text-sm ml-6 mt-1">
                <li>ACCELERATION</li>
                <li>DECELERATION</li>
                <li>DISTRACTION</li>
                <li>FATIGUE DRIVING</li>
                <li>OVERSPEED</li>
              </ul>
            </li>
          </ul>
          <h2 className="mt-4">PRODUCT DELEVERABLES</h2>

          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Driver Score Card Overall.png`}
              alt="Driver Score Card Overall"
            />
          </div>

          <h3 className="mt-4">Default Reporting Period</h3>
          <p>Month → Week → Day</p>
          <h3 className="mt-4">Details Displayed</h3>
          <ul className="text-left text-sm">
            <li>
              Master Report: High-level analysis for all drivers displays
              information about the total number of incidents based on model
              output segmentation with driver details.
            </li>
            <li>
              Detail Report: Displays a specific driver's scorecard based on the
              high-level visualization.
            </li>
          </ul>

          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Driver Score Card Parameters.png`}
              alt="Driver Score Card Parameters"
            />
          </div>

          <h3 className="mt-4">Driver Risks Segmentation</h3>
          <ul className="text-left text-sm">
            <li>High Risk</li>
            <li>Medium High Risk</li>
            <li>Medium Low Risk</li>
            <li>Medium Risk</li>
            <li>Low Risk</li>
          </ul>
          <h3 className="mt-4">Output Parameter Attributes</h3>
          <ul className="text-left text-sm">
            <li>Hard Acceleration</li>
            <li>Harsh Braking</li>
            <li>Velocity</li>
            <li>Alert</li>
            <li>Idle Time</li>
            <li>Night Driving</li>
          </ul>
          <h3 className="mt-4">Condition Formatting Formula</h3>
          <ul className="text-left text-sm">
            <li>High Risk: ≥ 81%</li>
            <li>Medium High Risk: 60 - 80%</li>
            <li>Medium Low Risk: 40 - 60%</li>
            <li>Medium Risk: 20 - 40%</li>
            <li>Low Risk: ≤ 19%</li>
          </ul>
          <h2 className="mt-4">Driver Scorecard in Trend Analysis View</h2>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Driver ScoreCard Segmentation.png`}
              alt="Driver ScoreCard Segmentation"
            />
          </div>
          <p className="mt-4">
            Provides information about segmentation-based individual drivers
            based on high-level visualization.
          </p>

          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Segmentation Based Trend Analysis.png`}
              alt="Segmentation Based Trend Analysis"
            />
          </div>

          <h3 className="mt-4"> Segmentation Trends</h3>
          <ul className="text-left text-sm">
            <li>
              High-Risk Drivers: Identify drivers consistently in the high-risk
              category and analyze patterns leading to this classification.
            </li>

            <li>
              Improvement Trends: Track drivers who have shown significant
              improvement over time, moving from higher to lower risk segments.
            </li>
          </ul>
          <h3 className="mt-4">Behavioral Patterns</h3>
          <ul className="text-left text-sm">
            <li>
              Time-Based Analysis: Examine how driver behavior changes over
              different times of the day or week.
            </li>

            <li>
              Incident Frequency: Assess the frequency and types of incidents
              (e.g., hard braking, acceleration) to identify common triggers or
              times of occurrence.
            </li>
          </ul>
          <h3 className="mt-4">Comparative Analysis</h3>
          <ul className="text-left text-sm">
            <li>
              Peer Comparison: Compare drivers against their peers to identify
              outliers and set benchmarks for performance.
            </li>

            <li>
              Historical Comparison: Track individual driver performance over
              time to evaluate consistency and long-term trends.
            </li>
          </ul>
          <h3 className="mt-4">Predictive Insights</h3>
          <ul className="text-left text-sm">
            <li>
              Accident Probability: Use historical data to predict the
              likelihood of accidents based on current driving patterns and past
              incidents.
            </li>

            <li>
              Risk Forecasting: Forecast future risk levels for drivers based on
              their historical performance and behavioral trends.
            </li>
          </ul>
          <h3 className="mt-4">KPI Evolution</h3>
          <ul className="text-left text-sm">
            <li>
              KPI Trends: Monitor how key performance indicators like hard
              acceleration, harsh braking, and idling time evolve over periods.
            </li>

            <li>
              Correlations: Analyze correlations between different KPIs to
              understand how one driving behavior might influence another.
            </li>
          </ul>
          <h3 className="mt-4">Alert Analysis</h3>
          <ul className="text-left text-sm">
            <li>
              Alert Frequency: Track the number and types of alerts generated
              over time to identify trends in driver behavior and response.
            </li>

            <li>
              Response Time: Assess the average response time to alerts, both
              from drivers and the control center.
            </li>
          </ul>
          <h3 className="mt-4">Event Segmentation</h3>

          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Event Segmentation.png`}
              alt="Event Segmentation"
            />
          </div>
          <p className="mt-4">
            Analyzing specific events and their patterns to understand driver
            behavior better and predict future incidents.
          </p>

          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Event Segmentation Breakdown.png`}
              alt="Event Segmentation Breakdown"
            />
          </div>
          <ul className="text-left text-sm mt-2">
            <li>Acceleration Events: Rapid increases in speed.</li>
            <li>Braking Events: Sudden or harsh braking incidents.</li>
            <li>
              Idle Events: Periods where the vehicle is stationary but the
              engine is running.
            </li>
            <li>
              Distraction Events: Instances where the driver is not focused on
              the road.
            </li>
            <li>
              Fatigue Events: Signs of driver tiredness, such as frequent
              yawning.
            </li>
          </ul>

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

export default EtransRTracking;
