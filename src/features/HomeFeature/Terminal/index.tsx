import Alert from '@mui/material/Alert';
import InputAdornment from '@mui/material/InputAdornment';
import Modal from '@mui/material/Modal';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import * as React from 'react';
import { useState } from 'react';

export interface TerminalProps {
  open: boolean;
  handleClose: () => void;
  enableShootingStars: () => void;
}

const autoComplete = [
  'shootingstars',
];

export default function Terminal(props: TerminalProps) {
  const [text, setText] = useState('');
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (text.length === 0) {
        return;
      }
      if (text === 'shootingstars') {
        props.enableShootingStars();
        props.handleClose();
      } else {
        setSnackbarMessage(`${text.split(' ')[0]}: command not found`);
        props.handleClose();
      }
      setText('');
    } else if (event.key === 'Tab') {
      event.preventDefault();
      const results = autoComplete.filter(item => item.startsWith(text));
      if (results.length === 1) {
        setText(results[0]);
      } else if (results.length > 1) {
        results.sort();
        const first = results[0];
        const last = results[results.length - 1];
        const length = last.length;
        let i = 0;
        while (i < length && first.charAt(i) === last.charAt(i)) i++;
        setText(first.substring(0, i));
      }
    }
  };
  return <>
    <Modal
      open={props.open}
      onClose={() => props.handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box maxWidth="sm" sx={{
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        // bgcolor: 'background.paper',
        // border: '2px solid #000',
        boxShadow: 24,
        // p: 4,
      }}>
        <TextField
          label="guest@adriantodt.net"
          fullWidth
          sx={{
            bgcolor: 'background.paper',
            '& .MuiFormLabel-root': {
              fontWeight: 600,
            },
            '& .MuiOutlinedInput-input': {
              fontFamily: 'monospace',
              fontWeight: 500,
            },
            '& .MuiInputAdornment-root .MuiTypography-root': {
              fontFamily: 'monospace',
              fontWeight: 600,
            },
            '& .MuiFormLabel-root.Mui-focused': {
              color: '#14f314',
            },
            '& .Mui-focused .MuiOutlinedInput-input': {
              color: '#14f314',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#14f314 !important',
            },
            '& .Mui-focused .MuiInputAdornment-root .MuiTypography-root': {
              color: '#14f314',
            },
          }}
          InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </Box>
    </Modal>
    <Snackbar open={snackbarMessage.length > 0} autoHideDuration={2000} onClose={() => setSnackbarMessage('')}>
      <Alert onClose={() => setSnackbarMessage('')} severity="error">
        {snackbarMessage}
      </Alert>
    </Snackbar>
  </>;
}
