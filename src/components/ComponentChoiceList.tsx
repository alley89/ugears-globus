import React from 'react';
import { capitalize, Card, CardContent, CardMedia, ImageList, ImageListItem, Typography } from '@mui/material';

function ComponentChoiceList(props: any) {

  const date = new Date();

  return <ImageList sx={{
          height: 450,
          fontSize: 14,
          }} cols={2} gap={4}>
    {props.tasks.wip.map((piece: { id: number, img: string, name: string, category: string, part: number, crafted: number}) => (
            <div key={piece.id} onDragStart={(e) => props.onDragStart(e, piece.id)}  draggable className="draggable drag-container">
            <ImageListItem key={piece.id}  >
              <Card variant="outlined">
                <CardMedia
                  component="img"
                  height="140"
                  image={props.pics.filter((pic: any) => {  if(pic.id === piece.id){  console.log(piece.id); return pic}})}
                  alt={piece.name}
                />
                <CardContent sx={{
                  paddingBottom: 'unset'
                }}>
                  <Typography sx={{
                    color: '#46505A',
                    textTransform: 'capitalize'
                  }} variant="caption">
                    {piece.name}
                  </Typography>
                </CardContent>
              </Card>
            </ImageListItem>
             </div>
          ))}
        </ImageList>
}

export default ComponentChoiceList;
