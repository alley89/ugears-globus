import React from 'react';
import { Card, CardContent, CardMedia, ImageList, ImageListItem, Typography } from '@mui/material';
function ComponentDiscardedList(props: any) {
  return <ImageList sx={{
    height: 450,
    fontSize: 14,
  }} cols={1} gap={4}>
    {props.craftedTasks.wip.map((piece: { id: number, img: string, name: string, category: string, part: number, crafted: number }) => (
      <ImageListItem key={(Math.random()+1).toString(36).substring(7)} >
        <Card variant="outlined">
          <CardMedia
            component="img"
            height="140"
            image={piece.img}
            alt={piece.name}
          />
          <CardContent sx={{
            paddingBottom: 'unset'
          }}>
            <Typography sx={{
              color: '#46505A'
            }} variant="caption">
              {piece.name}
            </Typography>
          </CardContent>
        </Card>
      </ImageListItem>
    ))}
  </ImageList>
}

export default ComponentDiscardedList;
