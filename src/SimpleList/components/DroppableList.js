import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { WrapArea, WrapItem, Item } from "../common/styledComponents";

const DroppableList = ({id, items, className}) => {
  return (
      <Droppable droppableId={id}>
        {(provided) => (
          <WrapArea
            className={className}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {items.map((item, index) => (
              <WrapItem
                key={item.id}
              >
                <DraggableElement
                  item={item}
                  index={index}
                  className={className}
                />
              </WrapItem>
            ))}
            {provided.placeholder}
          </WrapArea>
        )}
      </Droppable>
  );
};

const DraggableElement = ({item, index, className}) => {
  return (
      <Draggable
        isDragDisabled={item.disabled}
        draggableId={item.id}
        index={index}
      >
        {(provided) => (
          <Item
            className={className}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {item.label}
          </Item>
        )}
      </Draggable>
  )
};

export default DroppableList