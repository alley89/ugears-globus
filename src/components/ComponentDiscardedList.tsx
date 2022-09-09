import React from 'react';
import { Card, CardContent, CardMedia, ImageList, ImageListItem, Typography } from '@mui/material';
function ComponentDiscardedList(props: any) {
  return <ImageList sx={{
    height: 450,
    fontSize: 14,
  }} cols={1} gap={4}>
    {props.craftedTasks.wip.map((piece: any) => (
      <div key={(Math.random() + 1).toString(36).substring(7)} onDragStart={(e) => {props.onDragStart(e, piece[0].part, true)}} draggable className="draggable drag-container">
      <ImageListItem>
        <Card variant="outlined">
          <CardMedia
            component="img"
            height="140"
            image={props.levelPics.filter((pic: any) => pic.id === piece[0].id)[0].src}
            alt={piece[0].name}
          />
          <CardContent sx={{
            paddingBottom: 'unset'
          }}>
            <Typography sx={{
              color: '#46505A'
            }} variant="caption">
              {piece[0].name}
            </Typography>
          </CardContent>
        </Card>
      </ImageListItem>
      </div>
    ))}
  </ImageList>
}

export default ComponentDiscardedList;
