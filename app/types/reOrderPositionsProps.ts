import { positionProps } from '.';

export type reOrderPositionsProps = {
    (list: positionProps[], startIndex: number, endIndex: number): positionProps[];
};
