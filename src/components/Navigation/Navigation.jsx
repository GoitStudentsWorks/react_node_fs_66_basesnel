// import { useLocation } from 'react-router-dom';
import {
  NavContainer,
  StyledLink,
  TextContainer,
  WrapperSearchIcon,
} from './Navigation.styled';
import { useMediaQuery } from 'react-responsive';
// import { ThemeProvider, useTheme } from '@mui/material';
// import { useState, useEffect } from 'react';
// import THEME from 'theme';
// import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';

const Navigation = ({ closeModal }) => {
  const isMobile = useMediaQuery({
    query: `(max-width: 1439px)`,
  });
  // const { pathname } = useLocation();

  // console.log(pathname);
  const handleLinkClick = e => {
    // console.log(e.target);

    if (e.target.nodeName === 'A' && isMobile) {
      closeModal();
    }
  };

  return (
    <NavContainer onClick={handleLinkClick}>
      <StyledLink to="/categories/:categoryName">Categories</StyledLink>
      <StyledLink to="/add">Add recipes</StyledLink>
      <StyledLink to="/my">My recipes</StyledLink>
      <StyledLink to="/favorite">Favorites</StyledLink>
      <StyledLink to="/shopping-list">Shopping list</StyledLink>
      <StyledLink to="/search">
        <WrapperSearchIcon />
        <TextContainer>Search</TextContainer>
      </StyledLink>
    </NavContainer>
  );
};

export default Navigation;
