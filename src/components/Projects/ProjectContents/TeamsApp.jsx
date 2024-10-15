import React from "react";

const TeamsApp = ({ project }) => {
  return (
    <div>
      <div className="TeamsApp-wrapper project-wrapper">
        <div>
          <h2 className="mt-2 mb-4">Microsoft Team's App Development</h2>
          <p className="text-left text-sm">
            Developing a Microsoft Teams application using Node.js, ReactJS and
            C#
          </p>
          <h3 className="mt-4">Node.js Development:</h3>
          <ul>
            <li>
              <a
                class="tooltip-target"
                href="https://learn.microsoft.com/en-us/microsoftteams/platform/sbs-gs-nodejs"
                target="_blank"
              >
                <strong>Hello World with Node.js</strong>
              </a>
              : This tutorial helps you set up a new project, build, and deploy
              tab, bot, and message extension apps using Node.js
            </li>
            <li>
              <a
                class="tooltip-target"
                href="https://learn.microsoft.com/en-us/samples/officedev/microsoft-teams-samples/officedev-microsoft-teams-samples-app-complete-sample-nodejs/"
                target="_blank"
              >
                <strong>Microsoft Teams Bot in Node.js</strong>
              </a>
              : This sample project demonstrates various ways an app can
              integrate into Teams, providing patterns, templates, and tools for
              creating scalable bots
            </li>
          </ul>
          <h3 className="mt-4">C# Development:</h3>
          <ul>
            <li>
              <a
                class="tooltip-target"
                href="https://github.com/OfficeDev/Microsoft-Teams-Samples"
                target="_blank"
              >
                <strong>Microsoft Teams Samples</strong>
              </a>
              : The GitHub repository contains numerous samples in C# that
              showcase different capabilities of the Teams platform, such as
              tabs, bots, and messaging extensions
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mt-8">Key Features</h2>
          <h3 className="mt-4">Tabs</h3>
          <ul>
            <li>
              <strong>Custom Tabs</strong>: Embed your web content directly into
              Microsoft Teams.&nbsp;
              <a
                class="tooltip-target"
                href="https://devblogs.microsoft.com/microsoft365dev/microsoft-teams-development-all-you-need-to-know/"
                target="_blank"
              >
                Tabs can be added to both team channels and personal apps,
                providing a seamless way to integrate your web services
              </a>
            </li>
          </ul>
          <h3 className="mt-4">Bots</h3>
          <ul>
            <li>
              <strong>Conversational Bots</strong>: Create bots that interact
              with users through text, cards, and task modules.&nbsp;
              <a
                class="tooltip-target"
                href="https://devblogs.microsoft.com/microsoft365dev/microsoft-teams-development-all-you-need-to-know/"
                target="_blank"
              >
                Bots can help automate workflows, answer questions, and provide
                updates
              </a>
            </li>
          </ul>
          <h3 className="mt-4">Messaging Extensions</h3>
          <ul>
            <li>
              <strong>Search Commands</strong>: Allow users to search for
              information from an external system and insert it into a message.
            </li>
            <li>
              <a
                class="tooltip-target"
                href="https://devblogs.microsoft.com/microsoft365dev/microsoft-teams-development-all-you-need-to-know/"
                target="_blank"
              >
                <strong>Action Commands</strong>
              </a>
              : Enable users to initiate actions, such as creating a task or
              sending a notification, directly from the message compose area
            </li>
          </ul>
          <h3 className="mt-4">Adaptive Cards</h3>
          <ul>
            <li>
              <strong>Rich Interactive Content</strong>: Use Adaptive Cards to
              present rich, interactive content in conversations.&nbsp;
              <a
                class="tooltip-target"
                href="https://devblogs.microsoft.com/microsoft365dev/microsoft-teams-development-all-you-need-to-know/"
                target="_blank"
              >
                These cards can include text, images, buttons, and input fields
              </a>
            </li>
          </ul>
          <h3 className="mt-4">Meeting Apps</h3>
          <ul>
            <li>
              <a
                class="tooltip-target"
                href="https://devblogs.microsoft.com/microsoft365dev/microsoft-teams-development-all-you-need-to-know/"
                target="_blank"
              >
                <strong>
                  Pre-Meeting, In-Meeting, and Post-Meeting Experiences
                </strong>
              </a>
              : Develop apps that enhance the meeting experience by providing
              tools and information relevant to each stage of the meeting
              lifecycle
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mt-4">PRODUCT DELEVERABLES</h2>
          <h3 className="my-2">App Localization</h3>
          <div className="flex items-center justify-center pb-4">
            <img
              className="w-[70%] md:w-[50%] shadow-filter"
              src={`/assets/Projects/${project.Project}/appLocalizationModule.gif`}
              alt="App Localization"
            />
          </div>
          <ul>
            <li>
              Localize AppSource Listing: Providing metadata (descriptions,
              screenshots, name) in the languages you want your app to be listed
              in.
            </li>
            <li>
              Localize Strings in App Manifest: Use the Microsoft Teams app
              schema to add the localizationInfo property in your manifest.json
              file.
            </li>
            <li>Handling Localized Text Submissions.</li>
          </ul>
          <h3 className="my-2">Adaptive Card Actions</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[70%] md:w-[50%] shadow-filter"
              src={`/assets/Projects/${project.Project}/AdaptiveCardActions.gif`}
              alt="Adaptive Card Actions"
            />
          </div>
          <ul>
            <li>
              Universal Actions: Use Action.Execute to handle actions across
              different platforms like Teams and Outlook.
            </li>
            <li>
              User-Specific Views: Customize the view and actions on Adaptive
              Cards based on the user interacting with them.
            </li>
            <li>
              Sequential Workflow Support: Implement workflows where actions on
              cards trigger subsequent steps, maintaining the context and state
              across interactions.
            </li>
          </ul>
          <h3 className="my-2">App Authentication in Teams</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[70%] md:w-[50%] shadow-filter"
              src={`/assets/Projects/${project.Project}/app-auth.gif`}
              alt="app-auth"
            />
          </div>
          <ul>
            <li>
              Single Sign-On (SSO): Enable SSO to use the user's Teams identity
              for accessing your app. This simplifies the login process and
              enhances security.
            </li>
            <li>
              Third-Party OAuth Providers: Integrate with third-party OAuth
              providers like Google, Facebook, or GitHub to authenticate users.
              This can be useful if your app needs to support multiple identity
              providers.
            </li>
          </ul>
          <h3 className="my-2">Meeting Token App</h3>
          <div className="flex items-center justify-evenly py-4">
            <img
              className="w-[48%] md:w-[48%] shadow-filter"
              src={`/assets/Projects/${project.Project}/meetin-token-app-2.png`}
              alt="meetin-token-app-2.png"
            />
            <img
              className="w-[48%] md:w-[48%] shadow-filter"
              src={`/assets/Projects/${project.Project}/meetin-token-app-5.png`}
              alt="meetin-token-app-5.png"
            />
          </div>
          <ul>
            <li>
              Token Generation: The Meeting Token Generator app allows
              participants to request tokens sequentially, ensuring fair
              interaction opportunities during meetings.
            </li>
            <li>
              Real-Time Updates: updating token real-time to update token
              information in real-time for all participants, enhancing the
              meeting experience.
            </li>
            <li>
              User Interaction: Features include displaying the current token,
              generating tokens upon request, and allowing organizers to skip
              tokens.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mt-4">Architecture</h2>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%] shadow-filter"
              src={`/assets/Projects/${project.Project}/TeamsApp Architecture.png`}
              alt="TeamsApp Architecture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsApp;
