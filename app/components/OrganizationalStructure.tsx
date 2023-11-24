'use client';
import { useSearchParams } from 'next/navigation';
import TabsContainer from './ TabsContainer';
import PositionDetails from './PositionDetails';
import PositionsList from './PositionsList';

const OrganizationalStructure = () => {
    const tab = useSearchParams().get('tab') || '3';

    return (
        <div className='max-w-[1034px] w-full bg-darkBg rounded-lg border-2 overflow-hidden shadow-main border-border px-[25px] pt-6 pb-4 relative '>
            <TabsContainer />
            <div className='px-10 pb-10 pt-[27px] border-x-2 border-b-2 border-border flex space-x-4 '>
                {tab === '3' ? (
                    <>
                        <PositionsList />
                        <PositionDetails />
                    </>
                ) : (
                    <div className='min-h-[556px] 2xl:min-h-[747px]'></div>
                )}
            </div>
        </div>
    );
};

export default OrganizationalStructure;
