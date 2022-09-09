import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function CraftingSpace(props: any) {

  return <Card sx={{ height: 220, backgroundColor: '#fce8c2' }} variant="outlined" className={"droppable"} onDrop={(e) => props.onDrop(e, "complete")} onDragOver={(e) => props.onDragOver(e)}>

    <CardContent sx={{
      paddingBottom: 'unset',
      color: '#46505a'
    }}>
      <Typography sx={{ mb: 0.5, fontSize: '0.9rem' }} variant="body1">
        Drag images here
      </Typography>
      <span className="material-symbols-rounded">
        keyboard_double_arrow_down
      </span>
    </CardContent>
  </Card>
}

export default CraftingSpace;
