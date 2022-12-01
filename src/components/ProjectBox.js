
/**
 * A component for each individual project. Each contains an
 * image, description, and a link to the related repo.
 * 
 * @param props Data passed from parent. Includes title, desc, link, and image.
 */
function ProjectBox(props) {
  const imagePath = './images/project_screenshots/';

  /**
   * Conditional render of details link. Prevents render of
   * details when there is nothing to link to.
   */
  function DisplayLink() {
    if(props.link !== '') {
      return <a href={props.link}>Details →</a>
    } else {
      return <a></a>
    }
  }

  return (
    <div className='ProjectBox'>
      <figure>
        <img 
          src={require('' + imagePath + props.img)}
          alt={props.title + ' image'}
          width={350}
          height={200}
        />
      </figure>
      <div className='project-desc'>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <DisplayLink />
      </div>
    </div>
  );
}

export default ProjectBox;