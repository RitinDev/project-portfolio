import './contact.css'
import { GithubFilled, LinkedinFilled, MailOutlined, InstagramOutlined } from '@ant-design/icons';
import ContactLink from '../../components/contact-link/contactLink';

type ContactObj = {
    icon: JSX.Element,
    link: string
    userName: string
}

const Contact = () => {
    const github: ContactObj = {
        icon: <GithubFilled />,
        link: 'https://github.com/RitinDev',
        userName: 'RitinDev'
    }

    const linkedin: ContactObj = {
        icon: <LinkedinFilled />,
        link: 'https://www.linkedin.com/in/ritin-malhotra/',
        userName: 'Ritin Malhotra'
    }

    const email: ContactObj = {
        icon: <MailOutlined />,
        link: 'mailto:rm5486@nyu.edu',
        userName: 'rm5486@nyu.edu'
    }

    const instagram: ContactObj = {
        icon: <InstagramOutlined />,
        link: 'https://www.instagram.com/ritinmalhotra/?hl=en',
        userName: 'ritinmalhotra'
    }

    return (
        <div className="contact">
            <h1 className='contact-heading'>Contact</h1>
            <h2>Reach out to me via: </h2>
            <div className="contact-links">
                <ContactLink icon={github.icon} link={github.link} userName={github.userName} />
                <ContactLink icon={linkedin.icon} link={linkedin.link} userName={linkedin.userName} />
                <ContactLink icon={email.icon} link={email.link} userName={email.userName} />
                <ContactLink icon={instagram.icon} link={instagram.link} userName={instagram.userName} />
            </div>
        </div>
    )
}

export default Contact;