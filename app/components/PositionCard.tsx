import Link from 'next/link';
import GrabIcon from '../assets/GrabIcon';
import { positionProps } from '../types';
import { useSearchParams } from 'next/navigation';

const PositionCard: React.FC<positionProps> = ({ id, name, duties }) => {
    const tab = useSearchParams().get('tab');
    const selectedPosition = useSearchParams().get('id');

    return (
        <li
            className={`${
                selectedPosition === id ? ' border-violet' : 'border-lightBg'
            } border-2 rounded-lg mr-1`}
        >
            <Link
                href={{ pathname: '/', query: { tab, id } }}
                className='card'
            >
                <div className='cursor-grab pr-4'>
                    <GrabIcon />
                </div>

                <div className='flex justify-between items-start flex-grow'>
                    <div className=''>
                        <h2 className='text-sm font-semibold text-textWhite leading-5'>{id}</h2>
                        <p className='text-xs font-semibold text-textGray leading-[19px]'>{`${
                            Object.values(duties).filter((value) => value === true).length
                        } заданий`}</p>
                    </div>
                    <div className='inline-flex'>
                        <span className='text-xs font-bold text-textYellow leading-4'>$50 </span>
                        <span className='text-xs font-medium text-textGray'>/ hour</span>
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default PositionCard;
