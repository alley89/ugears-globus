import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ComponentChoiceList from './ComponentChoiceList';
import CraftingSpace from './CraftingSpace';
import CraftingState from './CraftingState';
import ComponentDiscardedList from './ComponentDiscardedList';

function Container(props: any) {

  return <Grid container spacing={1} wrap={'wrap'}>
          <Grid item xs={5}>
            <Box sx={{ m: 3, p: 2, border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: '4px' }}>
              <Typography sx={{
                color: '#46505A'
              }} variant="overline">
                Drag the next piece from the list
              </Typography>
              <ComponentChoiceList pieces={props.pieces} />
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box sx={{ m: 3, p: 2, border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: '4px' }}>
              <Typography sx={{
                color: '#46505A'
              }} variant="overline">
                You are currently at level 2
              </Typography>
              <CraftingSpace />
            </Box>
            <Box sx={{ m: 3, p: 2, border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: '4px' }}>
              <Typography sx={{
                color: '#46505A'
              }} variant="overline">
                Next state
              </Typography>
              <CraftingState />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box sx={{ m: 3, p: 2, border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: '4px' }}>
              <Typography sx={{
                color: '#46505A'
              }} variant="overline">
                Drop piece here
              </Typography>
              <ComponentDiscardedList  pieces={props.pieces}/>
            </Box>
          </Grid>
        </Grid>
}

export default Container;