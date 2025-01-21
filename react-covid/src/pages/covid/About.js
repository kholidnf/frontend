import React from 'react';
import styled from 'styled-components';
import pribadi from "./assets/pribadi.jpeg";
import igIcon from "./assets/ig.jpg";
import linkedIcond from "./assets/linkedin.png";
import githubIcon from "./assets/github.png";
// Styling untuk halaman About
const AboutWrapper = styled.div`
margin: 3rem auto;    
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const Image = styled.img`
  border-radius: 50%;
  margin: 0 auto;
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;

const SocialLinks = styled.div`
  display: inline;
  justify-content: center;
`;

const SocialLink = styled.a`
  margin: 0 10px;
  color: #333;
  text-decoration: none;
`;

// Komponen About
const About = () => {
  return (
    <AboutWrapper>
      <Image src={pribadi} alt="Profile Picture" width="400"/>
      <Description>
      Teknologi merupakan pembahasan yang seru saat ini bagi saya. Saya memiliki minat khusus dalam pengembangan web, baik front-end maupun back-end. 
     Selain fokus pada web, saya juga sedang mengembangkan keterampilan dalam pengembangan aplikasi mobile. Saya tertarik dalam menciptakan aplikasi mobile yang inovatif dan memberikan pengalaman yang baik kepada pengguna.
     Terima kasih telah mengunjungi halaman About saya!
      </Description>
      <SocialLinks>
        <SocialLink href="https://github.com/kholidnf/"><Image src={githubIcon} width="30"/> Kholid Saifullah</SocialLink>
        <SocialLink href="https://www.linkedin.com/in/kholid-saifullah-al-maslul-8910a622a/"><Image src={linkedIcond} width="30"/>KHOLID SAIFULLAH AL-MASLUL</SocialLink>
      </SocialLinks>
    </AboutWrapper>
  );
};

export default About;
