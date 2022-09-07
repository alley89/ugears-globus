import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function CraftingSpace() {

  return <Card sx={{ height: 320, backgroundColor: 'rgba(0, 0, 0, 0.12)' }} variant="outlined">
    <CardContent sx={{
      paddingBottom: 'unset',
      color: '#46505a'
    }}>
      <Typography sx={{ mb: 0.5 }} variant="body1">
        Drag images here
      </Typography>
      <KeyboardDoubleArrowDownIcon />
    </CardContent>
  </Card>
}

export default CraftingSpace;