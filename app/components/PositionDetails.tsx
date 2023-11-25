'use client';
import { useState } from 'react';
import CheckIcon from '../assets/CheckIcon';
import { checkboxProps, positionDetails, positionProps } from '../types';
import { DUTIES } from '../constants/duties';

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
                                {DUTIES.TRADE.label}
                            </h3>
                            <div className='space-y-2'>
                                {DUTIES.TRADE.checkBoxes.map((box) => (
                                    <>
                                        <label className='label'>
                                            <div className='relative h-5 '>
                                                <input
                                                    name={box.key}
                                                    type='checkbox'
                                                    className='checkbox'
                                                    checked={checkboxes[box.key]}
                                                    onChange={(e) => handleCheckboxChange(e)}
                                                />
                                                {checkboxes[box.key] && <CheckIcon />}
                                            </div>
                                            <span>{box.label}</span>
                                        </label>
                                    </>
                                ))}
                            </div>
                        </div>
                        <div className=''>
                            <h3 className='text-xs font-medium leading-[18px] text-textGray mb-1'>
                                {DUTIES.DEVELOPMENT.label}
                            </h3>
                            <div className='space-y-2'>
                                {DUTIES.DEVELOPMENT.checkBoxes.map((box) => (
                                    <>
                                        <label className='label'>
                                            <div className='relative h-5'>
                                                <input
                                                    name={box.key}
                                                    type='checkbox'
                                                    className='checkbox'
                                                    checked={checkboxes[box.key]}
                                                    onChange={(e) => handleCheckboxChange(e)}
                                                />
                                                {checkboxes[box.key] && <CheckIcon />}
                                            </div>
                                            <span>{box.label}</span>
                                        </label>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/2 space-y-2'>
                        <div className=''>
                            <h3 className='text-xs font-medium leading-[18px] text-textGray mb-1'>
                                {DUTIES.PRODUCTION.label}
                            </h3>
                            <div className='space-y-2'>
                                {DUTIES.PRODUCTION.checkBoxes.map((box) => (
                                    <>
                                        <label className='label'>
                                            <div className='relative h-5'>
                                                <input
                                                    name={box.key}
                                                    type='checkbox'
                                                    className='checkbox'
                                                    checked={checkboxes[box.key]}
                                                    onChange={(e) => handleCheckboxChange(e)}
                                                />
                                                {checkboxes[box.key] && <CheckIcon />}
                                            </div>
                                            <span>{box.label}</span>
                                        </label>
                                    </>
                                ))}
                            </div>
                        </div>
                        <div className=''>
                            <h3 className='text-xs font-medium leading-[18px] text-textGray mb-1'>
                                {DUTIES.MANAGEMENT.label}
                            </h3>
                            <div className='space-y-2'>
                                {DUTIES.MANAGEMENT.checkBoxes.map((box) => (
                                    <>
                                        <label className='label'>
                                            <div className='relative h-5'>
                                                <input
                                                    name={box.key}
                                                    type='checkbox'
                                                    className='checkbox'
                                                    checked={checkboxes[box.key]}
                                                    onChange={(e) => handleCheckboxChange(e)}
                                                />
                                                {checkboxes[box.key] && <CheckIcon />}
                                            </div>
                                            <span>{box.label}</span>
                                        </label>
                                    </>
                                ))}
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
