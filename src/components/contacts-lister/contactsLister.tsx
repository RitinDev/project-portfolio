import './contactsLister.css'
import githubContact from '../../assets/images/contact-page/github-backdrop.jpeg'
import linkedinContact from '../../assets/images/contact-page/linkedin-backdrop.png'
import emailContact from '../../assets/images/contact-page/gmail-backdrop.jpeg'

import { GithubFilled, LinkedinFilled, MailOutlined } from '@ant-design/icons';

const socialMediaLinks = {
    github: 'https://github.com/RitinDev',
    linkedin: 'https://www.linkedin.com/in/ritin-malhotra/',
    email: '/project-portfolio/mail',
    // instagram: 'https://www.instagram.com/ritinmalhotra/?hl=en'
}

const logoStyle: React.CSSProperties = {
    fontSize: '2.75rem',
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    width: '100%',
};
const userNameStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    position: 'absolute',
    top: '42.5%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    width: '100%',
};

const ContactsGrid = () => {
    return (
        <div className="contacts-lister">
            <div className="contacts-lister-item mail" onClick={() => {
                window.open(socialMediaLinks.email, '_self')
            }
            }>
                <img src={emailContact} alt="email" />
                <MailOutlined style={logoStyle} className='contact-logo' />
                <p style={userNameStyle}>rm5486@nyu.edu</p>
            </div>
            <h3 className='secondary-contacts-heading'>Also, feel free to visit:</h3>
            <div className="secondary-contacts">
                <div className="contacts-lister-item github" onClick={() => {
                    window.open(socialMediaLinks.github, '_blank')
                }
                }>
                    <img src={githubContact} alt="github" />
                    <GithubFilled style={logoStyle} className='contact-logo' />
                    <p style={userNameStyle}>RitinDev</p>
                </div>
                <div className="contacts-lister-item linkedin" onClick={() => {
                    window.open(socialMediaLinks.linkedin, '_blank')
                }
                }>
                    <img src={linkedinContact} alt="linkedin" />
                    <LinkedinFilled style={logoStyle} className='contact-logo' />
                    <p style={userNameStyle}>Ritin Malhotra</p>
                </div>
            </div>
        </div>
    )
}

export default ContactsGrid