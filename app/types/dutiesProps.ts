export type dutyKey =
    | 'trade'
    | 'price'
    | 'analytics'
    | 'duel'
    | 'claims'
    | 'buy'
    | 'workers'
    | 'position'
    | 'kicked';

export type duty = {
    key: dutyKey;
    label: string;
};

export type dutyCategoryKey = 'TRADE' | 'DEVELOPMENT' | 'PRODUCTION' | 'MANAGEMENT';

export type dutyCategory = {
    checkBoxes: duty[];
    label: string;
};

export type duties = {
    [key in dutyCategoryKey]: dutyCategory;
};
