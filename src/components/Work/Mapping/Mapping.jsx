import React from "react";
import Carousel from '../../Carousel/Carousel';
import styles from '../../CommonTextBlock/CommonTextBlock.module.css';
import map_01 from '../../../images/work/maps_01.png';
import map_02 from '../../../images/work/maps_02.png';
import map_03 from '../../../images/work/maps_03.png';
import map_04 from '../../../images/work/maps_04.png';

class Mapping extends React.Component {
  constructor(props) {
    super(props);
    this.images = [map_01, map_02, map_03, map_04];
  }
  render() {
    return (
      <div className={styles.history}>
        {/* <img classыName={styles.image} alt='картинка'/> */}
        <Carousel images={this.images} />
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
