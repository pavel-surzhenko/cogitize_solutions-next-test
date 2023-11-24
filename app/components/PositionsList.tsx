import PositionCard from './PositionCard';

const PositionsList = () => {
    return (
        <aside className='min-w-[296px] relative space-y-2 min-h-[556px] 2xl:min-h-[747px]'>
            <ul className='space-y-2 overflow-y-auto max-h-[500px]  2xl:max-h-[747px] dark-shadow '>
                <PositionCard />
            </ul>
            <button className='btn'>Создать новую должность</button>
        </aside>
    );
};

export default PositionsList;
