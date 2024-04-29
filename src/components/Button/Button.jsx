import css from './Button.module.scss';

const Button = ({ title, onClick }) => {
    return (
        <button
            onClick={onClick}
            type='button'
            className={css.btn}
        >
            { title }
        </button>
    );
};

export default Button;