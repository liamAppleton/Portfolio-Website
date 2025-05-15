import Card from 'react-bootstrap/Card';

export const SkillCard = ({ title, skills }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <ul>
          {skills.map((skill, i) => {
            return <li key={i}>{skill}</li>;
          })}
        </ul>
      </Card.Body>
    </Card>
  );
};
