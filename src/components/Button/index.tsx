import "./Button.scss";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <div className="planet-button" onClick={onClick} role="button">
      {label}
    </div>
  );
};
