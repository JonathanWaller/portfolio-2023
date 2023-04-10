import { useEffect, useState, useRef } from 'react';
import { Menu } from 'react-feather';
import styled from 'styled-components';

import { navSections } from '../utils/common';

import { darkGray } from '../styles/colors';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    top: 20px;
    right: 20px;
    width: 100%;
    z-index: 999;
`

const StyledMenu = styled(Menu)`
    stroke: #1A1F36;
    stroke-width: 1.8px;
    height: 25px;
    width: 25px;
    position: relative;

    &:hover {
        cursor: pointer;
        stroke-width: 2px;
    }
`

const Popover = styled.div<{open: boolean}>`
    display: ${({open}) => open ? 'block' : 'none'};
    position: absolute;
    top: 2rem;
    right: 0;
    min-width: 6rem;
    padding: .5rem;
    background: transparent;
    // color: #FFFFFF;
    color: ${darkGray};
    backdrop-filter: blur(5px) contrast(.8);
    border-radius: 4px;
`

const List = styled.div`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ListItem = styled.div`
    padding: 0.5em;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

interface Props {
    handleClickScroll: (id:string) => void;
}

const Nav: React.FC<Props> = ({handleClickScroll}) => {
    const menuRef: any = useRef(null);
    const [ menuAnchorEl, setMenuAnchorEl ] = useState( null );

    const handleMenuToggle = ( event:any ) => {
        setMenuAnchorEl( menuAnchorEl ? null : event.currentTarget );
    };

    useEffect( () => {
        // Detecting click away
        const documentClickHandler = (e:any) => {
            if ( 
                menuRef.current && (
                    menuRef.current.contains( e.target ) ||
                    menuRef.current === e.target
                )
            ) {
                // In menu
                return;
            }
            // Not in menu
            setMenuAnchorEl( null );
            return;
        }    
        document.addEventListener( 'click', documentClickHandler );
        document.addEventListener( 'touchend', documentClickHandler );
        return () => {
            document.removeEventListener( 'click', documentClickHandler );
            document.removeEventListener( 'touchend', documentClickHandler );
        }
    }, [] );

    return( 
        <Container>
            <div  ref={ menuRef } onClick={ handleMenuToggle }>
                <StyledMenu />
                <Popover open={Boolean(menuAnchorEl)}>
                    <List>
                        {
                            navSections.map((section: any, index: number ) => (
                                <ListItem
                                    key={index}
                                    onClick={()=>handleClickScroll(section.section)}
                                >
                                    {section.display}
                                </ListItem>
                            ))
                        }
                    </List>
                </Popover>
            </div>
        </Container>
    )
}

export default Nav;