'use client';
import { useState } from 'react';
import CheckIcon from '../assets/CheckIcon';
import { checkboxProps, positionDetails, positionProps } from '../types';

const PositionDetails: React.FC<positionDetails> = ({ position, setPositions }) => {
    const [checkboxes, setCheckboxes] = useState<checkboxProps>(position?.duties);
    const [name, setName] = useState<string>(position?.name || '');

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = event.target;
        setCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes,
            [name as keyof checkboxProps]: !prevCheckboxes[name as keyof checkboxProps],
        }));
    };

    const handleSave = () => {
        const updatedPosition: positionProps = {
            ...position,
            name: name,
            duties: checkboxes,
        };
        setPositions(updatedPosition);
    };

    return (
        <div className='rounded-lg bg-lightBg flex-grow p-4 flex flex-col'>
            <div className='bg-darkBg px-4 pt-4 pb-6 rounded-lg mb-[15px]'>
                <label className='text-xs font-semibold leading-[18px] text-textGray mb-1'>
                    Название
                </label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type='text'
                    placeholder='Введите имя...'
                    className='w-full rounded-lg border-2 border-border bg-transparent text-sm text-textWhite font-semibold leading-5 outline-none py-[14px] px-4 focus:border-white/50'
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
                                            name='trade'
                                            type='checkbox'
                                            className='checkbox'
                                            checked={checkboxes?.trade}
                                            onChange={(e) => handleCheckboxChange(e)}
                                        />
                                        {checkboxes?.trade && <CheckIcon />}
                                    </div>
                                    <span>Продавать продукти</span>
                                </label>
                                <label className='label'>
                                    <div className='relative'>
                                        <input
                                            name='price'
                                            type='checkbox'
                                            className='checkbox'
                                            checked={checkboxes?.price}
                                            onChange={(e) => handleCheckboxChange(e)}
                                        />
                                        {checkboxes?.price && <CheckIcon />}
                                    </div>
                                    <span>Выставлять цены</span>
                                </label>
                                <label className='label'>
                                    <div className='relative'>
                                        <input
                                            name='analytics'
                                            type='checkbox'
                                            className='checkbox'
                                            checked={checkboxes?.analytics}
                                            onChange={(e) => handleCheckboxChange(e)}
                                        />
                                        {checkboxes?.analytics && <CheckIcon />}
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
                                            checked={checkboxes?.duel}
                                            onChange={(e) => handleCheckboxChange(e)}
                                        />
                                        {checkboxes?.duel && <CheckIcon />}
                                    </div>
                                    <span>Дуель</span>
                                </label>
                                <label className='label'>
                                    <div className='relative'>
                                        <input
                                            name='claims'
                                            type='checkbox'
                                            className='checkbox'
                                            checked={checkboxes?.claims}
                                            onChange={(e) => handleCheckboxChange(e)}
                                        />
                                        {checkboxes?.claims && <CheckIcon />}
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
                                            name='buy'
                                            type='checkbox'
                                            className='checkbox'
                                            checked={checkboxes?.buy}
                                            onChange={(e) => handleCheckboxChange(e)}
                                        />
                                        {checkboxes?.buy && <CheckIcon />}
                                    </div>
                                    <span>Закупать сырье</span>
                                </label>
                                <label className='label'>
                                    <div className='relative'>
                                        <input
                                            name='workers'
                                            type='checkbox'
                                            className='checkbox'
                                            checked={checkboxes?.workers}
                                            onChange={(e) => handleCheckboxChange(e)}
                                        />
                                        {checkboxes?.workers && <CheckIcon />}
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
                                            name='position'
                                            type='checkbox'
                                            className='checkbox'
                                            checked={checkboxes?.position}
                                            onChange={(e) => handleCheckboxChange(e)}
                                        />
                                        {checkboxes?.position && <CheckIcon />}
                                    </div>
                                    <span>Назначать должности</span>
                                </label>
                                <label className='label'>
                                    <div className='relative'>
                                        <input
                                            name='kicked'
                                            type='checkbox'
                                            className='checkbox'
                                            checked={checkboxes?.kicked}
                                            onChange={(e) => handleCheckboxChange(e)}
                                        />
                                        {checkboxes?.kicked && <CheckIcon />}
                                    </div>
                                    <span>Выгонять из банды</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <button
                className='btn mt-2'
                onClick={handleSave}
            >
                Сохранить
            </button>
        </div>
    );
};

export default PositionDetails;
