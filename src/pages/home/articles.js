import React from 'react';

const Article = ({ item }) => {
  const { title, description, img } = item;

  return (
    <div className="col-4 mt-5">
      <div className="card">
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="http://google.com" className="btn btn-primary">Lire article</a>
        </div>
      </div>
    </div>
  );
};

const Articles = ({ data }) => (
  <div className="row">
    {data.map((item) => (<Article item={item} />))}
  </div>
);

export default Articles;
