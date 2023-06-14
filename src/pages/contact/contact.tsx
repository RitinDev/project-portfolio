import './contact.css'
import { GithubFilled, LinkedinFilled, MailOutlined, InstagramOutlined } from '@ant-design/icons';
import ContactsGrid from '../../components/contacts-lister/contactsLister';

const Contact = () => {
    return (
        <div className="contact">
            <h1 className='contact__contact-heading'>Contact</h1>
            <h2>Send me a mail!</h2>
            <div className='contact__contacts-grid'>
                <ContactsGrid />
            </div>
        </div>
    )
}

export default Contact;