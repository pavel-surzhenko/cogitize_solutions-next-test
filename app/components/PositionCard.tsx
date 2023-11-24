import GrabIcon from '../assets/GrabIcon';

const PositionCard = () => {
    return (
        <li className='card'>
            <div className='cursor-grab pr-4'>
                <GrabIcon />
            </div>
            <div className='flex justify-between items-start flex-grow'>
                <div className=''>
                    <h2 className='text-sm font-semibold text-textWhite leading-5'>New People</h2>
                    <p className='text-xs font-semibold text-textGray leading-[19px]'>20 level</p>
                </div>
                <div className='inline-flex'>
                    <span className='text-xs font-bold text-textYellow leading-4'>$50 </span>
                    <span className='text-xs font-medium text-textGray'>/ hour</span>
                </div>
            </div>
        </li>
    );
};

export default PositionCard;
