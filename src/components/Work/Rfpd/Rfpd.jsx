import React from "react";
import { Link } from "react-router-dom";
import styles from '../../CommonTextBlock/CommonTextBlock.module.css';

class Rfpd extends React.Component {
  render() {
    return (
      <div className={styles.history}>
        {/* <img className={styles.image} alt='картинка'/> */}
        <p className={styles.text}>На основании федерального закона от 30.12.2015 N 431-ФЗ (ред. от 03.08.2018) 
        "О геодезии, картографии и пространственных данных и о внесении изменений в отдельные 
        законодательные акты Российской Федерации" субъектами реализуется создание 
        региональных фондов пространственных данных. В Астраханской области такой фонд функционирует на базе ГАУ ОА «ЦПАПР». </p>
        <p className={styles.text}>Основными задачами на этом направлении является сбор, 
        каталогизация и хранение пространственных данных и материалов, 
        полученных в результате выполнения геодезических и картографических работ, 
        организованных органами государственной власти субъектов Российской Федерации 
        или подведомственными данным органам государственными учреждениями. 
        Также содействовать пополнению фонда пространственными данными может 
        любой субъект геодезической и картографической деятельности.</p>
        <ul className={styles.list}>В настоящее ведется актуализация топографических карт 
        Астраханской области масштаба 1 : 25000 по следующим направлениям: 
          <li className={styles.listItem}>сельскохозяйственная деятельность</li>
          <li className={styles.listItem}>недропользование, охрана окружающей среды и экология</li>
          <li className={styles.listItem}>водное хозяйство</li>
          <li className={styles.listItem}>дорожное хозяйство</li>
          <li className={styles.listItem}>лесное хозяйство</li>
        </ul>
        <p className={styles.text}>Формы для запроса данных из Фонда, а также для передачи данных в Фонд доступны в разделе <Link to="/docs" className={styles.link}>Документы</Link>.</p>
      </div>
    )
  }
}

export default Rfpd;
