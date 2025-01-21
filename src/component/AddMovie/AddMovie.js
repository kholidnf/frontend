import { useState } from "react";
import styles from './AddMovie.module.css';
import { nanoid } from "nanoid";

function AddMovie(props) {
    const { movies, setMovies } = props;
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        poster: "",
        type: "",
    });

    const { title, date, poster, type } = formData;

    // State untuk error
    const [errors, setErrors] = useState({
        title: false,
        date: false,
        poster: false,
    });

    // Fungsi handleChange
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        validate() && addMovie();
    }

    // Fungsi validasi form
    function validate() {
        const newErrors = {
            title: title === "",
            date: date === "",
            poster: poster === "",
        };

        setErrors(newErrors);

        return !newErrors.title && !newErrors.date && !newErrors.poster;
    }

    // Fungsi menambahkan movie
    function addMovie() {
        const movie = {
            id: nanoid(),
            title: title,
            year: date,
            type: type,
            poster: poster,
        };

        setMovies([...movies, movie]);
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    className={styles.input_form}
                    id="title"
                    name="title"
                    type="text"
                    value={title}
                    onChange={handleChange}
                />
                {errors.title && <p>Title Wajib Diisi</p>}

                <label>Date</label>
                <input
                    className={styles.input_form}
                    id="date"
                    name="date"
                    type="text"
                    value={date}
                    onChange={handleChange}
                />
                {errors.date && <p>Date Wajib Diisi</p>}

                <label>Poster</label>
                <input
                    className={styles.input_form}
                    id="poster"
                    name="poster"
                    type="text"
                    value={poster}
                    onChange={handleChange}
                />
                {errors.poster && <p>Poster Wajib Diisi</p>}

                <label>Type</label>
                <input
                    className={styles.input_form}
                    id="type"
                    name="type"
                    type="text"
                    value={type}
                    onChange={handleChange}
                />

                <button className={styles.button_form}>Add Movie</button>
            </form>
        </div>
    );
}

export default AddMovie;
