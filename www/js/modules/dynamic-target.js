// dynamic-target.js - Dynamic target calculation engine
export function calculateDynamicTarget(storeData, fullMonthTarget, defaultDaily) {
  let filledSales = 0;
  let filledDays = 0;

  storeData.forEach(d => {
    if (d.filled && d.actual !== null) {
      filledSales += d.actual;
      filledDays++;
    }
  });

  const remainingDays = Math.max(0, 30 - filledDays);
  let newDailyTarget = defaultDaily;

  if (remainingDays > 0) {
    const remainingTarget = fullMonthTarget - filledSales;
    newDailyTarget = Math.max(0, Math.round(remainingTarget / remainingDays));
  }

  return {
    filledDays,
    remainingDays,
    filledSales,
    newDailyTarget,
    gap: filledSales - (filledDays * defaultDaily),
    diff: newDailyTarget - defaultDaily,
    shiftTarget: Math.round(newDailyTarget / 2)
  };
}
