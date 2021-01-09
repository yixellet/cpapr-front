import menu from './menu';
import leadImage from '../images/aerial-view-earth-exploration-flying-60132.jpg';

const mainPage = {
  lead: {
    name: `Центр
    пространственной аналитики и промышленного развития`,
    image: leadImage,
  },
  shortcuts: [
    {
      id: 0,
      name: 'Картография',
      link: menu.menu[3].sub[0].link,
    },
    {
      id: 1,
      name: 'Запрос данных РФПД',
      link: menu.menu[3].sub[1].link,
    },
    {
      id: 2,
      name: 'Мониторинг транспорта',
      link: menu.menu[3].sub[2].link,
    },
    {
      id: 3,
      name: 'Землеустройство и кадастр',
      link: menu.menu[3].sub[4].link,
    },
  ]
};

export default mainPage;
