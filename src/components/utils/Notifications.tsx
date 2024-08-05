import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Notifications = () => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="info">This is an info Alert.</Alert>
      <Alert severity="info">This is an info Alert.</Alert>
      <Alert severity="info">This is an info Alert.</Alert>
      <Alert severity="info">This is an info Alert.</Alert>
    </Stack>
  );
}
 
export default Notifications;