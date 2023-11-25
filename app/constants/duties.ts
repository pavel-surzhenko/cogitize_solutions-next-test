import { duties } from '../types';

export const DUTIES: duties = {
    TRADE: {
        checkBoxes: [
            { key: 'trade', label: 'Продавать продукти' },
            { key: 'price', label: 'Выставлять цены' },
            { key: 'analytics', label: 'Смотреть аналитику' },
        ],
        label: 'Торговля',
    },
    DEVELOPMENT: {
        checkBoxes: [
            { key: 'duel', label: 'Дуель' },
            { key: 'claims', label: 'Выставлять претензии' },
        ],
        label: 'Разробки',
    },
    PRODUCTION: {
        checkBoxes: [
            { key: 'buy', label: 'Закупать сырье' },
            { key: 'workers', label: 'Назначать рабочих' },
        ],
        label: 'Производство',
    },
    MANAGEMENT: {
        checkBoxes: [
            { key: 'position', label: 'Назначать должности' },
            { key: 'kicked', label: 'Выгонять из банды' },
        ],
        label: 'Управление',
    },
};
