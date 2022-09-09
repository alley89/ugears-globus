import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function CraftingState(props:any) {

  return <Card sx={{ height: 260 }} variant="outlined">
    <CardContent sx={{
      paddingBottom: 'unset'
    }}>
      <CardMedia
      className='crafting-state'
        component="img"
        height="200"
        width="200"
        image={props.finalImage}
      />
      <Typography sx={{
        color: '#46505a'
      }} variant="caption">
        Craft state
      </Typography>
    </CardContent>
  </Card>
}

export default CraftingState;
