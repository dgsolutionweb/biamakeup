import React from 'react';
import { styled } from 'styled-components';
import { FaWhatsapp, FaInstagram, FaStar, FaUserPlus, FaShareAlt } from 'react-icons/fa';
import { GiLipstick, GiEyelashes, GiPowder, GiEyeTarget } from 'react-icons/gi';

const Container = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2.5rem;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(5px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-family: 'Poppins', sans-serif;
  position: relative;
  overflow: hidden;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const LogoContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const LogoImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ff4d8d;
  padding: 3px;
  background: white;
  box-shadow: 0 4px 15px rgba(255, 77, 141, 0.3);
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const LogoText = styled.h1`
  span.bia {
    background: linear-gradient(45deg, #ff4d8d, #ff8fb3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Poppins', sans-serif;
    letter-spacing: -1px;
    display: block;
    font-size: 3.2rem;
    font-weight: 700;
  }

  span.makeup {
    background: linear-gradient(45deg, #333, #666);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    letter-spacing: 4px;
    font-size: 1.8rem;
    text-transform: uppercase;
    display: block;
  }
`;

const LogoDecoration = styled.div`
  position: relative;
  margin: 15px 0;
  
  &::before, &::after {
    content: '♥';
    font-size: 1.2rem;
    color: #ff4d8d;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    left: 30%;
  }

  &::after {
    right: 30%;
  }

  span {
    display: inline-block;
    width: 50px;
    height: 2px;
    background: linear-gradient(to right, transparent, #ff4d8d, transparent);
    vertical-align: middle;
    margin: 0 15px;
  }
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 1px;
  margin-top: 0.5rem;
  font-style: italic;
`;

const Badge = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background: rgba(255, 77, 141, 0.1);
  color: #ff4d8d;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 500;

  svg {
    font-size: 0.8rem;
  }
`;

const ServicesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
`;

const ServiceCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  padding: 1.2rem 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: rgba(255, 255, 255, 0.98);
    transform: translateX(5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 1.8rem;
  color: #ff4d8d;
  filter: drop-shadow(0 2px 4px rgba(255, 77, 141, 0.2));
  transition: all 0.3s ease;
  
  ${ServiceCard}:hover & {
    transform: scale(1.1) rotate(-5deg);
    filter: drop-shadow(0 3px 6px rgba(255, 77, 141, 0.3));
  }
`;

const ServiceInfo = styled.div`
  flex: 1;
`;

const ServiceName = styled.h3`
  color: #222;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
`;

const ServiceDescription = styled.p`
  color: #444;
  font-size: 0.85rem;
  font-weight: 400;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 2rem;
`;

const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem 1.8rem;
  border-radius: 30px;
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  
  svg {
    font-size: 1.2rem;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
  
  &.whatsapp {
    background: linear-gradient(45deg, #25D366, #128C7E);
  }
  
  &.instagram {
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const ActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  border: none;
  background: rgba(255, 77, 141, 0.1);
  color: #ff4d8d;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;

  svg {
    font-size: 0.9rem;
  }

  &:hover {
    background: rgba(255, 77, 141, 0.2);
    transform: translateY(-2px);
  }
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 77, 141, 0.1);
`;

const Signature = styled.p`
  color: #999;
  font-size: 0.75rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 1rem;
`;

const App: React.FC = () => {
  const services = [
    { 
      icon: <GiLipstick />, 
      name: 'Micropigmentação Labial',
      description: 'Realce natural e duradouro para seus lábios'
    },
    { 
      icon: <GiPowder />, 
      name: 'Maquiagem',
      description: 'Looks personalizados para cada ocasião'
    },
    { 
      icon: <GiEyelashes />, 
      name: 'Cílios',
      description: 'Extensão e design para um olhar marcante'
    },
    { 
      icon: <GiEyeTarget />, 
      name: 'Sobrancelha',
      description: 'Design e harmonização facial'
    },
  ];

  const whatsappMessage = encodeURIComponent("Olá, eu gostaria de estar agendando um horário.");
  const whatsappLink = `https://wa.me/5517997766976?text=${whatsappMessage}`;

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Bia Makeup
TEL:+55 17 99776-6976
URL:https://instagram.com/biaaa.makeup
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'bia-makeup.vcf';
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Bia Makeup',
      text: 'Conheça a Bia Makeup - Realçando sua beleza natural',
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copiado para a área de transferência!');
      }
    } catch (error) {
      console.error('Erro ao compartilhar:', error);
    }
  };

  return (
    <Container>
      <Badge>
        <FaStar /> Profissional
      </Badge>

      <Header>
        <LogoContainer>
          <LogoImage src="/biamakeup/logo.jpeg" alt="Bia Makeup Logo" />
          <LogoText>
            <span className="bia">Bia</span>
            <span className="makeup">Makeup</span>
          </LogoText>
          <LogoDecoration>
            <span></span>♥<span></span>
          </LogoDecoration>
        </LogoContainer>
        <Subtitle>Realçando sua beleza natural</Subtitle>
      </Header>

      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceInfo>
              <ServiceName>{service.name}</ServiceName>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceInfo>
          </ServiceCard>
        ))}
      </ServicesGrid>

      <SocialLinks>
        <SocialButton 
          href={whatsappLink}
          target="_blank" 
          className="whatsapp"
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> Agendar
        </SocialButton>
        <SocialButton 
          href="https://instagram.com/biaaa.makeup" 
          target="_blank" 
          className="instagram"
          rel="noopener noreferrer"
        >
          <FaInstagram /> Instagram
        </SocialButton>
      </SocialLinks>

      <Footer>
        <ActionButtons>
          <ActionButton onClick={handleSaveContact}>
            <FaUserPlus /> Salvar
          </ActionButton>
          <ActionButton onClick={handleShare}>
            <FaShareAlt /> Compartilhar
          </ActionButton>
        </ActionButtons>
        <Signature>• Bia Makeup •</Signature>
      </Footer>
    </Container>
  );
};

export default App;
