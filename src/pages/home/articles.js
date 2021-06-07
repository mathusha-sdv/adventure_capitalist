import React from 'react';

const items = [{
  title: 'Le blob, étrange animal domestique et objet d’études scientifiques',
  description: 'Cet organisme unicellulaire sans cerveau mais doté d’intelligence va rejoindre la Station spatiale internationale pour des expériences en impesanteur. Une consécration pour cet « animal domestique » très particulier.',
  content: 'Qu’y a-t-il dans la valise de Thomas Pesquet ? Un casque de réalité virtuelle pour faire du vélo dans Paris, des emballages comestibles en pain d’épice, une playlist de 200 morceaux, une pince acoustique à ultrasons, des graines d’œillet d’Inde, des plats cuisinés de chefs étoilés…',
  img: 'https://img.lemde.fr/2021/06/02/0/0/2362/2362/1328/0/45/0/1c40620_652634442-000-9z4rq.jpeg'
}, {
  title: 'Un Italien de 80 ans à la mémoire autobiographique phénoménale',
  description: 'Des neuropsychologues italiens rapportent le cas d’un homme âgé doté d’hyperthymésie, qui possède une prodigieuse mémoire des événements qu’il a vécus.',
  content: 'C’est l’histoire d’un homme âgé de 80 ans qui possède une mémoire vertigineuse. Ses capacités mnésiques hors normes ont été évaluées par des chercheurs italiens qui rapportent leurs résultats dans un article publié en ligne le 1er juin 2021 dans la revue Cortex.',
  img: 'https://asset.lemde.fr/prd-blogs/2021/06/b1a8820c-hyperthyme%CC%81sie-hypermnesie-autobiographique-syndrome-hyperthymestique-me%CC%81moire-autobiographique-cerveau-performances-mnesiques-.jpg'
}];

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

const Articles = () => (
  <div className="row">
    {items.map((item) => (<Article item={item} />))}
  </div>
);

export default Articles;
