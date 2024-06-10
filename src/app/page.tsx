import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm/ContactForm'
import GitHubLogo from '@/components/icons/GithubLogo';
import MastodonLogo from '@/components/icons/MastodonLogo';
import LinkedinLogo from '@/components/icons/LinkedInLogo';
import EmailIcon from '@/components/icons/EmailIcon';
import ToolsSection from '@/components/ToolsSection/ToolsSection';
import IntroSection from '@/components/IntroSection/IntroSection';
import ProjectsPreview from '@/components/ProjectsPreview/ProjectsPreview';

export default function Home() {
    return (
        <>
            <IntroSection />
            <ProjectsPreview />
            <ToolsSection />
            <ContactForm />
        </>
    )
}
