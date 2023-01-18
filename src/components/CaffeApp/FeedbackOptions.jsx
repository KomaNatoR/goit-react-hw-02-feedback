

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <>
          <button onClick={onLeaveFeedback} type="button" id="good">Good</button>
          <button onClick={onLeaveFeedback} type="button" id="neutral">Neutral</button>
          <button onClick={onLeaveFeedback} type="button" id="bad">Bad</button>
        </>
    );
};
export default FeedbackOptions;

// 