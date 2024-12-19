import { Link } from "@tanstack/react-router";
import type { Volume } from "../../api";
import { MissingImage } from "../elements";

interface ResultProps {
  result: Volume;
}

const Result = ({ result: { imageLink, authors, publisher, description, id, title } }: ResultProps) => {
  return (
    <div className="mb-4 text-left">
      <div className="flex mb-4">
        {imageLink ? (
          <img className="float-start h-full" src={imageLink} alt={`Front cover of ${title}`} />
        ) : (
          <MissingImage />
        )}
        <div className="flex flex-col items-start pl-4">
          <Link to="/details/$volumeId" params={{ volumeId: id }}>
            <p className="text-lg">{title}</p>
          </Link>
          {authors.map((author, index) => (
            <p key={`${title}-author-${index}`} className="font-bold">
              {author}
            </p>
          ))}
          <p>{publisher}</p>
        </div>
      </div>
      <p className={`${description.length > 180 ? "line-clamp-6" : ""} text-left max-h-48`}>{description}</p>
    </div>
  );
};

export default Result;
