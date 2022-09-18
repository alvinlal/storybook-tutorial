import './Button.css';

export interface IButtonProps {
  variant: string;
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({ variant = 'primary', children, ...rest }) => {
  return <button className={`button ${variant}`}>{children}</button>;
};

export default Button;
