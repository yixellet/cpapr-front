import React from "react";
import { useParams } from 'react-router-dom';
import Arrows from './Arrows/Arrows';
import PageTitle from '../../PageTitle/PageTitle';

import mainBlockStyles from '../../CommonMainBlock/CommonMainBlock.module.css';

function New(props) {
  const ids = useParams().id;
  let news = props.content;
  const newsItem = news.find(function(f) {
    return (f.id === ids);
  });
  const prevItem = news.indexOf(newsItem) + 1
  const nextItem = news.indexOf(newsItem) - 1

  return (
    <main className={mainBlockStyles.background}>
      <section className={mainBlockStyles.content}>
        <Arrows linkToPrev={`${news[prevItem].id}`} linkToNext={`${news[nextItem].id}`}/>
        <PageTitle name={newsItem.title}/>
        <p>{newsItem.text}</p>
      </section>
    </main>
  )

}

export default New;
