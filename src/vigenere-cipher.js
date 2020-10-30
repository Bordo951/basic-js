const ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const ALPHABET_NUMBERS_LETTERS = 26;

class VigenereCipheringMachine {
  message;
  key;
  count;
  resultedMessage;

  constructor(isReverse = true) {
    this.isReverse = isReverse;
  }

  initMachine(message, key) {
    this.validateInputValues(message, key);
    this.message = message.toUpperCase();
    this.key = key.toUpperCase();
    this.resultedMessage = '';
    this.count = 0;
  }

  encrypt(message, key) {
    return this.getOperationResult(message, key, 'encrypt');
  }

  decrypt(encryptedMessage, key) {
    return this.getOperationResult(encryptedMessage, key, 'decrypt');
  }

  getOperationResult(message, key, operation) {
    this.initMachine(message, key);

    for (let i = 0; i < this.message.length; i++) {
      let currentKeySymbol = this.getKeySymbolByPosition(i),
          currentKeySymbolPosition = this.getSymbolAlphabetPosition(currentKeySymbol),
          currentMessageSymbol = this.message[i],
          currentMessageSymbolPosition = this.getSymbolAlphabetPosition(currentMessageSymbol),
          offsettedPosition;

      if (this.isSymbolNotInAlphabet(currentMessageSymbol) || this.isSymbolNotInAlphabet(currentKeySymbol)) {
        this.resultedMessage += this.message[i];
        this.count++;
        continue;
      }

      if (operation === 'decrypt') {
        offsettedPosition = this.getDecryptedOffset(currentKeySymbolPosition, currentMessageSymbolPosition);
      }

      if (operation === 'encrypt') {
        offsettedPosition = this.getEncryptedOffset(currentKeySymbolPosition, currentMessageSymbolPosition)
      }

      this.resultedMessage += this.getLetterByPosition(offsettedPosition);
    }

    return this.getResultedMessage();
  }

  getEncryptedOffset(keySymbolPosition, messageSymbolPosition) {
    return (keySymbolPosition + messageSymbolPosition) % ALPHABET_NUMBERS_LETTERS;
  }

  getDecryptedOffset(keySymbolPosition, messageSymbolPosition) {
    return Math.abs(keySymbolPosition - messageSymbolPosition - ALPHABET_NUMBERS_LETTERS) % ALPHABET_NUMBERS_LETTERS;
  }

  getLetterByPosition(position) {
    return ALPHABET[position];
  }

  getSymbolAlphabetPosition(position) {
    return ALPHABET.indexOf(position);
  }

  getKeySymbolByPosition(position) {
    return this.key[(position - this.count) % this.key.length];
  }

  isSymbolNotInAlphabet(symbol) {
    return this.getSymbolAlphabetPosition(symbol) === -1;
  }

  getResultedMessage() {
    return this.isReverse ? this.resultedMessage : this.reverseMessage(this.resultedMessage);
  }

  reverseMessage(message) {
    return message.split('').reverse().join('');
  }

  validateInputValues(message, key) {
    if (this.isNotValidValues(message, key)) {
      throw new Error();
    }
  }

  isNotValidValues(message, key){
    return typeof message === "undefined" || typeof key === "undefined";
  }
}
module.exports = VigenereCipheringMachine;
