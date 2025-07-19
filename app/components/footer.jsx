'use client'
import Link from 'next/link';

const Footer = () => {

    const footerItems = [
     {label: 'Home', href: '#'},
     {label: 'Tours', href: '#tours'},
     {label: 'About Us', href: '#stories'},
     {label: 'Offer', href: '#'},
     {label: 'Contact', href: '#contact'},
    ];
    return (
     <footer className="footer" id="footer">
      <div className="footer-list">
       {footerItems.map((item, index) => (
        <Link key={index} href={item.href} className="footer-link">
         {item.label}
        </Link>
       ))}
      </div>
      <p className="footer-paragraph">
       Copyright &copy; CodeAndCreate All Rights Reserved
      </p>
     </footer>
    );
}

export default Footer;
