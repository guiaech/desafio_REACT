import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Title = styled.h1`
 text-align: center;
 font-size: 2rem;
 font-family: sans-serif;
 color: blue;
`;

export const List = styled.ul`
 list-style: none;
 padding: 0;
 margin: 0;
 font-family: sans-serif;
`;

export const ListItem = styled.li`
 margin: .5rem 0;
 background: blue;
 color: #fff;
 padding: .5ren;
 text-align: center;
`;

export const Container = styled.div`
 widht: 100%;
 max-width: 991px;
 margin: 0 auto;
`

export const LinkHome = styled(Link)`
 display: block;
 width: 4rem;
 text-align: center;
 background-color: blue;
 padding: .5rem 0;
 color: #fff;
 margin: 2rem auto;

`