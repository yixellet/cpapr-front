import React from "react";

import styles from '../../CommonTextBlock/CommonTextBlock.module.css';

class Mapping extends React.Component {
  render() {
    return (
      <div className={styles.history}>
        {/* <img classыName={styles.image} alt='картинка'/> */}
        <p className={styles.text}>Обширная база геопространственных данных Астраханской области 
        позволяет учреждению производить различную картографическую продукцию, как в цифровом формате, 
        так и на бумажных носителях. Изготовление карт на заказ включает в себя полный 
        цикл подготовки материала: отрисовка графического макета, подбор оптимального размера, 
        масштаба и подходящего материала, печать и оформление в багет.</p>
      </div>
    )
  }
}

export default Mapping;
