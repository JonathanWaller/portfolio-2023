import { useRef } from 'react';
import styled from 'styled-components';

import Nav from './components/Nav';
import Intro from './components/Intro';
// import Experience from './components/Experience/Experience';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import { sectionMargins } from './styles/mixins';


const AppContainer = styled.div`
  // height: 100vh;
  height: 100%;
  width: 100vw;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding-bottom: 25px;
  ${sectionMargins};
`

const App = () => {
  const viewRef = useRef<HTMLInputElement>(null)

  const handleClickScroll = (id:string) => {
    const element:any = document.getElementById(id);
    const navOffset = 65; 
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - navOffset;
    if (element) {
      // Will scroll smoothly to the top of the next section
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

    }
  };

  return(
    <AppContainer>
      <Nav handleClickScroll={handleClickScroll}/>
      <Container>
        <div id='intro'><Intro /></div>
        {/* <div id="experience"><Experience viewRef={viewRef} /></div> */}
        <div id='about'><About /></div>
        <div id="projects"><Projects viewRef={viewRef}/></div>
        <div id="contact"><Contact /></div>
      </Container>
    </AppContainer>
  )
}

export default App;
