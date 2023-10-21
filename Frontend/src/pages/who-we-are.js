// pages/who-we-are.js

import React from 'react';

const centeredContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  textAlign: 'center',
};

const paragraphStyle = {
  fontSize: '3vw', /* Adjust the font size as needed */
  animation: 'fadeIn 2s', /* Add animation with your desired duration */
  lineHeight: '1.6', /* Adjust the line-height for spacing between lines */
  margin: '20px 0', /* Adjust the margin for spacing between paragraphs */
  // Additional styling properties as needed
};

const WhoWeAre = () => {
  return (
    <div style={centeredContentStyle}>
      <p style={paragraphStyle}>
        We are a premier derma clinic dedicated to providing a wide range of services to help you look and feel your best. Our team of experienced professionals is here to cater to your needs with expertise, care, and precision.
      </p>
      <p style={paragraphStyle}>
        At derma clinic, we're more than just a dermatology clinic. We are your partners in rejuvenation, your haven for relaxation, and your trusted experts in skincare and wellness. We invite you to get to know us better and discover what makes us stand out.
      </p>
    </div>
  );
};

export default WhoWeAre;
