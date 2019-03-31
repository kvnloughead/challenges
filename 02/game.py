#!python3
# Code Challenge 02 - Word Values Part II - a simple game
# http://pybit.es/codechallenge02.html

from data import DICTIONARY, LETTER_SCORES, POUCH
import itertools
import random

NUM_LETTERS = 7


# re-use from challenge 01
def calc_word_value(word):
    """Calc a given word value based on Scrabble LETTER_SCORES mapping"""
    if word in DICTIONARY:
        return sum(LETTER_SCORES.get(char.upper(), 0) for char in word)
    else:
        print("Not a valid word")
        return 0

# re-use from challenge 01
def max_word_value(words):
    """Calc the max value of a collection of words"""
    return max(words, key=calc_word_value)

def draw_letters():
    """Draws (and returns) 7 letters from POUCH of letters."""
    return [random.choice(POUCH) for i in range(7)]

def get_possible_dict_words(letters, dic=DICTIONARY):
    """Generates all valid words formable with the given letters,
    according to dic."""
    for i in range(len(letters) + 1):
        for perm in itertools.permutations(letters, i):
            if ''.join(perm) in dic:
                yield ''.join(perm)

def main():
    print('Please make a word out of the following letters: ')
    hand = draw_letters()
    print(hand)
    inp = input('Your word: ')
    score = calc_word_value(inp)
    print("Your word's score:", score)
    bestword = max_word_value(get_possible_dict_words(''.join(hand).lower()))
    bestscore = calc_word_value(bestword)
    print("Optimal word:", bestword, "Score:", bestscore)
    print("Your (relative) score:", score/bestscore)

if __name__ == "__main__":

    main()
