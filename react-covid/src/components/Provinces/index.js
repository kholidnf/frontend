import styles from "./index.module.css";
import Province from "../Province"

/** state digunakan untuk merender ulang component ketika state berubah */
function Provinces({provinces}) {
  return (
    <div className={styles.container}>
      <section className={styles.provinces}>
          <h1 className={styles.provinces__title}>Provinsi</h1>
          <h3 className={styles.provinces__description}>
            Data Covid Berdasarkan Provinsi
          </h3>
          <div className={styles.provinces__table__container}>
            <table className={styles.provinces__table} style={{width:"70%"}}>
              <thead>
              <tr className={styles.provinces__table__head}>
                <th>No</th>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Dirawat</th>
                <th>Meninggal</th>
              </tr>
              </thead>
              <tbody>
              {provinces?.map(function(province, index){
                console.log(province);
                return (
                  <Province key={index} province={province} index={index}/>
                )
            })}
              </tbody>       
            </table>
          </div>       
      </section>
    </div>
  );
}

export default Provinces;
