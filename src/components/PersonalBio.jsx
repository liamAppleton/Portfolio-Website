import { Card, Row, Col } from 'react-bootstrap';
import bioPic from '../assets/BioPic.png';

export const PersonalBio = () => {
  return (
    <div className="py-4 d-flex flex-column align-items-center gap-3 p-2 mt-4 mb-4">
      <Card style={{ width: '90%' }} className="mx-auto p-0 bio-card">
        <Row className="d-flex justify-content-center align-items-center">
          <Col
            xs={12}
            md={4}
            className="d-flex flex-column gap-3 justify-content-center"
          >
            <Card.Img
              src={bioPic}
              style={{
                maxWidth: '250px',
                minWidth: '150px',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
          </Col>
          <Col xs={12} md={8}>
            <Card.Body>
              <h2 className="mb-2">Liam Appleton</h2>
              <p className="text-muted fs-4">Software Developer</p>
              <Card.Text>
                Programming is definitely my passion. I have recently completed
                the Northcoders Software Development (JavaScript) bootcamp,
                where I've had plenty of experience coding. From building
                dynamic front end user interfaces with React.js, to robust back
                end APIs with Node.js. I'm hungry to carry on learning new
                technologies and growing my skills as a developer. Lately, I’ve
                been diving into C#, embracing the challenge of building
                projects to deepen my understanding and consolidate my skills.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
