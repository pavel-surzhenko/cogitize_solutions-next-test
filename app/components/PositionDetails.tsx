'use client';
import { useState } from 'react';
import CheckIcon from '../assets/CheckIcon';

const PositionDetails = () => {
    const [checkboxes, setCheckboxes] = useState<checkboxProps>({
        sell: false,
        display: false,
        watch: false,
        duel: false,
        claims: false,
    });

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = event.target;
        setCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes,
            [name as keyof checkboxProps]: !prevCheckboxes[name as keyof checkboxProps],
        }));
    };

    return (
        <div className='rounded-lg bg-lightBg flex-grow p-4 flex flex-col'>
            <div className='bg-darkBg px-4 pt-4 pb-6 rounded-lg mb-[15px]'>
                <label className='text-xs font-semibold leading-[18px] text-textGray mb-1'>
                    Название
                </label>
                <input
                    type='text'
                    placeholder='Введите имя...'
                    className='w-full rounded-lg border-2 border-border bg-transparent text-sm text-textWhite font-semibold leading-5 outline-none py-[14px] px-4'
                />
            </div>
            <div className='rounded-lg bg-darkBg overflow-hidden flex flex-col flex-grow'>
                <h2 className='text-sm font-medium leading-5 shadow-duties text-textGray pl-4 pt-[11px] pb-[9px] '>
                    Обязанности
                </h2>
                <form className='p-3 flex flex-grow'>
                    <div className='basis-1/2 space-y-2'>
                        <div className=''>
                            <h3 className='text-xs font-medium leading-[18px] text-textGray mb-1'>
                                Торговля
                            </h3>
                            <div className='space-y-2'>
                                <label className='label'>
                                    <div className='relative'>
                                        <input
                                            name='sell'
                                            type='checkbox'
                                            className='checkbox'
                                            checked={checkboxes.sell}
                                            onChange={(e) => handleCheckboxChange(e)}
                                        />
                                        {checkboxes.sell && <CheckIcon />}
                                    </div>
                                    <span>Продавать продукти</span>
                                </label>
                                <label className='label'>
                                    <div className='relative'>
                                        <input
                                            name='display'
                                            type='checkbox'
                                            className='checkbox'
                                            checked={checkboxes.display}
                                            onChange={(e) => handleCheckboxChange(e)}
                                        />
                                        {checkboxes.display && <CheckIcon />}
                                    </div>
                                    <span>Выставлять цены</span>
                                </label>
                                <label className='label'>
                                    <div className='relative'>
                                        <input
                                            name='watch'
                                            type='checkbox'
                                            className='checkbox'
                                            checked={checkboxes.watch}
                                            onChange={(e) => handleCheckboxChange(e)}
                                        />
                                        {checkboxes.watch && <CheckIcon />}
                                    </div>
                                    <span>Смотреть аналитику</span>
                                </label>
                            </div>
                        </div>
                        <div className=''>
                            <h3 className='text-xs font-medium leading-[18px] text-textGray mb-1'>
                                Разробки
                            </h3>
                            <div className='space-y-2'>
                                <label className='label'>
                                    <div className='relative'>
                                        <input
                                            name='duel'
                                            type='checkbox'
                                            className='checkbox'
                                            checked={checkboxes.duel}
                                            onChange={(e) => handleCheckboxChange(e)}
                                        />
                                        {checkboxes.duel && <CheckIcon />}
                                    </div>
                                    <span>Дуель</span>
                                </label>
                                <label className='label'>
                                    <div className='relative'>
                                        <input
                                            name='claims'
                                            type='checkbox'
                                            className='checkbox'
                                            checked={checkboxes.claims}
                                            onChange={(e) => handleCheckboxChange(e)}
                                        />
                                        {checkboxes.claims && <CheckIcon />}
                                    </div>
                                    <span>Выставлять претензии</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/2 space-y-2'>
                        <div className=''>
                            <h3 className='text-xs font-medium leading-[18px] text-textGray mb-1'>
                                Производство
                            </h3>
                            <div className='space-y-2'>
                                <label className='label'>
                                    <div className='relative'>
                                        <input
                                            name='sell'
                                            type='checkbox'
                                            className='checkbox'
                                            checked={checkboxes.sell}
                                            onChange={(e) => handleCheckboxChange(e)}
                                        />
                                        {checkboxes.sell && <CheckIcon />}
                                    </div>
                                    <span>Закупать сырье</span>
                                </label>
                                <label className='label'>
                                    <div className='relative'>
                                        <input
                                            name='display'
                                            type='checkbox'
                                            className='checkbox'
                                            checked={checkboxes.display}
                                            onChange={(e) => handleCheckboxChange(e)}
                                        />
                                        {checkboxes.display && <CheckIcon />}
                                    </div>
                                    <span>Назначать рабочих</span>
                                </label>
                            </div>
                        </div>
                        <div className=''>
                            <h3 className='text-xs font-medium leading-[18px] text-textGray mb-1'>
                                Управление
                            </h3>
                            <div className='space-y-2'>
                                <label className='label'>
                                    <div className='relative'>
                                        <input
                                            name='duel'
                                            type='checkbox'
                                            className='checkbox'
                                            checked={checkboxes.duel}
                                            onChange={(e) => handleCheckboxChange(e)}
                                        />
                                        {checkboxes.duel && <CheckIcon />}
                                    </div>
                                    <span>Назначать должности</span>
                                </label>
                                <label className='label'>
                                    <div className='relative'>
                                        <input
                                            name='duel'
                                            type='checkbox'
                                            className='checkbox'
                                            checked={checkboxes.duel}
                                            onChange={(e) => handleCheckboxChange(e)}
                                        />
                                        {checkboxes.duel && <CheckIcon />}
                                    </div>
                                    <span>Выгонять из банды</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <button className='btn mt-2'>Сохранить</button>
        </div>
    );
};

export default PositionDetails;

type checkboxProps = {
    sell: boolean;
    display: boolean;
    watch: boolean;
    duel: boolean;
    claims: boolean;
};
