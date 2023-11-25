'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { TABS } from '../constants/tabs';
import { PositionDetails, PositionsList, TabsContainer } from '.';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import usePositions from '../hooks/usePositions';

const OrganizationalStructure = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const tab = searchParams.get('tab');
    const selectedPosition = searchParams.get('id');
    const { positions, addPosition, updatePosition, reorderPositions } = usePositions();

    const handleClick = async () => {
        const newPosition = {
            id: String(Math.floor(Math.random() * 1000000)),
            name: 'Name',
            duties: {
                trade: true,
                price: false,
                analytics: false,
                duel: false,
                claims: false,
                buy: true,
                workers: false,
                position: false,
                kicked: false,
            },
        };
        addPosition(newPosition);
        router.push(`${pathname}?tab=${tab}&id=${newPosition.id}`);
    };

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) {
            return;
        }
        if (result.destination.index === result.source.index) {
            return;
        }

        reorderPositions(result.source.index, result.destination.index);
    };

    return (
        <div className='max-w-[1034px] w-full bg-darkBg rounded-lg border-2 overflow-hidden shadow-main border-border px-[25px] pt-6 pb-4 relative '>
            <TabsContainer />
            <div className='px-10 pb-10 pt-[27px] border-x-2 border-b-2 border-border flex space-x-4 '>
                {tab === TABS.POSITIONS ? (
                    <>
                        <div>
                            <DragDropContext onDragEnd={onDragEnd}>
                                <PositionsList positions={positions} />
                            </DragDropContext>
                            <button
                                onClick={handleClick}
                                className='btn mb-4'
                            >
                                Создать новую должность
                            </button>
                        </div>
                        {selectedPosition && positions?.length > 0 && (
                            <PositionDetails
                                key={selectedPosition}
                                position={positions.find((pos) => pos.id === selectedPosition)!}
                                setPositions={updatePosition}
                            />
                        )}
                    </>
                ) : (
                    <div className='min-h-[556px] 2xl:min-h-[751px]'></div>
                )}
            </div>
        </div>
    );
};

export default OrganizationalStructure;
