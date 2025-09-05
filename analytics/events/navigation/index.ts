import { ADMIN_CLICKED, AdminClickedPayload } from './admin-clicked'
import { APP_CLICKED, AppClickedPayload } from './app-clicked'
import { DEMO_CLICKED, DemoClickedPayload } from './demo-clicked'
import { DOCS_CLICKED, DocsClickedPayload } from './docs-clicked'
import { GITHUB_CLICKED, GithubClickedPayload } from './github-clicked'
import { LINKEDIN_CLICKED, LinkedinClickedPayload } from './linkedin-clicked'
import { LOGO_CLICKED, LogoClickedPayload } from './logo-clicked'
import { TWITTER_CLICKED, TwitterClickedPayload } from './twitter-clicked'
import { AI_AGENT_CLICKED, AiAgentClickedPayload } from './ai-agent-clicked'
import { STATUS_CLICKED, StatusClickedPayload } from './status-clicked'
import { BOOK_DEMO_CLICKED, BookDemoClickedPayload } from './book-demo-clicked'
import { ENSVOLUTION_CLICKED, EnsvolutionClickedPayload } from './ensvolution-clicked'
import { LETS_TALK_CLICKED, LetsTalkClickedPayload } from './lets-talk-clicked'
import { EXTENSION_CLICKED, ExtensionClickedPayload } from './extension-clicked'
import { CONTACT_US_CLICKED, ContactUsClickedPayload } from './contact-us-clicked'

export const NAVIGATION_EVENTS = {
    APP_CLICKED,
    ADMIN_CLICKED,
    DEMO_CLICKED,
    DOCS_CLICKED,
    GITHUB_CLICKED,
    LINKEDIN_CLICKED,
    LOGO_CLICKED,
    TWITTER_CLICKED,
    AI_AGENT_CLICKED,
    STATUS_CLICKED,
    BOOK_DEMO_CLICKED,
    ENSVOLUTION_CLICKED,
    LETS_TALK_CLICKED,
    EXTENSION_CLICKED,
    CONTACT_US_CLICKED,
} as const

export interface NavigationEventPayload {
    [LOGO_CLICKED]: LogoClickedPayload
    [DOCS_CLICKED]: DocsClickedPayload
    [APP_CLICKED]: AppClickedPayload
    [ADMIN_CLICKED]: AdminClickedPayload
    [GITHUB_CLICKED]: GithubClickedPayload
    [LINKEDIN_CLICKED]: LinkedinClickedPayload
    [TWITTER_CLICKED]: TwitterClickedPayload
    [DEMO_CLICKED]: DemoClickedPayload
    [AI_AGENT_CLICKED]: AiAgentClickedPayload
    [STATUS_CLICKED]: StatusClickedPayload
    [BOOK_DEMO_CLICKED]: BookDemoClickedPayload
    [ENSVOLUTION_CLICKED]: EnsvolutionClickedPayload
    [LETS_TALK_CLICKED]: LetsTalkClickedPayload
    [EXTENSION_CLICKED]: ExtensionClickedPayload
    [CONTACT_US_CLICKED]: ContactUsClickedPayload
    }
