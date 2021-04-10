import Hero from './Hero'
import About from './About'
import Contributions from './Contributions'
import Intro from './Intro';
import Instruction from './Instruction'
import Contact from './Contact'
const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Intro />
            <Instruction />
            <Contributions />
            <Contact />
        </div>
    );
}
 
export default Home;