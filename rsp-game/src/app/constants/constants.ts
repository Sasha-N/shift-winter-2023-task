import { combinations } from "./interfaces";

export const baseCardDeck: Array<string> = ['paper', 'rock', 'scissor'];

export const winСombinations: combinations = {
    'paper': 'rock',
    'rock': 'scissor',
    'scissor': 'paper'
};

export const winDescription = {
    title: 'Поздравляем с победой!',
    image: './../../assets/win.png'
};

export const drawDescription = {
    title: 'Победила дружба!',
    image: './../../assets/friendship.png'
};

export const failDescription = {
    title: 'К сожалению, вы проиграли',
    image: './../../assets/fail.png'
};
