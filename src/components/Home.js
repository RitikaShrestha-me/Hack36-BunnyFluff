import Hero from './Hero'
import About from './About'
import Contributions from './Contributions'
import Intro from './Intro';
import Instruction from './Instruction'
const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Intro />
            <Instruction />
            <Contributions />
        </div>
    );
}
 
export default Home;