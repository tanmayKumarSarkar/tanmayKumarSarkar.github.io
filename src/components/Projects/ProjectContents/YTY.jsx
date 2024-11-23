import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const YTY = ({ project }) => {
  return (
    <div>
      <div className="YTY-wrapper project-wrapper">
        <div>
          <h2 className="uppercase">Workflow & Process</h2>
          <ul className="text-left text-sm mt-2">
            <li>
              In traditional recruiting, you can only pre-screen a small number
              of candidates because your time is limited. With YTY, invite as
              many as candidates as you wish. Include all your 'may be'
              candidates for video screening. You are likely to find some gems
              there.
            </li>
            <li>
              You shorten the recruitment cycle as it takes less time to screen
              candidates. You spend less time contacting, screening and
              interviewing candidates who do not match your needs.
            </li>
            <li>
              Candidates respond to your pre-set questions at their convenience.
              You view responses at your convenience.
            </li>
            <li>
              Video Interview in real time. You can take notes, record
              interview.
            </li>
          </ul>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Process Flow.png`}
              alt="Process Flow"
            />
          </div>
          <h3 className="mt-4 capitalize">One-way Recruitment Process </h3>
          <ul className="text-left text-sm">
            <li>Candidate Profile is Short-listed & processed.</li>
            <li>
              Recruiter selects candidates to pre-screen. Sends them an email
              link with pre-set questions.
            </li>
            <li>
              Candidates video record their responses at their convenience using
              a computer or mobile device.
            </li>
            <li>
              Recruiter reviews responses, Shares with hiring team. Invites
              shortlisted candidates for in-person person.
            </li>
          </ul>
          <h3 className="mt-4 capitalize">Live Recruitment Process </h3>
          <ul className="text-left text-sm">
            <li>Candidate Profile is Short-listed & processed.</li>
            <li>
              Video Interview in real time. You can take notes, record interview
            </li>
            <li>
              Candidates & Recruiter Can Have Their Live Question-Answer using a
              computer or mobile device
            </li>
            <li>
              Recruiter reviews responses, Shares with hiring team. Invites
              shortlisted candidates
            </li>
          </ul>
        </div>
        <div>
          <h2 className="my-4 uppercase">Features</h2>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Features.jpg`}
              alt="Features"
            />
          </div>
          <ul className="text-left text-sm">
            <li>Password Management</li>
            <li>Multiple Users</li>
            <li>Web Security</li>
            <li>Encryption</li>
            <li>Multiple Job Post</li>
            <li>Email Invitation</li>
            <li>Responsive web view </li>
            <li>Video & Audio Interview </li>
            <li>Live Interview</li>
            <li>Backup Response Data</li>
            <li>Multiple Reviews</li>
            <li>Session control</li>
            <li>Question Library</li>
            <li>PayPal Gateway</li>
            <li>User Access Control</li>
            <li>Notification Management</li>
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

export default YTY;
