import PropTypes from 'prop-types';
import { Button, ButtonBox } from './Feadback.styled';

const btnName = ['good', 'neutral', 'bad'];
export const FeedbackOptions = ({ onLeaveFeedback }) => (
  <ButtonBox>
    {btnName.map(btn => (
      <Button
        key={btn}
        value={btn}
        type="button"
        onClick={e => onLeaveFeedback(e)}
      >
        {btn}
      </Button>
    ))}
  </ButtonBox>
);

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
