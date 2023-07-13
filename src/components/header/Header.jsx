import React, { useState } from 'react';
import HeaderImg from '../images/dweepio1.svg';
const Header = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState([]);
  const submitHandler = () => {
    let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    setAuthenticated(regex.test(email));
    if (!authenticated) setError(['Please Enter Valid Email']);
    else if (authenticated) setError([]);
  };
  return (
    <div>
      <header>
        <div className="left-section">
          <h2 className="heading-text">
            An inspiring design delivered to your inbox every morning
          </h2>
          <p>
            Our team scouts the internet for the best designs, illustrations and
            art and delivers a truly inspiring one every day to your inbox
          </p>
          <h4>Show me how it looks</h4>
          {!authenticated && (
            <>
              <p className="error-message">{error}</p>
              <form>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Your e-mail address"
                />
                <button type="submit" onClick={submitHandler}>
                  Register Now
                </button>
              </form>
              <span>Free - No Spam - No Data Sharing</span>
            </>
          )}
          {authenticated && (
            <>
              <h2 className="success-heading">Thank You!</h2>
              <span className="span-flex-start">
                Free - No Spam - No Data Sharing
              </span>
            </>
          )}
        </div>
        <div className="right-section">
          <img className="header-img" src={HeaderImg} alt="" />
        </div>
      </header>
    </div>
  );
};

export default Header;
