import css from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, percentage }) => {
    return (
        <ul className={css.statisticList}>
            <li className={css.statisticItem}>
                Good: {good}
            </li>
            <li className={css.statisticItem}>
                Neutral: {neutral}
            </li>
            <li className={css.statisticItem}>
                Bad: {bad}
            </li>
            <li className={css.statisticItem}>
                Total: {total}
            </li>
            <li className={css.statisticItem}>
                Positiv revievs: {percentage}%
            </li>
        </ul>
    );
};

export default Statistics;