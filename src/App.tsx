import { useRef } from 'react';

import styled from 'styled-components';

import Nav from './components/Nav';
import Intro from './components/Intro';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects';


const AppContainer = styled.div`
  // max-width: 100vw;
  // overflow-x: hidden;

  height: 100vh;
  width: 100vw;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`

const App = () => {
  const viewRef = useRef<HTMLInputElement>(null)

  const handleClickScroll = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      // Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return(
    <AppContainer>
      <Nav handleClickScroll={handleClickScroll}/>
      <Container>
        <div id='intro'><Intro /></div>
        <div id="experience"><Experience viewRef={viewRef} /></div>
        <div id="projects"><Projects viewRef={viewRef}/></div>
      </Container>
    </AppContainer>
  )
}

export default App;
