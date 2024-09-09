
import '../style/Footer.css';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: grey;
  text-decoration: none;
  
  &:hover {
    color: #dc3545;
  }
`;


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <p>
          Concept and Development by 
          <StyledLink href="https://beviatori.com/"> Ekaterina Iliushkina</StyledLink>
      </p>
      <p>&copy; 2024 Marvel Characters App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
