import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Aayush Sharma. All rights reserved.</p>
      {/* Add social media links or other relevant information here */}
    </footer>
  );
}

export default Footer;
