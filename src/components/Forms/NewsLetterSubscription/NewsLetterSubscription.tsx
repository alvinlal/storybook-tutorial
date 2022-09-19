import Button from '../../Buttons/Button/Button';
import TextField from '../../Inputs/TextField/TextField';

const NewsLetterSubscription: React.FC = () => {
  return (
    <div>
      <TextField size='medium' />
      <Button variant='primary'>Subscribe</Button>
    </div>
  );
};

export default NewsLetterSubscription;
