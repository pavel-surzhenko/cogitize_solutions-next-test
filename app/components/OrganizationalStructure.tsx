'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { positionProps } from '../types';
import { TABS } from '../constants/tabs';
import { PositionDetails, PositionsList, TabsContainer } from '.';

const OrganizationalStructure = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const tab = searchParams.get('tab');
    const [positions, setPositions] = useState<positionProps[]>([]);
    const selectedPosition = searchParams.get('id');

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
        setPositions((prev) => [newPosition, ...prev]);
        const updatedPositions = [newPosition, ...positions];
        localStorage.setItem('positions', JSON.stringify(updatedPositions));
        router.push(`${pathname}?tab=${tab}&id=${newPosition.id}`);
    };

    const handleChange = (changedPosition: positionProps) => {
        setPositions((prevPositions) => {
            const filteredPositions = prevPositions.filter(
                (position) => position.id !== changedPosition.id
            );
            const updatedPositions = [changedPosition, ...filteredPositions];
            localStorage.setItem('positions', JSON.stringify(updatedPositions));

            return updatedPositions;
        });
    };

    useEffect(() => {
        const savedPositions = localStorage.getItem('positions');
        if (savedPositions) {
            setPositions(JSON.parse(savedPositions));
        }
    }, []);

    return (
        <div className='max-w-[1034px] w-full bg-darkBg rounded-lg border-2 overflow-hidden shadow-main border-border px-[25px] pt-6 pb-4 relative '>
            <TabsContainer />
            <div className='px-10 pb-10 pt-[27px] border-x-2 border-b-2 border-border flex space-x-4 '>
                {tab === TABS.POSITIONS ? (
                    <>
                        <div>
                            <PositionsList positions={positions} />
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
                                setPositions={handleChange}
                            />
                        )}
                    </>
                ) : (
                    <div className='min-h-[556px] 2xl:min-h-[747px]'></div>
                )}
            </div>
        </div>
    );
};

export default OrganizationalStructure;
