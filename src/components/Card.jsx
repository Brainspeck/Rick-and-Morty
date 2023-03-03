import styles from '../styles/Card.module.css'
export default function Card({name, species, gender, image, onClose}) {
   return (
      <div className={styles.mainDiv}>
         <div className={styles.buttonContainer}> <button className={styles.exitButton} onClick={onClose}>X</button>
         </div>
         <div className={styles.dataContainer}>
            <h2>{name}</h2>
            <h3>{species}</h3>
            <h3>{gender}</h3>
         </div>
         <img className={styles.image} src={image} alt="" /> 
      </div>
   );
}
