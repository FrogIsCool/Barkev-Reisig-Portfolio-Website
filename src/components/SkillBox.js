
/**
 * A component that represents an individual skill or tool. Includes
 * an icon and a title that clarifies the icon.
 * 
 * @param props Data passed from parent. Includes img and title.
 */
function SkillBox(props) {
  const imagePath = './images/icons/';

  return (  
    <div className='SkillBox'>
      <img 
        src={require('' + imagePath + props.img)} 
        alt={props.title + ' Icon'} 
        height={100} 
        width={100}
      />
      <br/>
      {props.title}
    </div>
  );
}

export default SkillBox;