/*
  Проходить всі тести за виключенням першого
  Перший не сходиться у моєму розумінні щодо алгоритму
  Тому що, було написано "Якщо алгоритм не може повернути найближче значення, тоді він намагається повернути найближче доступне значення"
  Якщо вибирати між 360 і 720, то ближчим до 1080 є число 720 (1080 - 720 < 1080 - 360).
  А у відповіді записано 360.
  Тому або тут помилка в прикладі, або я не до кінця зрозумів завдання :)
*/

const attempt = (available, allowed, preferred) => {
  let availableAllowed;
  let result = [];

  if(allowed.includes('any')) availableAllowed = [...available];
  else availableAllowed = available.filter(e => allowed.includes(e));

  if(!availableAllowed) return [];
  if(preferred.includes('any')) return availableAllowed;
  
  preferred.forEach(e => {
    if(availableAllowed.includes(e)) {
      result.push(e);

    } else {
      const bestDiffItem = availableAllowed.reduce((acc, val) => {
        const currentBestDiff = Math.abs(val - e) < Math.abs(acc - e);
        const currentBigger = val > e;
        
        return (currentBestDiff || currentBigger) ? val : acc;
      }, Infinity);
      
      if((bestDiffItem !== Infinity) && !result.includes(bestDiffItem)) result.push(bestDiffItem);
    }
  });

  return result;
};

module.exports = attempt;
