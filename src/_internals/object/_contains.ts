export const contains = <S>(obj: S, key: keyof S): boolean => !!obj[key];
