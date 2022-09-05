import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import { useMemo } from 'react';
import Link from '@mui/material/Link';

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);
  return <Paper square elevation={1} sx={{ bgcolor: '#161616' }}>
    <Container sx={{ py: 3 }}>
      <Grid container>
        <Grid item>
          <Typography variant="h4" component="p">
            AdrianTodt
          </Typography>
          <Typography variant="subtitle2" component="p" sx={{ color: grey[400] }}>
            © {year}
          </Typography>
        </Grid>
        <Grid item sm/>
        <Grid item>
          <Typography variant="body2" component="p">
            This website was made with <Link href="https://reactjs.org/">React</Link>,
            {' '}<Link href="https://nextjs.org/">Next.js</Link>
            {' and '}<Link href="https://mui.com/">MUI</Link>.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Paper>
}
