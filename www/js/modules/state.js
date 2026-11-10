// state.js - Shared application state & store data
export const STORE_INFO = {
  name: "KARANG SATRIA",
  code: "C383",
  branch: "Bekasi",
  watermark: "LS Studio monitoring version 0.1.2026",
  defaultTarget: 14912273,
  fullMonthTarget: 447949819
};

export const INITIAL_SALES = [
  { tgl: 1, target: 14912273, actual: 19752827, filled: true, simulated: false },
  { tgl: 2, target: 15494074, actual: 15990188, filled: true, simulated: false },
  { tgl: 3, target: 14912273, actual: 11026528, filled: true, simulated: false },
  { tgl: 4, target: 14912273, actual: 14539097, filled: true, simulated: false },
  { tgl: 5, target: 14912273, actual: 12921026, filled: true, simulated: false },
  { tgl: 6, target: 14912273, actual: 14723768, filled: true, simulated: false },
  { tgl: 7, target: 14912273, actual: 9962104,  filled: true, simulated: false },
  { tgl: 8, target: 14912273, actual: 14311491, filled: true, simulated: false },
  { tgl: 9, target: 14912273, actual: 14078024, filled: true, simulated: false }
];

export const INITIAL_SO = {
  nominalHariIni: 0,
  nominalBulanIni: -1850000,
  grossBulanIni: 1850000,
  status: "🟢 AMAN",
  lastUpdate: new Date().toISOString()
};

export const INITIAL_MEMBER = {
  totalStruk: 4120,
  salesMember: 76500000,
  kontribusiPct: 60.09
};
