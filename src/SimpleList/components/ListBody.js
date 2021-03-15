import React from "react";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { WrapDropableList } from "../common/styledComponents";
import DroppableList from "./DroppableList";

const TODO = 0;
const PROGRESS = 1;
const COMPLETE = 2;

const ListBody = ({items, setItems}) => {
  const [groups, setGroups] = useState({});

  useEffect(() => {
    buildAndSave(items);
  }, [items]);

  const buildAndSave = (items) => {
    const groups = {};
    Object.keys(items).forEach((i) => {
      const currentGroup = items[i];
      groups[currentGroup.id] = i;
    });

    // Set the data.
    setItems(items);

    // Makes the groups searchable via their id.
    setGroups(groups);
  };

  return (
    <DragDropContext
      onDragEnd={(result) => {
        const {destination, source, type,} = result;
        console.log(result);
        if (!destination) {
          return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
          return;
        }

        if ('group' === type) {
          const sourceIndex = source.index;
          const targetIndex = destination.index;

          const workValue = items.slice();
          const [deletedItem,] = workValue.splice(sourceIndex, 1);
          workValue.splice(targetIndex, 0, deletedItem);

          buildAndSave(workValue);

          return;
        }

        const sourceDroppableIndex = groups[source.droppableId];
        const targetDroppableIndex = groups[destination.droppableId];
        const sourceItems = items[sourceDroppableIndex].items.slice();
        const targetItems = source.droppableId !== destination.droppableId ? items[targetDroppableIndex].items.slice() : sourceItems;

        // Pull the item from the source.
        const [deletedItem,] = sourceItems.splice(source.index, 1);
        targetItems.splice(destination.index, 0, deletedItem);

        const workValue = items.slice();
        workValue[sourceDroppableIndex] = {
          ...items[sourceDroppableIndex],
          items: sourceItems,
        };
        workValue[targetDroppableIndex] = {
          ...items[targetDroppableIndex],
          items: targetItems,
        };

        setItems(workValue);
      }}
    >
      <Droppable droppableId='ROOT' type='group'>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {
              items.length > 0 &&
              <WrapDropableList
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                <DroppableList
                  key={items[TODO].id}
                  className={'todo'}
                  {...items[TODO]}
                />
                <DroppableList
                  key={items[PROGRESS].id}
                  className={'progress'}
                  {...items[PROGRESS]}
                />
                <DroppableList
                  key={items[COMPLETE].id}
                  className={'complete'}
                  {...items[COMPLETE]}
                />
              </WrapDropableList>
            }
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ListBody