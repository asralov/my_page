import '../styles/Projects.css'
import Card from '../components/Card.js'
const Projects = () => {
    return (
        <div id='projects'>
            <div id='projects_box'>
                <Card
                title="From Bud to Bloom"
                description="From Bud to Bloom is a 2D game where players nurture a plant through stages of growth in a vibrant, interactive environment. The game explores themes of renewal and transformation, earning first place in the Bloom into the New game jam."
                tools={['C#', 'Unity', 'Unity Version Control', 'Photoshop']}
                
                type="game"
                playLink="#"
                />
                <Card
                title="Fishing Simulator 2D"
                description="Fishing Simulator 2D is a 2D game jam project where players explore ocean environments and engage in dynamic fishing gameplay. Designed with an ocean theme, the game features responsive mechanics and cohesive visuals that bring the underwater world to life."
                tools={['C#', 'Unity', 'Unity Version Control', 'Photoshop']}
                type='game'
                playLink="#"
                />
                <Card
                title="Guessing Game"
                description="Guessing Game is a text-based game built in Assembly using Mars Simulator, where players guess a hidden number or word based on clues. The project highlights low-level programming and efficient logic execution through hardware-level interactions."
                tools={['Mars Simulator', 'Assembly']}
                sourceLink="#"
                />
                <Card
                title="Trie Data Structure"
                description="We built a Trie data structure in Java to enable fast string storage and retrieval for tasks like autocomplete and dictionaries. The project used Gradle for builds, JUnit5 for testing, and Git for team collaboration."
                tools={['Java', 'Git', 'Gradle', 'JUnit5']}
                sourceLink="#"
                />
                <Card
                title="Lose The Bias"
                description="For our CSC337 Web Development class, we built a news summarization web app that delivers short, AI-generated summaries of global events using ChatGPT. Users can create accounts, customize preferences, interact through comments and likes, and receive content tailored to their interests based on engagement."
                tools={['Python', 'JavaScript', 'HTML5', 'CSS3', 'MongoDB', 'Express.js', 'Digital Ocean', 'Git']}
                sourceLink="#"
                />
                <Card
                title="The Last Hero"
                description="The Last Hero is a game jam project where the player takes on the role of the last hero tasked with defeating a powerful witch. It’s an action-packed game centered around battling the witch to save the world."
                tools={['C#', 'Unity', 'Unity Version Control', 'Photoshop']}
                type='game'
                playLink="#"
                />
            </div>
        </div>
    )
}


export default Projects