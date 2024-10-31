export const handleChineseNumber = (capital) => {
  const units = ['兆', '億', '萬', '千', '百'];
  const unitValues = [1000000000000, 100000000, 10000, 1000, 100];

  const numberToChinese = (originalNum) => {
    if (originalNum < 10) return originalNum.toString();

    let result = '';
    let num = originalNum;

    for (let i = 0; i < unitValues.length; i += 1) {
      const unitValue = unitValues[i];
      if (num >= unitValue) {
        const unitNum = Math.floor(num / unitValue);
        result += `${unitNum}${units[i]}`;
        num %= unitValue;
      }
    }

    if (num > 0) {
      result += num;
    }

    return result;
  };

  return numberToChinese(Number(capital)); // 將 p0 轉為數字並傳入
};
