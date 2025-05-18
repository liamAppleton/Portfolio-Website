export const IconBar = ({ icons }) => {
  return (
    <div className="d-flex gap-2">
      {icons.map((Icon, i) => (
        <Icon key={i} size={25} className="non-link-icon" />
      ))}
    </div>
  );
};
