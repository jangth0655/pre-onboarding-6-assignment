import { brokerData } from '../contents/accountContents';
import { User } from '../model/inteface';

export const accountUsername = (list?: User[], userId?: number) => {
  if (!list || !userId) return;
  const result = list.filter((user) => {
    return user.id === userId ? user.name : null;
  });
  return result[0].name;
};

export const accountNumber = (string: string) => {
  return string.slice(0, 2) + '*'.repeat(string.length - 4) + string.slice(-2);
};

export const accountState = (state: number) => {
  switch (state) {
    case 9999:
      return '관리자확인필요';
    case 1:
      return '입금대기';
    case 2:
      return '운용중';
    case 3:
      return '투자중지';
    case 4:
      return '해지';
    default:
      break;
  }
};

export const accountCurrency = (currency: string) => {
  const replace = currency.replace(/\./g, '');
  return (
    replace.slice(0, 3) + ',' + replace.slice(3, 6) + ',' + replace.slice(9)
  );
};

export const accountDate = (date: Date) => {
  const year = new Date(date).toLocaleString('default', {
    year: 'numeric',
  });
  const month = new Date(date).toLocaleString('default', {
    month: '2-digit',
  });
  const day = new Date(date).toLocaleString('default', {
    day: '2-digit',
  });
  return `${year}/${month}/${day}`;
};

export const accountActive = (isActive: boolean) => {
  return isActive ? ' ⃝' : '❌';
};

export const accountName = (name: string) => {
  return name.split('Account')[0].trim();
};

export const accountBroker = (brokerId: string) => {
  const filter = Object.keys(brokerData).find(
    (key) => brokerData[key] === brokerId
  );
  return filter;
};
