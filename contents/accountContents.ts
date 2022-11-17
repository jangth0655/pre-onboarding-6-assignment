export type AccountContentType = {
  name: string;
  key: string;
  value: string | number;
};

export const accountStatus: AccountContentType[] = [
  {
    name: 'status',
    key: 'all',
    value: 'all',
  },
  {
    name: 'status',
    key: '관리자확인필요',
    value: 9999,
  },
  {
    name: 'status',
    key: '입금대기',
    value: 1,
  },
  {
    name: 'status',
    key: '운용중',
    value: 2,
  },
  {
    name: 'status',
    key: '투자중지',
    value: 3,
  },
  {
    name: 'status',
    key: '해지',
    value: 4,
  },
];

export const accountBroker: AccountContentType[] = [
  { name: 'broker', key: 'all', value: 'all' },
  { name: 'broker', key: '유안타증권', value: '209' },
  { name: 'broker', key: '현대증권', value: '218' },
  { name: 'broker', key: '미래에셋증권', value: '230' },
  { name: 'broker', key: '대우증권', value: '238' },
  { name: 'broker', key: '삼성증권', value: '240' },
  { name: 'broker', key: '한국투자증권', value: '243' },
  { name: 'broker', key: '우리투자증권', value: '247' },
  { name: 'broker', key: '교보증권', value: '261' },
  { name: 'broker', key: '하이투자증권', value: '262' },
  { name: 'broker', key: 'HMC투자증권', value: '263' },
  { name: 'broker', key: '키움증권', value: '264' },
  { name: 'broker', key: '이베스트투자증권', value: '265' },
  { name: 'broker', key: 'SK증권', value: '266' },
  { name: 'broker', key: '대신증권', value: '267' },
  { name: 'broker', key: '아이엠투자증권', value: '268' },
  { name: 'broker', key: '한화투자증권', value: '269' },
  { name: 'broker', key: '하나대투자증권', value: '270' },
  { name: 'broker', key: '동부증권', value: '279' },
  { name: 'broker', key: '유진투자증권', value: '280' },
  { name: 'broker', key: '카카오페이증권', value: '288' },
  { name: 'broker', key: '메리츠종합금융증권', value: '287' },
  { name: 'broker', key: '부국증권', value: '290' },
  { name: 'broker', key: '신영증권', value: '291' },
  { name: 'broker', key: 'LIG투자증권', value: '292' },
  { name: 'broker', key: '토스증권', value: '271' },
];

export const accountActive: AccountContentType[] = [
  { name: 'active', key: 'all', value: 'all' },
  { name: 'active', key: '활성화', value: 'active' },
  { name: 'active', key: '비활성화', value: 'inActive' },
];

export const brokerData: Record<string, string> = {
  유안타증권: '209',
  현대증권: '218',
  미래에셋증권: '230',
  대우증권: '238',
  삼성증권: '240',
  한국투자증권: '243',
  우리투자증권: '247',
  교보증권: '261',
  하이투자증권: '262',
  HMC투자증권: '263',
  키움증권: '264',
  이베스트투자증권: '265',
  SK증권: '266',
  대신증권: '267',
  아이엠투자증권: '268',
  한화투자증권: '269',
  하나대투자증권: '270',
  동부증권: '279',
  유진투자증권: '280',
  카카오페이증권: '288',
  메리츠종합금융증권: '287',
  부국증권: '290',
  신영증권: '291',
  LIG투자증권: '292',
  토스증권: '271',
};

export const accountStatusData: Record<string, number> = {
  관리자확인필요: 9999,
  입금대기: 1,
  운용중: 2,
  투자중지: 3,
  해지: 4,
};

export const activeState = {
  active: 'active',
  inActive: 'inActive',
  all: 'all',
};
