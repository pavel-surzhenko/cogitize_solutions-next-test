'use client';
import { Droppable } from '@hello-pangea/dnd';
import { PositionCard } from '.';
import { positionProps } from '../types';
import React from 'react';

const PositionsList: React.FC<{ positions: positionProps[] }> = ({ positions }) => {
    return (
        <aside className='min-w-[296px] relative space-y-2 min-h-[492px] 2xl:min-h-[687px]'>
            <Droppable droppableId='list'>
                {(prov) => (
                    <ul
                        className='space-y-2 overflow-y-auto max-h-[492px]  2xl:max-h-[687px] dark-shadow'
                        ref={prov.innerRef}
                        {...prov.droppableProps}
                    >
                        {positions?.length > 0 &&
                            positions.map((position, index) => (
                                <PositionCard
                                    key={position.id}
                                    {...position}
                                    index={index}
                                />
                            ))}
                        {prov.placeholder}
                    </ul>
                )}
            </Droppable>
        </aside>
    );
};

export default React.memo(PositionsList);
