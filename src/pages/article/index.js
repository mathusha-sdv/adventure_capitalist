import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

import data from '../../components/data';
import Page from '..';

const Article = () => {
  const { id } = useParams();
  const itemSelected = data[id] || {};

  if (!Object.keys(itemSelected).length) {
    return (<Redirect to={{ pathname: '/' }} />);
  }

  const { title, img, content } = itemSelected;

  return (
    <Page>
      <div className="row">
        <h3>{title}</h3>
        <img src={img} alt="img" />
        <p>{content}</p>
      </div>
    </Page>
  );
};

export default Article;
