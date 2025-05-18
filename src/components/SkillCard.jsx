import Card from 'react-bootstrap/Card';

export const SkillCard = ({ skillsData }) => {
  const { title, skills, Icon } = skillsData;
  return (
    <Card style={{ width: '15rem' }} className="custom-card">
      <Card.Body>
        <div className="d-flex flex-row align-items-center justify-content-between gap-2 mb-4">
          <Card.Title className="mb-0 p-0 text-body-style">{title}</Card.Title>
          <Icon size={20} className="p-0 non-link-icon" />
        </div>
        <ul className="list-unstyled text-body-style">
          {skills.map((skill, i) => {
            return <li key={i} className="mb-2">{`✅ ${skill}`}</li>;
          })}
        </ul>
      </Card.Body>
    </Card>
  );
};
