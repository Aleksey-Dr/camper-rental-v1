import css from './Button.module.scss';

const Button = ({ title, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={css.btn}
        >
            { title }
        </button>
    );
};

export default Button;