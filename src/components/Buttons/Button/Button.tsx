import './Button.css';

export interface IButtonProps {
  variant: 'primary' | 'secondary' | 'danger' | 'success';
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({ variant = 'primary', children, ...rest }) => {
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
