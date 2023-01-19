import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
      <>
        {options.map(option=>{
          return (
            <button key={option} onClick={()=>onLeaveFeedback(option)} type="button">{option}</button>
          );
        })}
      </>
    );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

// 