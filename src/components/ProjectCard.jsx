import { Card, Row, Col } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

export const ProjectCard = ({ projectData }) => {
  const { title, description, links, image } = projectData;
  return (
    <Card style={{ maxWidth: '80%' }} className="mx-auto p-0 project-card">
      <Row className="g-0">
        <Col md={12} lg={4} className="d-flex align-items-center">
          <Card.Img
            className="project-pic p-0"
            src={image}
            style={{
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Col>
        <Col md={12} lg={8}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
              {description}
            </Card.Text>
            <div>
              {links.hosted && (
                <Card.Link
                  href={links.hosted}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hosted version
                </Card.Link>
              )}
              <Card.Link
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={25} />
              </Card.Link>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};
