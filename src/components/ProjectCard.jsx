import Card from 'react-bootstrap/Card';

export const ProjectCard = ({ projectData }) => {
  const { title, description, links, image } = projectData;
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Body>
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
      </Card.Body>
    </Card>
  );
};
