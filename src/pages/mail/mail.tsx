import { useState, useEffect } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

import './mail.css';

type EmailJSData = {
    service_id: string,
    template_id: string,
    user_id: string,
    template_params: {
        message: string,
        from_email: string,
    }
}

const Mail = () => {
    const navigate: NavigateFunction = useNavigate();
    const handleCancel = () => {
        navigate('/contact');
    }

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<null | 'success' | 'failure'>(null);

    useEffect(() => {
        if (submissionStatus !== null) {
            const timer = setTimeout(() => setSubmissionStatus(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [submissionStatus]);

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    }

    const data: EmailJSData = {
        service_id: 'service_wwn2w5w',
        template_id: 'template_723zt9w',
        user_id: '23RWaqDPI5ZDrLQQS',
        template_params: {
            message: message,
            from_email: email,
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);
        try {
            await emailjs.send(data.service_id, data.template_id, data.template_params, data.user_id);
            setSubmissionStatus('success');
        } catch (error) {
            console.error(error);
            setSubmissionStatus('failure');
        } finally {
            setIsLoading(false);
        }
    }

    const validEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const checkFields = email === '' || message === '' || !validEmail(email);

    return (
        <div className="mail">
            <h1 className='mail-heading'>Get in Touch</h1>
            <form className="mail-form" onSubmit={handleSubmit}>
                {isLoading && <div className='confirmation-message'>Loading...</div>}
                {submissionStatus === 'success' && <div className='confirmation-message'>Email sent successfully!</div>}
                {submissionStatus === 'failure' && <div className='confirmation-message'>There was an error sending the email.</div>}
                <div className="mail-form-item">
                    <label htmlFor="email">Email*</label>
                    <input type="text" id="email" name="email" placeholder="Your email" onChange={handleEmail} />
                </div>
                <div className="mail-form-item">
                    <label htmlFor="subject">Message*</label>
                    <textarea id="subject" name="subject" placeholder="Write something" onChange={handleMessage}></textarea>
                </div>
                <div className="mail-form-buttons">
                    <button className='mail-form-submit' type="submit" disabled={checkFields}>Send Mail</button>
                    <button className='mail-form-cancel' type="button" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default Mail;
