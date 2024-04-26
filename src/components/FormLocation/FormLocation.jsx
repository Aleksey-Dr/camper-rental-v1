
import css from './FormLocation.module.scss';

const FormLocation = () => {
    return (
        <form className={css.form}>
            <label htmlFor='location' className={css.label}>Location</label>
            <input
                type="text"
                id='location'
                className={css.input}
            />
        </form>
    );
};

export default FormLocation;