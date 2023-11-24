import TabsContainer from './ TabsContainer';
import PositionDetails from './PositionDetails';
import PositionsList from './PositionsList';

const OrganizationalStructure = () => {
    return (
        <div className='max-w-[1034px] w-full bg-darkBg rounded-lg border-2 overflow-hidden shadow-main border-border px-[25px] pt-6 pb-4 relative '>
            <TabsContainer />
            <div className='px-10 pb-10 pt-[27px] border-x-2 border-b-2 border-border flex space-x-4 '>
                <PositionsList />
                <PositionDetails />
            </div>
        </div>
    );
};

export default OrganizationalStructure;
