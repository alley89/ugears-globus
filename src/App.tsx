import React, { useState, useEffect } from "react";
import "./App.css";
import Container from './components/Container';
import globusPieces from './assets/pieces-data.json';
import globusLevels from './assets/levels-data.json';
import Header from './components/Header';

import Pic1 from '../src/assets/pieces/image-1.png';
import Pic2 from '../src/assets/pieces/image-2.png';
import Pic3 from '../src/assets/pieces/image-3.png';
import Pic4 from '../src/assets/pieces/image-4.png';
import Pic5 from '../src/assets/pieces/image-5.png';
import Pic6 from '../src/assets/pieces/image-6.png';
import Pic7 from '../src/assets/pieces/image-7.png';
import Pic8 from '../src/assets/pieces/image-8.png';
import Pic9 from '../src/assets/pieces/image-9.png';
import Pic10 from '../src/assets/pieces/image-10.png';
import Pic11 from '../src/assets/pieces/image-11.png';
import Pic12 from '../src/assets/pieces/image-12.png';
import Pic13 from '../src/assets/pieces/image-13.png';
import Pic14 from '../src/assets/pieces/image-14.png';
import Pic15 from '../src/assets/pieces/image-15.png';
import Pic16 from '../src/assets/pieces/image-16.png';
import Pic17 from '../src/assets/pieces/image-17.png';
import Pic18 from '../src/assets/pieces/image-18.png';
import Pic19 from '../src/assets/pieces/image-19.png';
import Pic20 from '../src/assets/pieces/image-20.png';
import Pic21 from '../src/assets/pieces/image-21.png';
import Pic22 from '../src/assets/pieces/image-22.png';
import Pic23 from '../src/assets/pieces/image-23.png';
import Pic24 from '../src/assets/pieces/image-24.png';
import Pic25 from '../src/assets/pieces/image-25.png';
import Pic26 from '../src/assets/pieces/image-26.png';
import Pic27 from '../src/assets/pieces/image-27.png';
import Pic28 from '../src/assets/pieces/image-28.png';
import Pic29 from '../src/assets/pieces/image-29.png';
import Pic30 from '../src/assets/pieces/image-30.png';
import Pic31 from '../src/assets/pieces/image-31.png';
import Pic32 from '../src/assets/pieces/image-32.png';
import Pic33 from '../src/assets/pieces/image-33.png';
import Pic34 from '../src/assets/pieces/image-34.png';
import Pic35 from '../src/assets/pieces/image-35.png';
import Pic36 from '../src/assets/pieces/image-36.png';
import Pic37 from '../src/assets/pieces/image-37.png';
import Pic38 from '../src/assets/pieces/image-38.png';
import Pic39 from '../src/assets/pieces/image-39.png';
import Pic40 from '../src/assets/pieces/image-40.png';
import Pic41 from '../src/assets/pieces/image-41.png';
import Pic42 from '../src/assets/pieces/image-42.png';
import Pic43 from '../src/assets/pieces/image-43.png';
import Pic44 from '../src/assets/pieces/image-44.png';
import Pic45 from '../src/assets/pieces/image-45.png';
import Pic46 from '../src/assets/pieces/image-46.png';
import Pic47 from '../src/assets/pieces/image-47.png';
import Pic48 from '../src/assets/pieces/image-48.png';
import Pic49 from '../src/assets/pieces/image-49.png';
import Pic50 from '../src/assets/pieces/image-50.png';
import Pic51 from '../src/assets/pieces/image-51.png';
import Pic52 from '../src/assets/pieces/image-52.png';
import Pic53 from '../src/assets/pieces/image-53.png';
import Pic54 from '../src/assets/pieces/image-54.png';
import Pic55 from '../src/assets/pieces/image-55.png';
import Pic56 from '../src/assets/pieces/image-56.png';
import Pic57 from '../src/assets/pieces/image-57.png';
import Pic58 from '../src/assets/pieces/image-58.png';
import Pic59 from '../src/assets/pieces/image-59.png';
import Pic60 from '../src/assets/pieces/image-60.png';
import Pic61 from '../src/assets/pieces/image-61.png';
import Pic62 from '../src/assets/pieces/image-62.png';
import Pic63 from '../src/assets/pieces/image-63.png';
import Pic64 from '../src/assets/pieces/image-64.png';
import Pic65 from '../src/assets/pieces/image-65.png';
import Pic66 from '../src/assets/pieces/image-66.png';
import Pic67 from '../src/assets/pieces/image-67.png';
import Pic68 from '../src/assets/pieces/image-68.png';
import Pic69 from '../src/assets/pieces/image-69.png';
import Pic70 from '../src/assets/pieces/image-70.png';
import Pic71 from '../src/assets/pieces/image-71.png';
import Pic72 from '../src/assets/pieces/image-72.png';

