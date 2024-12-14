import { FC } from "react";
import { Link } from "@tanstack/react-router";

import { Volume } from "../../api";

interface DetailsProps {
  volume: Volume;
}

const Details: FC<DetailsProps> = ({
  volume: { authors = [], description, imageLink, infoLink, publisher, title },
}) => {
  return (
    <div className="text-left">
      <img className="m-auto mb-4 w-3/5 max-w-64" src={imageLink} alt={`${title} book cover`} />
      <Link to={infoLink} target="_blank">
        <p className="text-xl mb-4">{title}</p>
      </Link>
      {authors.map((author, index) => (
        <p key={`${title}-${author}-${index}`} className="font-bold mb-4">
          {author}
        </p>
      ))}
      <p className="mb-4">{publisher}</p>
      <p className="mb-4">{description}</p>
    </div>
  );
};

export default Details;
