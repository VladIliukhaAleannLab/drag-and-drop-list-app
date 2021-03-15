import React from "react";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { INIT_DATA } from "../common/helpers";
import { WrapDropableList } from "../common/styledComponents";
import DroppableList from "./DroppableList";

const ListBody = () => {
  const [items, setItems] = useState(INIT_DATA);
  const [groups, setGroups] = useState({});

  useEffect(() => {
    // Mock an API call.
    buildAndSave(items);
  }, [items]);

  function buildAndSave(items) {
    const groups = {};
    for (let i = 0; i < Object.keys(items).length; ++i) {
      const currentGroup = items[i];
      groups[currentGroup.id] = i;
    }

    // Set the data.
    setItems(items);

    // Makes the groups searchable via their id.
    setGroups(groups);
  }

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
                    key={items[0].id}
                    className={'todo'}
                    {...items[0]}
                  />
                  <DroppableList
                    key={items[1].id}
                    className={'progress'}
                    {...items[1]}
                  />
                  <DroppableList
                    key={items[2].id}
                    className={'complete'}
                    {...items[2]}
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