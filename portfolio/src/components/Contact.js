import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!process.env.REACT_APP_SERVER) {
      toast.info('Please use the email link to contact me.');
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_SERVER}/api/accept`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, query })
      });
      const data = await response.json();
      data.success ? toast.success(data.message) : toast.error(data.message);
      if (data.success) { setEmail(''); setQuery(''); }
    } catch (error) {
      toast.error('Unable to send your message. Please try email instead.');
    } finally { setLoading(false); }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="page-wrap contact-grid">
        <div className="contact-copy">
          <p className="section-kicker">GET IN TOUCH</p>
          <h2>Let's build something great together.</h2>
          <p>I'm open to frontend software engineering opportunities and interesting product challenges.</p>
          <a href="mailto:maheshguduru30@gmail.com" className="email-link">maheshguduru30@gmail.com <i className="bi bi-arrow-up-right"></i></a>
        </div>
        <form className="contact-form" onSubmit={submitHandler}>
          <label>Email address<input type="email" value={email} placeholder="you@example.com" onChange={e => setEmail(e.target.value)} required /></label>
          <label>Message<textarea value={query} placeholder="Tell me a little about the opportunity..." onChange={e => setQuery(e.target.value)} required rows="5" /></label>
          <button className="primary-button" disabled={loading}>{loading ? 'Sending...' : 'Send Message'} <i className="bi bi-send"></i></button>
        </form>
      </div>
      <footer className="site-footer"><div className="page-wrap footer-inner"><span>© {new Date().getFullYear()} MaheshDev</span><div><a href={process.env.REACT_APP_GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a><a href={process.env.REACT_APP_LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a></div></div></footer>
      <ToastContainer position="bottom-right" />
    </section>
  );
};

export default Contact;
