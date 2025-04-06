import { Context } from 'telegraf';

export interface ViewData {
  [key: string]: any;
}

export interface View {
  data?: ViewData;
  setData: (data: ViewData) => void;
  [key: string]: any;
}

export interface User {
  telegramId: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  createdAt: Date;
  lang?: string;
}

export type BotContext = Context & {
  update: {
    message: {
      from: {
        id: number;
        username?: string;
        first_name?: string;
        last_name?: string;
      };
    };
  };
}; 