import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { TABS } from '../constants/tabs';

const TabsContainer = () => {
    const tab = useSearchParams().get('tab') || TABS.HIERARCHY;

    return (
        <div className='flex text-gray text-sm relative -space-x-3'>
            <Link href={{ pathname: '/', query: { tab: TABS.HIERARCHY } }}>
                <p className={`tab hover:shadow-tab ${tab === TABS.HIERARCHY ? 'tab-active' : ''}`}>
                    Иерархия
                </p>
            </Link>
            <Link href={{ pathname: '/', query: { tab: TABS.POSITIONS } }}>
                <p className={`tab hover:shadow-tab ${tab === TABS.POSITIONS ? 'tab-active' : ''}`}>
                    Должности
                </p>
            </Link>
            <Link href={{ pathname: '/', query: { tab: TABS.PERSONAL } }}>
                <p className={`tab hover:shadow-tab ${tab === TABS.PERSONAL ? 'tab-active' : ''}`}>
                    Список Персонала
                </p>
            </Link>
            <Link href={{ pathname: '/', query: { tab: TABS.EQUIPMENT } }}>
                <p className={`tab hover:shadow-tab ${tab === TABS.EQUIPMENT ? 'tab-active' : ''}`}>
                    Наборы экипировки
                </p>
            </Link>
        </div>
    );
};

export default TabsContainer;
