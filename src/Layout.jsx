import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "./Card";
import "./CardStyle.css";

function Layout() {
  return (
    <div className="board">
      <Container>
        <Row>
          <Col>
            <Card
              author="M"
              title="Desayunos"
              date="02/05/2022"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus risus, pharetra a porttitor a, fringilla ut quam. Suspendisse potenti. Pellentesque varius lectus nec scelerisque"
              img="./1.jpg"
              heartFill="./heart.png"
              likeCount="99"
            />
          </Col>
          <Col>
            <Card
              author="S"
              title="Quiche Lorraine"
              date="02/05/2022"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus risus, pharetra a porttitor a, fringilla ut quam. Suspendisse potenti. Pellentesque varius lectus nec scelerisque"
              img="./2.jpg"
              heartFill="./heart.png"
              likeCount="74"
            />
          </Col>
          <Col>
            <Card
              author="U"
              title="Croque Monsieur"
              date="02/05/2022"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus risus, pharetra a porttitor a, fringilla ut quam. Suspendisse potenti. Pellentesque varius lectus nec scelerisque"
              img="./3.jpg"
              heartFill="./heart.png"
              likeCount="157"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card
              author="N"
              title="Chicken confit"
              date="02/05/2022"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus risus, pharetra a porttitor a, fringilla ut quam. Suspendisse potenti. Pellentesque varius lectus nec scelerisque"
              img="./4.jpg"
              heartFill="./heart.png"
              likeCount="55"
            />
          </Col>
          <Col>
            <Card
              author="I"
              title="Steak frites"
              date="02/05/2022"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus risus, pharetra a porttitor a, fringilla ut quam. Suspendisse potenti. Pellentesque varius lectus nec scelerisque"
              img="./5.jpg"
              heartFill="./heart.png"
              likeCount="132"
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Layout;
