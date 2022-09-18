import './TextField.css';
export interface ITextFieldProps {
  size: 'small' | 'medium' | 'large';
}

const TextField: React.FC<ITextFieldProps> = ({ size, ...rest }) => {
  return <input type='text' {...rest} className={`textfield ${size}`} />;
};

export default TextField;
