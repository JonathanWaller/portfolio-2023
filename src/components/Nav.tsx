import { useState } from 'react';
import styled from 'styled-components';

import { navSections } from '../utils/common';
import { darkGray, offWhite } from '../styles/colors';
import { breakpoints } from '../styles/breakpoints';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    width: 100%;
    z-index: 999;
    height: 60px;
    background: ${offWhite};
`

const StyledMenu = styled.nav<{open: boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    background: ${darkGray};
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;

    @media (max-width: ${breakpoints.md}px) {
        width: 100%;
        height: 100vh;
    }
  }
`

const StyledBurger = styled.button<{open: boolean}>`
  position: absolute;
  top: 20px;
  left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? `${offWhite}` : `${darkGray}`};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const ListItem = styled.div`
  color: ${offWhite};
  font-size: 30px;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

interface Props {
    handleClickScroll: (id:string) => void;
}

const Nav: React.FC<Props> = ({handleClickScroll}) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return( 
        <Container>
            <StyledMenu open={menuOpen}>
                {navSections.map((section: any, index: number ) => <ListItem key={index} onClick={() => {handleClickScroll(section.section); setMenuOpen(false)}}>{section.display}</ListItem>)}
            </StyledMenu>
            <StyledBurger open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
                <div />
                <div />
                <div />
            </StyledBurger>
        </Container>
    )
}

export default Nav;