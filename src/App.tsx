import React, { useState, useEffect, useRef } from "react";
import "./App.css";

export default function AppDragDropDemo() {
  const [pieces, setPieces] = useState<any>(
    [
      { name: "imagine 1", id: 1, category: "wip", part: 1, img: "", crafted: 0 },
      { name: "imagine 2", id: 2, category: "wip", part: 1, img: "", crafted: 0 },
      { name: "imagine 3", id: 3, category: "wip", part: 1, img: "", crafted: 0 },
      { name: "imagine 4", id: 4, category: "wip", part: 2, img: "", crafted: 0 },
      { name: "imagine 5", id: 5, category: "wip", part: 2, img: "", crafted: 0 },
      { name: "imagine 6", id: 6, category: "wip", part: 2, img: "", crafted: 0 },
    ]
  );
  const [currentPart, setCurrentPart] = useState<number>(0);
  const [completedParts, setCompletedParts] = useState<any>([]);
  const [tasks, setTasks] = useState<any>({
    wip: [],
    complete: []
  });

  const getImageObjectById = (id:number) => {
    return pieces.filter((obj:any) => {
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
      //enable button to craft the part and block draggable
    }
  };

  const getDraggableItems = () => {
    let allTasks:any = {
      wip: [],
      complete: [],
    };

    pieces.forEach((t:any) => {
      if (t.crafted === 0)
        allTasks[t.category].push(
          <div
            key={t.id}
            onDragStart={(e) => onDragStart(e, t.id)}
            draggable
            className="draggable"
            style={{ border: "1px solid red" }}>
            {t.name}
          </div>
        );
    });
    setTasks(allTasks);
  };

  useEffect(() => {
    getDraggableItems();
  }, []);

  useEffect(() => {
    getDraggableItems();
  }, [pieces]);

  return (
    <>
      <div className="container-drag">
        <h2 className="header">Globus Project</h2>
        <div
          className="wip"
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => {
            onDrop(e, "wip");
          }}>
          <span className="task-header">WIP</span>
          {tasks.wip}
        </div>
        <div
          className="droppable"
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, "complete")}>
          <span className="task-header">COMPLETED</span>
          {tasks.complete}
        </div>
      </div>
      <button className="next-part" onClick={() => {}}>
        Next part
      </button>
    </>
  );
}