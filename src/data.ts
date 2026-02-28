export interface MessageItem {
  id: number;
  keyword: string;
  suffix: string;
  fullText: string;
  englishLabel: string;
  color: string;
}

export const messages: MessageItem[] = [
  {
    id: 1,
    keyword: "注文",
    suffix: "したいです",
    fullText: "注文したいです",
    englishLabel: "ORDER REQUEST",
    color: "#FF0000",
  },
  {
    id: 2,
    keyword: "お会計",
    suffix: "おねがいします",
    fullText: "お会計おねがいします",
    englishLabel: "CHECK PLEASE",
    color: "#FF6600",
  },
  {
    id: 3,
    keyword: "メニュー",
    suffix: "をください",
    fullText: "メニューをください",
    englishLabel: "MENU REQUEST",
    color: "#FFD700",
  },
  {
    id: 4,
    keyword: "おかわり",
    suffix: "欲しいです",
    fullText: "おかわり欲しいです",
    englishLabel: "REFILL REQUEST",
    color: "#9B6DD7",
  },
  {
    id: 5,
    keyword: "すみません",
    suffix: "",
    fullText: "すみません",
    englishLabel: "EXCUSE ME",
    color: "#FF0000",
  },
  {
    id: 6,
    keyword: "お水",
    suffix: "ください",
    fullText: "お水ください",
    englishLabel: "WATER REQUEST",
    color: "#00BFFF",
  },
  {
    id: 7,
    keyword: "持ち帰り",
    suffix: "でおねがいします",
    fullText: "持ち帰りでおねがいします",
    englishLabel: "TAKEOUT REQUEST",
    color: "#00FF88",
  },
  {
    id: 8,
    keyword: "ありがとう",
    suffix: "ございます",
    fullText: "ありがとうございます",
    englishLabel: "THANK YOU",
    color: "#FFD700",
  },
];
