import './contact.css'
import { GithubFilled, LinkedinFilled, MailOutlined, InstagramOutlined } from '@ant-design/icons';
import ContactsGrid from '../../components/contacts-grid/contactsGrid';

const Contact = () => {
    return (
        <div className="contact">
            <h1 className='contact__contact-heading'>Contact</h1>
            <h2>Reach out to me via: </h2>
            <div className='contact__contacts-grid'>
                <ContactsGrid />
            </div>
        </div>
    )
}

export default Contact;