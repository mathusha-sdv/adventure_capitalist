import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';

import data from '../../components/data';
import Page from '..';

const Article = () => {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const itemSelected = data[id] || {};

  const handleOnClickMore = () => {
    setCount(count + 1);
  };

  const handleOnClickNegative = () => {
    if (count <= 0) {
      return;
    }

    setCount(count - 1);
  };

  if (!Object.keys(itemSelected).length) {
    return (<Redirect to={{ pathname: '/' }} />);
  }

  const { title, img, content } = itemSelected;

  return (
    <Page>
      <div className="row">
        <button type="button" onClick={handleOnClickMore}>+1</button>
        <button type="button" onClick={handleOnClickNegative}>-1</button>
        <h3>{`${title} ${count}`}</h3>
        <img src={img} alt="img" />
        <p>{content}</p>
      </div>
    </Page>
  );
};

export default Article;
