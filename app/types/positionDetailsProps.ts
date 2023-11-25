import { positionProps } from '.';

export type positionDetails = {
    position: positionProps;
    setPositions: (changedPosition: positionProps) => void;
};
