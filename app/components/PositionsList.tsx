import { PositionCard } from '.';
import { positionProps } from '../types';

const PositionsList: React.FC<{ positions: positionProps[] }> = ({ positions }) => {
    return (
        <aside className='min-w-[296px] relative space-y-2 min-h-[492px] 2xl:min-h-[687px]'>
            <ul className='space-y-2 overflow-y-auto max-h-[500px]  2xl:max-h-[747px] dark-shadow'>
                {positions?.length > 0 &&
                    positions.map((position) => (
                        <PositionCard
                            key={position.id}
                            {...position}
                        />
                    ))}
            </ul>
        </aside>
    );
};

export default PositionsList;
