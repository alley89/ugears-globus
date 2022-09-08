import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Container from './components/Container';
import globusPieces from './assets/pieces-data.json';
import globusLevels from './assets/levels-data.json';
import Header from './components/Header';

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
      if (t[index].crafted === 0)
        allCraftedTasks[t[index].category].push(
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
