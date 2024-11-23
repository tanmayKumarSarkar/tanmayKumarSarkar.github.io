import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const EtransRTracking = ({ project }) => {
  return (
    <div>
      <div className="EtransRTracking-wrapper project-wrapper">
        <div>
          <h2>REQUIREMENTS</h2>
          <h3 className="mt-4">Functional Requirements</h3>
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
          <h3 className="mt-4 capitalize">Technical Requirements</h3>
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
          <h2 className="my-4 uppercase">Components</h2>

          {/* <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Driver Score Card Detailed.jpg`}
              alt="Driver Score Card Detailed"
            />
          </div> */}
          {/* <h3 className="mt-4">Components</h3> */}
          <ul className="text-left text-sm">
            <li>
              <span className="text-sm font-semibold">Raspberry Pi:</span> The
              onboard device for processing data.
            </li>
            <li>
              <span className="text-sm font-semibold">GPS Module:</span>{" "}
              Provides real-time location data.
            </li>
            <li>
              <span className="text-sm font-semibold">Node.js </span>Server:
              Manages data communication between the onboard device and the
              client application.
            </li>
            <li>
              <span className="text-sm font-semibold">Map Interface:</span>{" "}
              Displays real-time vehicle location.
            </li>
            <li>
              <span className="text-sm font-semibold">IP Cameras:</span> Provide
              video feed for monitoring driver and road conditions.
            </li>
          </ul>
          <h2 className="mt-4 uppercase">Workflow & Process</h2>

          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Driver.png`}
              alt="Driver Tracking"
            />
          </div>

          <h3 className="mt-4 capitalize ">Operational Workflow</h3>
          <ul start="1">
            <li>
              <strong>Real-Time Data Collection</strong>:
              <ul className="ml-4 mb-2">
                <li>The GPS unit continuously collects location data.</li>
                <li>
                  IP cameras capture video footage of the driver and the road.
                </li>
              </ul>
            </li>
            <li>
              <strong>Data Processing</strong>:
              <ul className="ml-4 mb-2">
                <li>The Raspberry Pi processes GPS and video data.</li>
                <li>
                  Data is formatted into a structured format (e.g., JSON).
                </li>
              </ul>
            </li>
            <li>
              <strong>Data Transmission</strong>:
              <ul className="ml-4 mb-2">
                <li>
                  The Raspberry Pi sends GPS and video data to a central{" "}
                  <button type="button">Node.js&nbsp;</button>server using HTTP
                  or WebSocket.
                </li>
              </ul>
            </li>
            <li>
              <strong>Server Handling</strong>:
              <ul className="ml-4 mb-2">
                <li>
                  {" "}
                  The <button type="button">Node.js&nbsp;</button>server
                  receives, processes, and stores the data.
                </li>
                <li>
                  APIs are provided for accessing real-time data and video
                  feeds.
                </li>
              </ul>
            </li>

            <li>
              <strong>Client Interface</strong>:
              <ul className="ml-4 mb-2">
                <li>
                  <strong>Map Integration</strong>: A map interface displays the
                  real-time location of each truck, enabling easy tracking of
                  routes and deviations.
                </li>
                <li>
                  <strong>Video Playback</strong>: The system offers video
                  playback features, allowing users to review past footage from
                  the IP cameras. This includes event-triggered recordings for
                  specific incidents, providing valuable insights into driver
                  behavior and road conditions.
                </li>
              </ul>
            </li>
            <li>
              <strong>Route Deviation Detection</strong>:
              <ul className="ml-4 mb-2">
                <li>
                  <strong>GPS Data Analysis</strong>: Compare the vehicle&apos;s
                  current location with predefined routes.
                </li>
                <li>
                  <strong>Deviation Alerts</strong>: Send alerts to the driver
                  and control center if the vehicle deviates from the route by a
                  set distance (parameterized, e.g., 100 meters).
                </li>
              </ul>
            </li>
            <li>
              <strong>Idle Time Monitoring</strong>:
              <ul className="ml-4 mb-2">
                <li>
                  <strong>Engine Status Tracking</strong>: Monitor periods when
                  the vehicle is stationary but the engine is running.
                </li>
                <li>
                  <strong>Idle Time Alerts</strong>: Generate alerts if idle
                  time exceeds a predefined threshold, indicating potential
                  inefficiencies.
                </li>
              </ul>
            </li>
            <li>
              <strong>Video Feed Recording</strong>:
              <ul className="ml-4 mb-2">
                <li>
                  <strong>Continuous Recording</strong>: Capture continuous
                  video feed from the IP cameras.
                </li>
                <li>
                  <strong>Event-Triggered Recording</strong>: Record video clips
                  when specific events occur (e.g., route deviations, idle
                  times, driver absence).
                </li>
                <li>
                  <strong>Storage and Retrieval</strong>: Save video clips in
                  cloud storage and provide access through the client
                  application.
                </li>
              </ul>
            </li>
          </ul>

          <h3 className="mt-4">Hardware Setup</h3>
          <ul className="text-left text-sm">
            <li>
              <span className="text-sm font-semibold">Raspberry Pi:</span>
              <p className="ml-4 mb-2">
                Install the operating system and connect the GPS module and IP
                cameras.
              </p>
              <ul className="ml-4 mb-2">
                <li>
                  <span className="text-sm font-semibold">Location:</span>{" "}
                  Inside the chassis of each truck.
                </li>
                <li>
                  <span className="text-sm font-semibold">Accessibility:</span>{" "}
                  Accessible via local intranet.
                </li>
                <li>
                  <span className="text-sm font-semibold">
                    Operating System:
                  </span>{" "}
                  Running embedded Linux.
                </li>
              </ul>
            </li>
            <li>
              <span className="text-sm font-semibold">GPS Unit:</span>
              <p className="ml-4 mb-2">
                Ensure proper configuration for accurate location data.
              </p>
              <ul className="ml-4 mb-2">
                <li>
                  Provides real-time location data with accuracy up to 2.5
                  meters.
                </li>
                <li>
                  Routes are predefined and available in latitude and longitude
                  format.
                </li>
              </ul>
            </li>
            <li>
              <span className="text-sm font-semibold">IP Cameras:</span>
              <p className="ml-4 mb-2">
                Each truck is equipped with two 1 MP IP cameras:
              </p>
              <ul className="ml-4 mb-2">
                <li>One mounted in the cabin for monitoring the driver.</li>
                <li>One mounted externally for monitoring the road.</li>
              </ul>
            </li>
            <li className="mb-2">
              <span className="text-sm font-semibold">Power Supply:</span>{" "}
              Ensure a stable power source for continuous operation.
            </li>
            <li>
              <span className="text-sm font-semibold">Application:</span>
              <ul className="ml-4 mb-2">
                <li>
                  The application running on the Raspberry Pi is written in
                  Python.
                </li>
                <li>The back-end application is on Node JS run-time.</li>
                <li>The front-end is an Angular SPA application.</li>
              </ul>
            </li>
          </ul>

          <h3 className="mt-4">Software Setup</h3>
          <ul className="text-left text-sm">
            <li>
              <strong>GPS Data Collection</strong>: Use a Python script to read
              and parse GPS data from the module.
            </li>
            <li>
              <strong>Data Transmission</strong>: Send GPS and video data to the
              server using HTTP or WebSocket.
            </li>
            <li>
              <strong>Sockect Data Reception</strong>: Write a program (e.g., in
              Python) to read data from the GPS module. This data typically
              includes latitude, longitude, speed, and timestamp.
            </li>
            <li>
              <strong>Data Processing</strong>: Parse the GPS data to extract
              latitude, longitude, speed, and other relevant information.
            </li>
            <li>
              <strong>Data Parsing</strong>: Process the raw GPS data to extract
              relevant information. This involves parsing the data into a
              structured format like JSON.
            </li>
            <li>
              <strong>Server</strong>: Node.js server to receive GPS data from
              the Raspberry Pi and send it to the client application.
            </li>
            <li>
              <strong>Communication with Node.js Server</strong>: Develop a
              mechanism to send the parsed GPS data to a Node.js server. This
              can be achieved using HTTP or WebSocket protocols for real-time
              data transmission.
            </li>
            <li>
              <strong>Video Feed Management</strong>: Capture video feed from
              the IP cameras using appropriate libraries.
            </li>
          </ul>
          <h3 className="mt-4">Data Flow</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/GPS Data Flow.png`}
              alt="GPS Data Flow"
            />
          </div>
          <ul className="text-left text-sm">
            <li>
              <strong>GPS Data Collection</strong>: The GPS module continuously
              collects location data and sends it to the Raspberry Pi.
            </li>
            <li>
              <strong>Data Processing</strong>: A Python script on the Raspberry
              Pi processes the GPS data, parsing it into a structured format
              (JSON).
            </li>
            <li>
              <strong>Data Transmission</strong>: The Raspberry Pi sends the
              structured GPS data to the Node.js server using HTTP or WebSocket.
            </li>
            <li>
              <strong>Server Handling</strong>: The Node.js server receives the
              GPS data, processes it if necessary and stores it in a database
              for historical tracking, and provides APIs for client access.
            </li>
            <li>
              <strong>Client Requests</strong>: The client application
              periodically requests the latest GPS data from the Node.js server.
            </li>
            <li>
              <strong>GPS and Video Data Collection</strong>: GPS module and IP
              cameras collect location and video data, sending it to the
              Raspberry Pi.
            </li>
            <li>
              <strong>Map and Video Updates</strong>: The client application
              updates the map with the vehicle&apos;s location and streams live
              video feeds, as well as providing video playback for past events.
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
