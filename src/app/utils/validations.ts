export const validLoginPick = (x: any, val: string) => {
  if (x.login) {
    if (x.login.toLowerCase().includes(val)) {
      return true;
    }
  }

  return false;
};
