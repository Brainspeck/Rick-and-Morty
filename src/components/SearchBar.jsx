import styles from '../styles/SearchBar.module.css'
export default function SearchBar(props) {
   return (
      <div className={styles.searchBar}>
         <input type='search' />
      <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
