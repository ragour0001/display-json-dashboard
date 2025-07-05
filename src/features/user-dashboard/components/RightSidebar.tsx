import { DisplayConfig } from "../hooks/useDisplayConfig";
import DynamicContentRenderer from "./DynamicContentRenderer";

interface RightSidebarProps {
  config?: DisplayConfig;
}

export default function RightSidebar({ config }: RightSidebarProps = {}) {
  if (!config?.rightSidebar) {
    return null;
  }

  const rightSidebarContent = [
    {
      type: "right-sidebar",
      props: {
        content: [
          {
            type: "profile-overview",
            props: {
              title: config.rightSidebar.profileOverview.title,
              showMoreOptions: config.rightSidebar.profileOverview.showMoreOptions,
              profile: config.rightSidebar.profileOverview.profile
            }
          },
          ...(config.rightSidebar.insightsCard.showCard ? [{
            type: "insights-card",
            props: {
              icon: config.rightSidebar.insightsCard.icon,
              text: config.rightSidebar.insightsCard.text
            }
          }] : []),
          ...(config.rightSidebar.dailyStreak.showCard ? [{
            type: "daily-streak-card",
            props: {
              title: config.rightSidebar.dailyStreak.title,
              showSeeMore: config.rightSidebar.dailyStreak.showSeeMore,
              streakText: config.rightSidebar.dailyStreak.streakText,
              description: config.rightSidebar.dailyStreak.description,
              buttonText: config.rightSidebar.dailyStreak.buttonText,
              currentStreak: config.rightSidebar.dailyStreak.currentStreak,
              longestStreak: config.rightSidebar.dailyStreak.longestStreak
            }
          }] : []),
          ...(config.rightSidebar.rewards.showCard ? [{
            type: "rewards-card",
            props: {
              title: config.rightSidebar.rewards.title,
              subtitle: config.rightSidebar.rewards.subtitle,
              progressPercentage: config.rightSidebar.rewards.progressPercentage,
              buttonText: config.rightSidebar.rewards.buttonText
            }
          }] : []),
          ...(config.rightSidebar.upcomingEvents.showCard ? [{
            type: "upcoming-events-card",
            props: {
              title: config.rightSidebar.upcomingEvents.title,
              date: config.rightSidebar.upcomingEvents.date,
              buttonText: config.rightSidebar.upcomingEvents.buttonText
            }
          }] : []),
          ...(config.rightSidebar.banner.showBanner ? [{
            type: "banner",
            props: {
              activeDot: config.rightSidebar.banner.activeDot,
              totalDots: config.rightSidebar.banner.totalDots
            }
          }] : [])
        ]
      }
    }
  ];

  return (
    <DynamicContentRenderer 
      content={rightSidebarContent} 
      config={config}
    />
  );
}
