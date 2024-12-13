import { Link } from "@tanstack/react-router";
import type { Volume } from "../../api";

interface ResultProps {
  result: Volume;
}

const Result = ({ result: { imageLink, authors, publisher, description, id, title } }: ResultProps) => {
  return (
    <div className="pb-4">
      <div className="flex pb-4">
        <img className="float-start" src={imageLink} alt={`Front cover of ${title}`} />
        <div className="flex flex-col items-start pl-4">
          <Link to="/details/$volumeId" params={{ volumeId: id }}>
            <p className="text-xl">{title}</p>
          </Link>
          {authors.map((author) => (
            <p className="font-bold">{author}</p>
          ))}
          <p>{publisher}</p>
        </div>
      </div>
      <p className={`${description.length > 180 ? "line-clamp-6" : ""} text-left max-h-48`}>{description}</p>
    </div>
  );
};

export default Result;
