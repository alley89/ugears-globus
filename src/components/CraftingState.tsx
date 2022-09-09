import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function CraftingState(props:any) {

  return <Card sx={{ height: 260 }} variant="outlined">
    <CardContent sx={{
      paddingBottom: 'unset',
      backgroundColor: '#eff6f0'
    }}>
      <CardMedia
        sx={{margin: 'auto', backgroundColor: '#fce8c2'}}
        className='crafting-state'
        component="img"
        height="200"
        width="200"
        image={props.finalImage}
      />
      <Typography sx={{
        color: '#46505a'
      }} variant="caption">
        You crafted this so far
      </Typography>
    </CardContent>
  </Card>
}

export default CraftingState;
