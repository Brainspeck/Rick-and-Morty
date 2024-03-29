import styles from '../styles/Card.module.css'
export default function Card(props) {
   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
          <button onClick={props.onClose}>✕</button>
         </div>
         <div className={styles.dataContainer}>
            <h2>{props.name}</h2>
            <h4>{props.species}</h4>
            <h4>{props.gender}</h4>
         </div>           
         <img className={styles.image} src={props.image} alt="" />
      </div>
   );
}
