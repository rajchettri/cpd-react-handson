import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ActionAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert
        severity="success"
        action={
          <Button color="inherit" size="small" onClick={close}>
            Close
          </Button>
        }
      >
        Employee Added!
      </Alert>
    </Stack>
  );
}