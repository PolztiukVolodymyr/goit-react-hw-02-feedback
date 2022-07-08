import css from "./FeedbackOptions.module.css";



 const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return (
        <div className={css.btnWrap}>{options.map(name => (
            <button
                key={name}
                type="button"
                name={name}
                onClick={onLeaveFeedback}
                className={css.btn}
            
            >{name}
            </button>))}
        </div>
    );
};

export default FeedbackOptions;