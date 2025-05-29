import { Timeline, TimelineEvent } from './TimeLineExp';

export function calculateDuration(startDate: string, showMonths: boolean): string {
  const start: Date = new Date(startDate);
  const now: Date = new Date();
  const diff: number = now.getTime() - start.getTime();
  const diffDate: Date = new Date(diff);
  const years: number = diffDate.getUTCFullYear() - 1970;
  const months: number = diffDate.getUTCMonth();

  if (years === 1 && months === 0) {
    return "1 year";
  } else if (!showMonths) {
    return `${years} years`;
  } else {
    return `${years} yr ${months} mos`;
  }
}

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title><a href='https://headstarter.co/' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>SWE Fellow @ Headstarter </a> | Jul '24 — Sep '24 </TimelineEvent.Title>

        <TimelineEvent.Description>
          Improved model optimization and API integration efforts, resulting in a 30% increase in response speed across AI tools,enhancing overall efficiency for the development team during six collaborative projects.
          <br/>Utilized techniques like real-time data handling, cache optimization, webhook integration, and state management to
          enhance customer support and ensure seamless performance for businesses.
          <br/>Optimized platform scalability and responsiveness, achieving 1,500+ downloads and onboarding 500+ users within the
          first week, showcasing strong adoption through efficient system architecture, automated workflows, and user-centric
          design
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>

        <TimelineEvent.Title>Jr MERN Developer @TurboDebt | Apr '23 - Mar '24</TimelineEvent.Title>

        <TimelineEvent.Description>
         Revamped website enhancing overall speed using techniques like lazy loading, code splitting, and debouncing,
        resulting in a 20% traffic increase. Also, added Google Analytics for better performance tracking.
        <br/>Integrated Digi Certificates as part of the website architecture, enhancing digital authentication and security measures
        across 1,000+ user accounts. Additionally, integrated Google Sheets API to streamline data management.
        <br/>Integrated a live chat API to enhance customer support, enabling real-time interactions and improving response
        efficiency by 10%.

        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent last>

        <TimelineEvent.Title>No Code and Front-end Intern @ 11-Seas | Nov '20 - Apr '21</TimelineEvent.Title>

        <TimelineEvent.Description>
          Completed 3 projects using Bubble and WordPress, improving user efficiency by 20% and increasing traffic by 30%.
          <br/>Designed 10+ responsive layouts and 5+ landing pages ensuring modern, mobile-friendly designs and boosting
          conversion rates by 15%.
          <br/>Optimized project workflows and reducing delivery times by 25%, while improving overall project management
          efficiency.
        </TimelineEvent.Description>

      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineExp;