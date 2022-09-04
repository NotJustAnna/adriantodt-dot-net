import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import { useMemo } from 'react';

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);
  return <Paper square elevation={0.6}>
    <Container sx={{py:3}}>
      <Grid container>
        <Grid item>
          <Typography variant="h4" component="p">
            AdrianTodt
          </Typography>
          <Typography variant="subtitle2" component="p" sx={{color: grey[400]}}>
            © {year}
          </Typography>
        </Grid>
        <Grid item sm />
        <Grid item>
          <Typography variant="body2" component="p">
            This website was made with React and MUI
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Paper>
}
