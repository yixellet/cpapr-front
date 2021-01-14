const menu = {
  menu: [
    {
      id: 6,
      name: 'Главная', 
      link: '/', 
      sub: null
    },
    {
      id: 1,
      name: 'Новости', 
      link: '/news', 
      sub: null
    },
    {
      id: 2,
      name: 'Документы', 
      link: '/docs', 
      sub: null
    },
    {
      id: 3,
      name: 'Деятельность', 
      link: '/work/databases', 
      sub: [
        {id: 31, name: 'Ведение информационных ресурсов и баз данных', link: 'databases', sub: null},
        {id: 32, name: 'Региональный фонд пространственных данных', link: 'rfpd', sub: null},
        {id: 33, name: 'Мониторинг пассажирского транспорта', link: 'glonass', sub: null},
        {id: 34, name: 'Геодезия и картография', link: 'survey', sub: null},
        {id: 35, name: 'Землеустроительные и кадастровые работы', link: 'cadaster', sub: null},
        {id: 36, name: 'Образовательные проекты', link: 'education', sub: null},
      ]
    },
    {
      id: 4,
      name: 'Контакты', 
      link: '/contacts', 
      sub: null
    },
    {
      id: 5,
      name: 'О нас', 
      link: '/about/history', 
      sub: [
        {id: 51, name: 'История', link: 'history', sub: null},
        {id: 52, name: 'Структура организации', link: 'structure', sub: null}
      ]
    },
  ]
};

export default menu;
