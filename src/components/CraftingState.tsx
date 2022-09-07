import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function CraftingState() {

  return <Card variant="outlined">
    <CardContent sx={{
      paddingBottom: 'unset'
    }}>
      <Typography sx={{
        color: '#46505a'
      }} variant="caption">
        stadiul de craft
      </Typography>
    </CardContent>
  </Card>
}

export default CraftingState;