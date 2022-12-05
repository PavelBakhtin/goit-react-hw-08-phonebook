import { Typography, Box } from '@mui/material';
export const Section = ({ title, children }) => {
  return (
    <Box sx={{ m: 1 }}>
      <Typography variant="h3" component="h2" sx={{ mt: 2, mb: 2 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};