export const pics = [
  {src: Pic1, id: 1},
  {src: Pic2, id: 2},
  {src: Pic3, id: 3},
  {src: Pic4, id: 4},
  {src: Pic5, id: 5},
  {src: Pic6, id: 6},
  {src: Pic7, id: 7},
  {src: Pic8, id: 8},
  {src: Pic9, id: 9},
  {src: Pic10, id: 10},
  {src: Pic11, id: 11},
  {src: Pic12, id: 12},
  {src: Pic13, id: 13},
  {src: Pic14, id: 14},
  {src: Pic15, id: 15},
  {src: Pic16, id: 16},
  {src: Pic17, id: 17},
  {src: Pic18, id: 18},
  {src: Pic19, id: 19},
  {src: Pic20, id: 20},
  {src: Pic21, id: 21},
  {src: Pic22, id: 22},
  {src: Pic23, id: 23},
  {src: Pic24, id: 24},
  {src: Pic25, id: 25},
  {src: Pic26, id: 26},
  {src: Pic27, id: 27},
  {src: Pic28, id: 28},
  {src: Pic29, id: 29},
  {src: Pic30, id: 30},
  {src: Pic31, id: 31},
  {src: Pic32, id: 32},
  {src: Pic33, id: 33},
  {src: Pic34, id: 34},
  {src: Pic35, id: 35},
  {src: Pic36, id: 36},
  {src: Pic37, id: 37},
  {src: Pic38, id: 38},
  {src: Pic39, id: 39},
  {src: Pic40, id: 40},
  {src: Pic41, id: 41},
  {src: Pic42, id: 42},
  {src: Pic43, id: 43},
  {src: Pic44, id: 44},
  {src: Pic45, id: 45},
  {src: Pic46, id: 46},
  {src: Pic47, id: 47},
  {src: Pic48, id: 48},
  {src: Pic49, id: 49},
  {src: Pic50, id: 50},
  {src: Pic51, id: 51},
  {src: Pic52, id: 52},
  {src: Pic53, id: 53},
  {src: Pic54, id: 54},
  {src: Pic55, id: 55},
  {src: Pic56, id: 56},
  {src: Pic57, id: 57},
  {src: Pic58, id: 58},
  {src: Pic59, id: 59},
  {src: Pic60, id: 60},
  {src: Pic61, id: 61},
  {src: Pic62, id: 62},
  {src: Pic63, id: 63},
  {src: Pic64, id: 64},
  {src: Pic65, id: 65},
  {src: Pic66, id: 66},
  {src: Pic67, id: 67},
  {src: Pic68, id: 68},
  {src: Pic69, id: 69},
  {src: Pic70, id: 70},
  {src: Pic71, id: 71},
  {src: Pic72, id: 72}
];

