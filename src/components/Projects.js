import ProjectBox from './ProjectBox.js'

/**
 * Component containing a list of projects.
 */
function Projects() {
  const spellAppProject = {
    title: '5e SRD Spell App',
    desc: 'A web app for D&D 5e that lists spells and info about them. Built using FERN stack.',
    link: 'https://github.com/FrogIsCool/5e-SRD-Spell-Info-Web-App',
    img: '5esrd_spells_app.png'
  };
  const textGameProject = {
    title: 'Text Based Console Game',
    desc: 'Framework for a command terminal based adventure game built in Java.',
    link: '',
    img: 'text_based_game.png'
  };
  const conwaysLifeProject = {
    title: 'Conway\'s Game of Life',
    desc: 'A simple JS program of Conway\'s Game of Life.',
    link: 'https://github.com/FrogIsCool/Conways-Game-of-Life',
    img: 'conways_life.png'
  };
  const projects = [spellAppProject, textGameProject, conwaysLifeProject];

  return (
    <div className='Projects' id='projects'>
      <h1>Selected Projects</h1>
      {/* Creates a list of projects to display based on data from projects array. List containing child elements with unique keys*/}
      <ul>
        {projects.map((project, index) => 
          <li key={index}>
            <ProjectBox 
              title={project.title}
              desc={project.desc}
              link={project.link}
              img={project.img}
            />
          </li>
        )}
      </ul>
    </div>
  );
}

export default Projects;