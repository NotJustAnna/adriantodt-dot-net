import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import logo from '../../../public/assets/adriantodt-logo.svg';
import styled from '@mui/material/styles/styled';

const Logo = styled('img')({
  maxWidth: 40,
});

export default function Navbar() {
  return <AppBar position="fixed">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Logo src={logo.src} alt="AdrianTodt"/>
      </Toolbar>
    </Container>
  </AppBar>;
}
