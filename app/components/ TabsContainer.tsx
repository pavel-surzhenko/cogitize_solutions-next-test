'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const TabsContainer = () => {
    const tab = useSearchParams().get('tab') || '1';

    return (
        <div className='flex text-gray text-sm relative'>
            <Link href={{ pathname: '/', query: { tab: '1' } }}>
                <p className={`tab ${tab === '1' ? 'tab-active' : ''}`}>Иерархия</p>
            </Link>
            <Link href={{ pathname: '/', query: { tab: '2' } }}>
                <p className={`tab ${tab === '2' ? 'tab-active' : ''}`}>Должности</p>
            </Link>
            <Link href={{ pathname: '/', query: { tab: '3' } }}>
                <p className={`tab ${tab === '3' ? 'tab-active' : ''}`}>Список Персонала</p>
            </Link>
            <Link href={{ pathname: '/', query: { tab: '4' } }}>
                <p className={`tab ${tab === '4' ? 'tab-active' : ''}`}>Наборы экипировки</p>
            </Link>
        </div>
    );
};

export default TabsContainer;
