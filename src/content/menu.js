const menu = {
  menu: [
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
      sub: [
        {id: 21, name: 'Учредительные документы', link: '/docs/organisational', sub: null},
        {id: 22, name: 'Нормативные документы', link: '/docs/regulatory', sub: null},
        {id: 23, name: 'Для заявителей', link: '/docs/for-clients', sub: null}
      ]
    },
    {
      id: 3,
      name: 'Деятельность', 
      link: '/work', 
      sub: [
        {id: 31, name: 'Ведение информационных ресурсов и баз данных', link: '/work/databases', sub: null},
        {id: 32, name: 'Региональный фонд пространственных данных', link: '/work/rfpd', sub: null},
        {id: 33, name: 'Мониторинг пассажирского транспорта', link: '/work/glonass', sub: null},
        {id: 34, name: 'Геодезия и картография', link: '/work/survey', sub: null},
        {id: 35, name: 'Землеустроительные и кадастровые работы', link: '/work/cadaster', sub: null},
        {id: 36, name: 'Образовательные проекты', link: '/work/education', sub: null},
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
      link: '/about', 
      sub: [
        {id: 51, name: 'История', link: '/about/history', sub: null},
        {id: 52, name: 'Структура', link: '/about/structure', sub: null}
      ]
    },
  ]
};

export default menu;