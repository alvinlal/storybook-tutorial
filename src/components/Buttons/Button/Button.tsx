import './Button.css';

export interface IButtonProps {
  variant: 'primary' | 'secondary' | 'danger' | 'success';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({ variant = 'primary', onClick, children, ...rest }) => {
  console.log('ts');
  return (
    <button onClick={onClick} className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
