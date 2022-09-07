import React from 'react';
import { Card, CardContent, CardMedia, ImageList, ImageListItem, Typography } from '@mui/material';

function ComponentChoiceList(props: any) {

  return <ImageList sx={{
          height: 450,
          fontSize: 14,
          }} cols={2} gap={4}>
          {props.pieces.map((piece: { id: number, img: string, name: string }) => (
            <ImageListItem key={piece.id} >
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

export default ComponentChoiceList;