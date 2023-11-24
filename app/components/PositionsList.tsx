import PositionCard from './PositionCard';

const PositionsList = () => {
    return (
        <aside className='min-w-[296px] relative space-y-2'>
            <ul className='space-y-2 overflow-y-auto max-h-[500px] 2xl:max-h-[700px] dark-shadow '>
                <PositionCard />
                <PositionCard />
                <PositionCard />
                <PositionCard />
                <PositionCard />
                <PositionCard />
                <PositionCard />
                <PositionCard />
            </ul>
            <button className='btn'>Создать новую должность</button>
        </aside>
    );
};

export default PositionsList;
