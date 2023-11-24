'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import TabsContainer from './ TabsContainer';
import PositionDetails from './PositionDetails';
import PositionsList from './PositionsList';
import { useCallback, useState } from 'react';
import { positionProps } from '../types';
import { TABS } from '../constants/tabs';

const OrganizationalStructure = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const tab = searchParams.get('tab');
    const selectedPosition = searchParams.get('id');
    const [positions, setPositions] = useState<positionProps[]>([]);

    const handleClick = async () => {
        const newPosition = {
            id: String(Math.floor(Math.random() * 1000000)),
            name: '',
            duties: {
                trade: true,
                price: false,
                analytics: false,
                duel: false,
                claims: false,
                buy: false,
                workers: false,
                position: false,
                kicked: false,
            },
        };
        setPositions((prev) => [newPosition, ...prev]);
        router.push(`${pathname}?tab=${tab}&id=${newPosition.id}`);
    };

    console.log();
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
                        {positions.length > 0 && (
                            <PositionDetails
                                {...positions.find((position) => position.id === selectedPosition)!}
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
