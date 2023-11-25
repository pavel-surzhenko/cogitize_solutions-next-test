import { DraggableProvided, DroppableProvided } from 'react-beautiful-dnd';
import { checkboxProps } from './checkboxProps';

export type positionProps = {
    id: string;
    name: string;
    duties: checkboxProps;
};

export type provider = {
    index: number;
};
