

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <>
          <button onClick={onLeaveFeedback} type="button" id="Good">Good</button>
          <button onClick={onLeaveFeedback} type="button" id="Neutral">Neutral</button>
          <button onClick={onLeaveFeedback} type="button" id="Bad">Bad</button>
        </>
    );
};
export default FeedbackOptions;

// 