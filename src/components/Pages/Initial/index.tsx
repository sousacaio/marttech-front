import React from 'react';
import { Row, Column, Container } from '../../Shared/Grid';
import Banner from './Banner';



const Home: React.FC = () => {


  return (
    <div style={{ height: '95vh' }}>
      <Container style={{ background: 'white' }} >

        <Row width={10} height={10} >
          
            <Banner />
          
        </Row>

      </Container>
    </div >
  );
};

export default Home;