export default function AppDragDropDemo() {
  const [pieces, setPieces] = useState<any>(
    globusPieces.globusPieces
  );
  const [partsToBeCrafted, setPartsToBeCrafted] = useState<any>([]
  );
  const [currentPart, setCurrentPart] = useState<number>(0);
  const [completedParts, setCompletedParts] = useState<any>([]);
  const [tasks, setTasks] = useState<any>({
    wip: [],
    complete: []
  });
  const [craftedTasks, setCraftedTasks] = useState<any>({
    wip: [],
    complete: []
  });

  const getImageObjectById = (id:number) => {
    return pieces.filter((obj:any) => {
      return obj.id === id
    })
  };

  const getPartsToBeCraftedById = (id: number) => {
    return globusLevels.globusLevels.filter((obj: any) => {
      return obj.id === id
    })
  };

  const getImageObjectByPart = (part: number, cat:string="") => {
    return pieces.filter((obj: any) => {
      if (cat) { return obj.part === part && obj.category === cat}
      return obj.part === part
    })
  };

  const setCraftedPieces = (pieceID:number) => {
    setPieces(pieces.map((piece:any) => {
      if (piece.id === pieceID) piece.crafted = 1
      return piece;
    }));
  }

  const onDragStart = (ev:any, id:number) => {
    ev.dataTransfer.setData("id", id);
  };

  const onDragOver = (ev:any) => {
    ev.preventDefault();
  };
  //idea: poate un buton de start si sa afisam un video al proiectului final
  const onDrop = (ev:any, cat:any) => {
    //verifica daca mai sunt imagini de drop-uit din acea parte si din toate - ce se intampla daca mai sunt imagini sau daca nu mai sunt
    //afiseaza imaginea ansamblului in cazul in care au fost toate imaginile drop=uite
    let id = parseInt(ev.dataTransfer.getData("id"));
    const imageDropped = getImageObjectById(id);
    const imagesFromSamePart = getImageObjectByPart(imageDropped[0].part);
    const leftImagesFromSamePart = getImageObjectByPart(imageDropped[0].part, "wip");
    if (currentPart === 0) {
      setCurrentPart(imageDropped[0].part);
    } else if (currentPart !== imageDropped[0].part) {
      alert("not from the same part");
      return ;
    }

    let completedTasks = pieces.map((task:any) => {
      if (task.id === id) {
        task.category = cat;
      }
      return task;
    });
    setPieces(completedTasks);

    //s-au terminat imaginile din aceeasi parte?
    if (leftImagesFromSamePart.length === 1) { // last image was dropped
      let newCompletedParts = completedParts;
      newCompletedParts.push(currentPart);
      setCompletedParts(newCompletedParts);
      setCurrentPart(0);
      imagesFromSamePart.forEach((el:any) => {
        setCraftedPieces(el.id);
      });
      let partsToBeCraftedArray = partsToBeCrafted;
      partsToBeCraftedArray.push(getPartsToBeCraftedById(leftImagesFromSamePart.part));
      setPartsToBeCrafted(partsToBeCraftedArray);
      //enable button to craft the part and block draggable
    }
  };

  const getDraggableItems = () => {
    let allTasks:any = {
      wip: [],
      complete: [],
    };
    let allCraftedTasks: any = {
      wip: [],
      complete: [],
    };

    pieces.forEach((t:any) => {
      if (t.crafted === 0)
        allTasks[t.category].push(
          t
        );
    });
    console.log("partsToBeCrafted", partsToBeCrafted);
    partsToBeCrafted.forEach((t: any, index:any) => {
      console.log("t", t);
      if (t[0].crafted === 0)
        allCraftedTasks[t[0].category].push(
          t
        );
    });
    setTasks(allTasks);
    console.log("allCraftedTasks", allCraftedTasks);
    setCraftedTasks(allCraftedTasks);
  };

  useEffect(() => {
    getDraggableItems();
  }, []);

  useEffect(() => {
    console.log("useeffect");
    getDraggableItems();
  }, [pieces, partsToBeCrafted]);

  return (
    <>
      <div className="app-container">
        <Header />
        <Container
          tasks={tasks}
          pieces={pieces}
          setPieces={setPieces}
          currentPart={currentPart}
          setCurrentPart={setCurrentPart}
          setPartsToBeCrafted={setPartsToBeCrafted}
          completedParts={completedParts}
          partsToBeCrafted={partsToBeCrafted}
          setCompletedParts={setCompletedParts}
          craftedTasks={craftedTasks}
        />
      {/*  <div*/}
      {/*    className="wip"*/}
      {/*    onDragOver={(e) => onDragOver(e)}*/}
      {/*    onDrop={(e) => {*/}
      {/*      onDrop(e, "wip");*/}
      {/*    }}>*/}
      {/*    <span className="task-header">WIP</span>*/}
      {/*    {tasks.wip}*/}
      {/*  </div>*/}
      {/*  <div*/}
      {/*    className="wip finished-parts"*/}
      {/*    onDragOver={(e) => onDragOver(e)}*/}
      {/*    onDrop={(e) => {*/}
      {/*      onDrop(e, "wip");*/}
      {/*    }}>*/}
      {/*    <span className="task-header">Finished Parts</span>*/}
      {/*    {craftedTasks.wip}*/}
      {/*  </div>*/}
      {/*  <div*/}
      {/*    className="droppable"*/}
      {/*    onDragOver={(e) => onDragOver(e)}*/}
      {/*    onDrop={(e) => onDrop(e, "complete")}>*/}
      {/*    <span className="task-header">COMPLETED</span>*/}
      {/*    {tasks.complete}*/}
      {/*  </div>*/}
      </div>
      {/* <button className="next-part" onClick={() => {}}>
        Next part
      </button> */}
    </>
  );
}
