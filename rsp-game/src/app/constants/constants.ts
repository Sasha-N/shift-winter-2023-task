import { combinations } from "./interfaces";

export const baseCardDeck: Array<string> = ['paper', 'rock', 'scissor'];

export const winСombinations: combinations = {
    'paper': 'rock',
    'rock': 'scissor',
    'scissor': 'paper'
};

export const resultDescription = {
    'win': {
        title: 'Поздравляем с победой!',
        image: './../../assets/win.png'
    },
    'draw': {
        title: 'Победила дружба!',
        image: './../../assets/friendship.png'
    },
    'fail': {
        title: 'К сожалению, вы проиграли',
        image: './../../assets/fail.png'
    }
}