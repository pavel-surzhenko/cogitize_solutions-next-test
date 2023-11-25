import { useState, useEffect } from 'react';
import { positionProps } from '../types';

const usePositions = () => {
    const [positions, setPositions] = useState<positionProps[]>([]);

    useEffect(() => {
        const savedPositions = localStorage.getItem('positions');
        if (savedPositions) {
            setPositions(JSON.parse(savedPositions));
        }
    }, []);

    const addPosition = (newPosition: positionProps) => {
        setPositions((prev) => [newPosition, ...prev]);
        const updatedPositions = [newPosition, ...positions];
        localStorage.setItem('positions', JSON.stringify(updatedPositions));
    };

    const updatePosition = (changedPosition: positionProps) => {
        setPositions((prevPositions) => {
            const filteredPositions = prevPositions.filter(
                (position) => position.id !== changedPosition.id
            );
            const updatedPositions = [changedPosition, ...filteredPositions];
            localStorage.setItem('positions', JSON.stringify(updatedPositions));
            return updatedPositions;
        });
    };

    const reorderPositions = (startIndex: number, endIndex: number) => {
        const result = Array.from(positions);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        setPositions(result);
        localStorage.setItem('positions', JSON.stringify(result));
    };

    return { positions, addPosition, updatePosition, reorderPositions };
};

export default usePositions;
