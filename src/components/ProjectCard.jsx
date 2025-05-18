import { Card, Row, Col } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { IconBar } from './IconBar';

export const ProjectCard = ({ projectData }) => {
  const { title, description, links, image, icons } = projectData;

  const handleImgClick = () => {
    const url = links.hosted ? links.hosted.link : links.github;
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  return (
    <Card
      style={{ maxWidth: '80%' }}
      className="mx-auto p-0 project-card custom-card"
    >
      <Row className="g-0">
        <Col md={12} lg={4} className="d-flex align-items-center">
          <Card.Img
            className="p-0 project-img"
            src={image}
            style={{
              height: '100%',
              objectFit: 'cover',
            }}
            onClick={handleImgClick}
          />
        </Col>
        <Col md={12} lg={8} className="d-flex flex-column">
          <Card.Body className="d-flex flex-column">
            <Card.Title>{title}</Card.Title>
            <Card.Text style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
              {description}
            </Card.Text>

            <div className="mt-auto d-flex justify-content-between align-items-center">
              <div className="d-flex gap-2">
                <Card.Link
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={25} className="link-icon" />
                </Card.Link>

                {links.hosted && (
                  <Card.Link
                    href={links.hosted.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {<links.hosted.icon size={25} className="link-icon" />}
                  </Card.Link>
                )}
              </div>

              <IconBar icons={icons} />
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};
