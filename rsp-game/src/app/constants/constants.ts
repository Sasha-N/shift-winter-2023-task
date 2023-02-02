import { combinations } from "./interfaces";

export const pagesRoutes: Array<string> = ['game', 'result', 'specification'];

export const baseCardDeck: Array<string> = ['paper', 'rock', 'scissor'];

export const winСombinations: combinations = {
    'paper': 'rock',
    'rock': 'scissor',
    'scissor': 'paper'
};

export const winDescription = {
    title: 'Поздравляем с победой!',
    image: './../../assets/game-results/win.png'
};

export const drawDescription = {
    title: 'Победила дружба!',
    image: './../../assets/game-results/friendship.png'
};

export const failDescription = {
    title: 'К сожалению, вы проиграли',
    image: './../../assets/game-results/fail.png'
};
