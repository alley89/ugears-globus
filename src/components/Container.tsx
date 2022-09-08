import React, { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import ComponentChoiceList from './ComponentChoiceList';
import CraftingSpace from './CraftingSpace';
import CraftingState from './CraftingState';
import ComponentDiscardedList from './ComponentDiscardedList';
import globusLevels from '../assets/levels-data.json';

function Container(props: any) {

  const getImageObjectById = (id:number) => {
    return props.pieces.filter((obj:any) => {
      return obj.id === id
    })
  };

  const getPartsToBeCraftedById = (id: number) => {
    console.log("getPartsToBeCraftedById", id);
    return globusLevels.globusLevels.filter((obj: any) => {
      return obj.id === id
    })
  };

  const getImageObjectByPart = (part: number, cat:string="") => {
    return props.pieces.filter((obj: any) => {
      if (cat) { return obj.part === part && obj.category === cat}
      return obj.part === part
    })
  };

  const setCraftedPieces = (pieceID:number) => {
    props.setPieces(props.pieces.map((piece:any) => {
      if (piece.id === pieceID) piece.crafted = 1
      return piece;
    }));
  }

  const onDragOver = (ev:any) => {
    ev.preventDefault();
  };

  const onDragStart = (ev:any, id:number) => {
    ev.dataTransfer.setData("id", id);
  };

  //idea: poate un buton de start si sa afisam un video al proiectului final
  const onDrop = (ev:any, cat:any) => {
    //verifica daca mai sunt imagini de drop-uit din acea parte si din toate - ce se intampla daca mai sunt imagini sau daca nu mai sunt
    //afiseaza imaginea ansamblului in cazul in care au fost toate imaginile drop=uite
    let id = parseInt(ev.dataTransfer.getData("id"));
    const imageDropped = getImageObjectById(id);
    const imagesFromSamePart = getImageObjectByPart(imageDropped[0].part);
    const leftImagesFromSamePart = getImageObjectByPart(imageDropped[0].part, "wip");
    if (props.currentPart === 0) {
      props.setCurrentPart(imageDropped[0].part);
    } else if (props.currentPart !== imageDropped[0].part) {
      alert("not from the same part");
      return ;
    }

    let completedTasks = props.pieces.map((task:any) => {
      if (task.id === id) {
        task.category = cat;
      }
      return task;
    });
    props.setPieces(completedTasks);

    //s-au terminat imaginile din aceeasi parte?
    if (leftImagesFromSamePart.length === 1) { // last image was dropped
      let newCompletedParts = props.completedParts;
      newCompletedParts.push(props.currentPart);
      props.setCompletedParts(newCompletedParts);
      props.setCurrentPart(0);
      imagesFromSamePart.forEach((el:any) => {
        setCraftedPieces(el.id);
      });
      let partsToBeCraftedArray = props.partsToBeCrafted;
      console.log("partsToBeCraftedArray before", partsToBeCraftedArray);
      let getPartsToBeCrafted = getPartsToBeCraftedById(leftImagesFromSamePart[0].part);
      console.log("getPartsToBeCrafted", getPartsToBeCrafted);
      partsToBeCraftedArray.push(getPartsToBeCrafted);
      console.log("partsToBeCraftedArray",partsToBeCraftedArray);
      props.setPartsToBeCrafted(partsToBeCraftedArray);
      //enable button to craft the part and block draggable
    }
  };

  return <Grid container spacing={1} wrap={'wrap'}>
          <Grid item xs={5}>
            <Box sx={{ m: 3, p: 2, border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: '4px', backgroundColor: 'white'}}>
              <Typography sx={{
                color: '#46505A'
              }} variant="overline">
                Drag the next piece from the list
              </Typography>
              <ComponentChoiceList
                pieces={props.pieces}
                tasks={props.tasks}
                onDragStart={onDragStart}
                />
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box sx={{ m: 3, p: 2, border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: '4px', backgroundColor: 'white' }}>
              <Typography sx={{
                color: '#46505A'
              }} variant="overline">
                You are currently at level 2
              </Typography>
              <CraftingSpace
                tasks={props.tasks}
                onDragOver={onDragOver}
                onDrop={onDrop}
              />
              <Button variant="contained" size="small" sx={{ marginTop: '1em'}} color="success" onClick={() => {console.log("nimic")}}>
                Generate
              </Button>
            </Box>
            <Box sx={{ m: 3, p: 2, border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: '4px', backgroundColor: 'white'}}>
              <Typography sx={{
                color: '#46505A'
              }} variant="overline">
                Next state
              </Typography>
              <CraftingState />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box sx={{ m: 3, p: 2, border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: '4px', backgroundColor: 'white'}}>
              <Typography sx={{
                color: '#46505A'
              }} variant="overline">
                Finished levels
              </Typography>
              <ComponentDiscardedList
                pieces={props.pieces}
                craftedTasks={props.craftedTasks}
                onDragOver={(e: any) => onDragOver(e)}
                onDrop={(e: any) => {
                  onDrop(e, "wip");
                }}/>
            </Box>
          </Grid>
        </Grid>
}

export default Container;
