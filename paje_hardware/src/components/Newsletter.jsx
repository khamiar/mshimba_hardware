import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section id="newsletter">
      <div className="nlbg"></div>
      <div className="container">
        <div className="nlw text-center" data-aos="zoom-in">
          <span className="slbl" style={{ color: 'rgba(255,255,255,.7)' }}>
            Stay Connected
          </span>
          <h2 className="mb-3" style={{ color: '#fff' }}>
            Subscribe & Get Exclusive{' '}
            <span style={{ color: 'var(--secondary)' }}>Deals</span>
          </h2>
          <p className="mb-4" style={{ color: 'rgba(255,255,255,.78)' }}>
            Get 15% off your first order plus early access to new menu items
          </p>

          <div className="nl-form-wrap">
            <input
              className="nlinput"
              type="email"
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="nlbtn"
              onClick={handleSubscribe}
              style={
                subscribed
                  ? { background: '#4ade80', color: '#222' }
                  : {}
              }
            >
              {subscribed ? (
                '✓ Subscribed!'
              ) : (
                <>
                  <i className="fas fa-paper-plane me-1"></i> Subscribe
                </>
              )}
            </button>
          </div>

          <p style={{ color: 'rgba(255,255,255,.45)', fontSize: '.76rem', marginTop: 11 }}>
            <i className="fas fa-lock me-1"></i> No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}