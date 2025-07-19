
import styles from '../styles/BookCard.module.css'
const BookCard = ({book})=>{

    const coverImage = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`  : 'https://via.placeholder.com/150x200?text=No+Cover';
    return (
        <div className={styles.card}>
        <img src = {coverImage} alt={book.title} className={styles.cover} />
        <h4 className={styles.title}>{book.title} </h4>
        <p className={styles.author}>{book.author}</p>
        {book.first_publish_year && (
            <p className={styles.year}>{book.first_publish_year}</p>
        )}
        </div>
    )

}

export default BookCard