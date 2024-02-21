import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "./hometimeline.css";
import "react-vertical-timeline-component/style.min.css";
import { MdNumbers } from "react-icons/md";

function HomeTimeline() {
  return (
    <VerticalTimeline>
      <div className="heading-timeline">
        <h1>
          How <span>We</span> Help?
        </h1>
      </div>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdNumbers />}
      >
        <h3 className="vertical-timeline-element-title">Issue Understanding</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
        <p>
          We listen attentively to understand the details of the problem you're
          facing.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // date="2010 - 2011"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdNumbers />}
      >
        <h3 className="vertical-timeline-element-title">Portal Expertise</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4> */}
        <p>
          We are well-versed in different complaint portals, ensuring guidance
          tailored to your specific issues.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // date="2008 - 2010"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdNumbers />}
      >
        <h3 className="vertical-timeline-element-title">
          Form Filling Assistance
        </h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
        <p>Form filling / Complaint registration by our experts </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // date="2006 - 2008"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdNumbers />}
      >
        <h3 className="vertical-timeline-element-title">Follow-up Support</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4> */}
        <p>
          Guiding you on post-complaint procedure, including tracking,
          responding to queries, and escalation if needed{" "}
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        // date="April 2013"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<MdNumbers />}
      >
        <h3 className="vertical-timeline-element-title">Continous Updates</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Online Course</h4> */}
        <p>
          Staying informed and updated to provide accurate and current
          assistance
        </p>
      </VerticalTimelineElement>
      {/* <VerticalTimelineElement
        className="vertical-timeline-element--education"
        // date="November 2012"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Agile Development Scrum Master
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
        <p>Creative Direction, User Experience, Visual Design</p>
      </VerticalTimelineElement> */}
      {/* <VerticalTimelineElement
        className="vertical-timeline-element--education"
        // date="2002 - 2006"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        // icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Bachelor of Science in Interactive Digital Media Visual Imaging
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>Creative Direction, Visual Design</p>
      </VerticalTimelineElement> */}
      {/* <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        // icon={<StarIcon />}
      /> */}
    </VerticalTimeline>
  );
}

export default HomeTimeline;
