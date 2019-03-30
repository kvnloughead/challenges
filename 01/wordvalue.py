from data import DICTIONARY, LETTER_SCORES

#f = open('dictionary.txt', 'r')

def load_words():
    """Load dictionary into a list and return list"""
    with open('dictionary.txt', 'r') as f:
        words = []
        for line in f.readlines():
            word = line.strip()
            words.append(word)
        return words

def calc_word_value(word):
    """Calculate the value of the word entered into function
    using imported constant mapping LETTER_SCORES"""
    return sum([LETTER_SCORES.get(letter.upper(), 0) for letter in word])
    

def max_word_value(words=load_words()):
    """Calculate the word with the max value, can receive a list
    of words as arg, if none provided uses default DICTIONARY"""
    return max(words, key=calc_word_value)


print(max_word_value(load_words()))

if __name__ == "__main__":
    pass # run unittests to validate
