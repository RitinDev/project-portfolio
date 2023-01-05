// Note: UNUSED / DEPRECATED
import './contactLink.css'

type contactLinkProps = {
    icon: JSX.Element,
    link: string,
    userName: string
}

const ContactLink = ({ icon, link, userName }: contactLinkProps) => {
    return (
        <div className="contact-link">
            <a href={link} target="_blank" rel="noreferrer">
                <span>{icon}</span> <span>{userName}</span>
            </a>
        </div>
    )
}

export default ContactLink;