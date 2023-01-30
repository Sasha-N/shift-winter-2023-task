import { combinations } from "./interfaces";

export const baseCardDeck: Array<string> = ['paper' , 'rock' ,'scissor'];

export const winСombinations: combinations = {
    'paper': 'rock',
    'rock': 'scissor',
    'scissor': 'paper'
};