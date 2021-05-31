import React from 'react';
import { Row, Container } from '../../Shared/Grid';
import Banner from './Banner';
import ProductArea from './ProductArea';



const Home: React.FC = () => {


  return (
    <div style={{
      height: '100vh',
    }}>
      <Container style={{
        boxShadow: '3px 3px 3px 3px #9E9E9E',
        borderRadius: 10,
      }} >

        <Row width={10} height={5} style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, }} >
          <Banner />

        </Row>
        <Row width={10} height={5}
          style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10, }}  >
          <ProductArea />
        </Row>
      </Container>
    </div >
  );
};

export default Home;