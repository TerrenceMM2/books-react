import { Link } from "@tanstack/react-router";

import { Volume } from "../../api";

interface DetailsProps {
  volume: Volume;
}

const Details = ({ volume: { authors, description, imageLink, infoLink, publisher, title } }: DetailsProps) => {
  return (
    <div className="text-left">
      <img className="m-auto pb-4 w-3/5 max-w-64" src={imageLink} alt={`${title} book cover`} />
      <Link to={infoLink} target="_blank">
        <p className="text-xl pb-4">{title}</p>
      </Link>
      {authors.map((author, index) => (
        <p key={`${title}-${author}-${index}`} className="font-bold pb-4">
          {author}
        </p>
      ))}
      <p className="pb-4">{publisher}</p>
      <p className="pb-4">{description}</p>
    </div>
  );
};

export default Details;
