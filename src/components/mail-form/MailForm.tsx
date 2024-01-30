import './MailForm.css';

type MailFormProps = {
    email: string;
    message: string;
    checkFields: boolean;
    handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleCancel: () => void;
    isLoading: boolean;
    submissionStatus: 'success' | 'failure' | null;
};

const MailForm = ({ email, message, checkFields, handleEmail, handleMessage, handleSubmit, handleCancel, isLoading, submissionStatus }: MailFormProps) => {
    return (
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
    );
};

export default MailForm;
