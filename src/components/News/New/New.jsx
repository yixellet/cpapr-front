import React from "react";
import { useParams } from 'react-router-dom';
import PageTitle from '../../PageTitle/PageTitle';

import classes from './New.module.css';

function New(props) {
  const ids = useParams().id;
  let news = props.content;
  const newsItem = news.find(function(f) {
    return (f.id === ids);
  });

  return (
    <main className={classes.background}>
      <section className={classes.content}>
      <PageTitle name={newsItem.title}/>
      <p>{newsItem.text}</p>
      </section>
    </main>
  )

}

export default New;
