import '../styles/AboutMe.css';
import profilePic from '../assets/img (10).jpg'; // replace with your image


const desc = `Hey, I am Abror Asralov — a student software developer at the University of Arizona with a love for technology, creativity, and anything I can build with my own hands.\n
My journey into coding began with a curiosity about how the apps I used every day actually worked. That curiosity quickly turned into a passion. I dove deep into JavaScript, and before long, I found my stride in React — not just the web, but React Native too. Building mobile apps that people could actually use and interact with felt like unlocking a new superpower.\n
These days, I spend a lot of time developing mobile-first experiences and building full-stack projects, always looking for ways to make my code cleaner, faster, and more intuitive. I am constantly learning and pushing myself — whether it is solving tricky algorithm problems or exploring the latest features in modern React.\n
But I am not just behind the screen. Outside of class, I am a proud member of my university's Game Development Club. I love bringing game ideas to life — designing mechanics, coding interactions, and sometimes just goofing around with experimental ideas that somehow turn into fun projects. It is one of the few places where creative chaos and problem-solving meet perfectly.\n
I also share a long-running hobby with one of my best friends: building custom PCs. There is something incredibly satisfying about picking out each part, assembling it like a puzzle, and powering it on for the first time. It's our weekend ritual — sometimes paired with music, sunset drives, and spontaneous side quests for thermal paste.\n
When I am not building something (or breaking it to learn), you might find me watching an Arizona sunset, grinding through LeetCode challenges, or just sketching out the next weird app idea that popped into my head at 2 AM.\n
If there is one thread through everything I do — whether it is software, games, or hardware — it is this: I love creating. I build because it is fun. I code because it clicks. And I am just getting started.
`


const AboutMe = ( {scrollToProjects}) => {
  return (
    <div id='aboutme'>
        <div id='aboutmebox'>
        <img src={profilePic} alt="Abror" className="profile-pic" />
        <div className="bio">
            <h2>About Me</h2>
            <p>
                  {desc.split('\n').map((line, index) => (
                    <span key={index}>
                    {line}
                    <br />
                    </span>
                ))}
                  {/* Additional interactive line */}
              <span>
                Check out my{' '}
                <span onClick={scrollToProjects} style={{ cursor: 'pointer', color: '#ffffffff', fontWeight: 700 }}>
                  projects
                </span>
                
              </span>
            </p>
        </div>
        </div>
    </div>
  );
};

export default AboutMe;