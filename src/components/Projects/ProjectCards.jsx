import Buttons from "../Buttons/Buttons";

function ProjectCards(props) {
  return (
    <div className="flex flex-col gap-4">
      <img className="rounded-md" src={props.imgCard} alt="" />
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold ">{props.titleCard}</h2>
        <p className="text-sm font-light text-neutral-600 dark:text-customGrey">
          {props.descriptionCard}
        </p>
        <div className="flex items-center  gap-4">
          <Buttons
            title="Ver Website"
            href={props.hrefWebsite}
            target="_blank"
          />
          <Buttons
            title="Repositório Github"
            href={props.hrefRepository}
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
