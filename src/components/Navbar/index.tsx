import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import logo from '../../assets/adriantodt-logo.svg';
import styled from '@mui/material/styles/styled';

const Logo = styled('img')({
  maxWidth: 40,
});

export default function AppNavbar() {
  return <AppBar position="fixed">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Logo src={logo} alt="AdrianTodt"/>
      </Toolbar>
    </Container>
  </AppBar>;
}
