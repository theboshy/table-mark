import { v4 as uuid } from 'uuid';

export const Score = {
    level: 1,
    score: 0
}

export const User = {
    id: uuid(),
    name:"",
    score: [Score],
    icon: '',
    currentLevel: 1
};
