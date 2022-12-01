import SkillBox from "./SkillBox";


/**
 * A component that lists a grid of boxes each of which represents
 * a particular skill or tool.
 */
function Skills() {

  return (
    <section className='Skills' id='skills'>
      <h1>Skills and Tools</h1>
      <div className='skill-grid'>
        <SkillBox 
          img='Java_icon.png'
          title='Java'
        />
        <SkillBox 
          img='C_icon.png'
          title='C'
        />
        <SkillBox 
          img='Python_icon.png'
          title='Python'
        />
        <SkillBox 
          img='JS_icon.png'
          title='JavaScript'
        />
        <SkillBox 
          img='HTML_icon.png'
          title='HTML'
        />
        <SkillBox 
          img='CSS_icon.png'
          title='CSS'
        />
        <SkillBox 
          img='React_icon.png'
          title='React'
        />
        <SkillBox 
          img='SQL_icon.jpg'
          title='SQL'
        />
      </div>
    </section>
  );
}

export default Skills;