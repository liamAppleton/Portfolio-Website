import { Card, Row, Col } from 'react-bootstrap';

export const ProjectCard = ({ projectData }) => {
  const { title, description, links, image } = projectData;
  return (
    <Card style={{ maxWidth: '100%' }} className="mx-auto">
      <Row className="g-0">
        <Col xs={12} md={4} className="d-flex align-items-center">
          <Card.Img
            src={image}
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </Col>
        <Col xs={12} md={8}>
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
                GitHub repo
              </Card.Link>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};
