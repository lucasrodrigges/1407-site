import { Box } from '@mui/material';
import React from 'react';
import {
  AddTask, Elderly, FitnessCenter, LocalHospital, MapsHomeWork, MonitorHeart,
} from '@mui/icons-material';
import ServicesTitle from './components/ServicesTitle';
import ServiceCard from './components/ServiceCard';

const services = [{
  title: 'CROSS | AULA EXPERIMENTAL GRATUITA',
  description: 'Descubra o poder transformador do CrossFit com a nossa experiência gratuita! Desafie seus limites, alcance novos patamares de condicionamento físico e faça parte da nossa comunidade apaixonada. Clique no botão abaixo para saber mais!',
  path: 'https://api.whatsapp.com/send?phone=5579991201407&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita.%20Quais%20dias%20e%20hor%C3%A1rios%20dispon%C3%ADveis?',
  icon: <FitnessCenter sx={{
    color: 'white01',
  }}
  />,
}, {
  title: 'Aerobic Conditioning | AULA EXPERIMENTAL GRATUITA',
  description: 'Experimente uma aula de condicionamento aeróbico e eleve seus treinos a um novo nível! Descubra a energia contagiante, a queima de calorias intensa e a melhoria da sua resistência cardiovascular. Junte-se a nós para uma experiência gratuita e descubra como o condicionamento aeróbico pode impulsionar seu condicionamento físico e proporcionar resultados surpreendentes. Clique no botão abaixo para saber mais!',
  path: 'https://api.whatsapp.com/send?phone=5579991201407&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20aula%20experimental%20para%20o%20Aerobic%20Conditioning.',
  icon: <MonitorHeart sx={{
    color: 'white01',
  }}
  />,
}, {
  title: 'FMI - Funcional na Melhor Idade | AULA EXPERIMENTAL GRATUITA',
  description: 'Aprimore sua qualidade de vida com o FMI - Funcional na Melhor Idade! Descubra como nosso programa personalizado de treinamento funcional pode ajudar você a se manter ativo, saudável e independente. Clique no botão abaixo para saber mais!',
  path: 'https://api.whatsapp.com/send?phone=5579991201407&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20aula%20experimental%20no%20FMI%20-%20Funcional%20mehor%20idade.',
  icon: <Elderly sx={{
    color: 'white01',
  }}
  />,
}, {
  title: 'AFM - Avaliação Funcional do Movimento',
  description: 'Descubra o poder da Avaliação Funcional do Movimento (AFM) e transforme a maneira como você se movimenta! Nosso programa exclusivo foi desenvolvido para ajudá-lo a identificar e corrigir desequilíbrios musculares, melhorar a mobilidade e otimizar seu desempenho físico. Com a AFM, você terá uma visão clara de como o seu corpo funciona e receberá orientações personalizadas para maximizar sua eficiência e prevenir lesões. ',
  path: 'https://api.whatsapp.com/send?phone=5579991201407&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20AFM%20-%20Avalia%C3%A7%C3%A3o%20funcional%20do%20movimento.',
  icon: <AddTask sx={{
    color: 'white01',
  }}
  />,
}, {
  title: 'Aluguel - Sala Consultório',
  description: 'Encontre o espaço perfeito para o seu consultório ou sala de atendimento! Oferecemos aluguel de salas consultórios, ideais para profissionais de saúde que buscam um ambiente acolhedor e bem equipado para receber seus pacientes. Nossas salas são cuidadosamente projetadas para oferecer conforto, privacidade e a infraestrutura necessária para garantir o sucesso do seu negócio. Localizadas em uma região estratégica, proporcionam fácil acesso e estacionamento conveniente. Clique no botão abaixo para saber mais!',
  path: 'https://api.whatsapp.com/send?phone=5579991201407&text=Ol%C3%A1,%20gostaria%20de%20saber%20os%20valores%20do%20aluguel%20da%20sala%20consult%C3%B3rio.',
  icon: <MapsHomeWork sx={{
    color: 'white01',
  }}
  />,
}, {
  title: 'Marque sua Consulta - Nutrição',
  description: 'Tenha uma consulta nutricional personalizada e alcance seus objetivos de saúde e bem-estar! Nossa nutricionista é especializada e pronta para oferecer orientações nutricionais individualizadas, ajudando você a adotar uma alimentação equilibrada e saudável. Clique no botão abaixo para saber mais!',
  path: 'https://api.whatsapp.com/send?phone=5579991201407&text=Ol%C3%A1,%20gostaria%20de%20marcar%20uma%20consulta%20com%20a%20nutricionista.',
  icon: <LocalHospital sx={{
    color: 'white01',
  }}
  />,
}];

export default function Services() {
  return (
    <Box
      id="services"
      sx={{
        height: {
          lg: '100vh',
        },
        width: {
          xs: '90%',
          sm: '75%',
          md: '80%',
        },
        maxWidth: '1368px',
        mb: {
          xs: 6,
          lg: 0,
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <ServicesTitle />

      <Box sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 2,
      }}
      >
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </Box>
    </Box>
  );
}
