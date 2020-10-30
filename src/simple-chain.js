const chainMaker = {
  chain: [],

  /**
   * Returns length chain
   * @returns {number}
   */
  getLength() {
    return this.chain.length;
  },
  /**
   * Pushes value to chain
   * @param {*} value
   * @returns {Object}
   */
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  /**
   * Removes link by position
   * @param {*} position
   * @returns {Object}
   */
  removeLink(position) {
    if (this.isNoValidPosition(position)) {
      this.chain = [];
      throw new Error();
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  /**
   * Reverses chain
   * @returns {Object}
   */
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  /**
   *Finalizes building chain
   * @returns {string}
   */
  finishChain() {
    let chain = this.chain.map(function (element) {
      return `( ${element} )`;
    });
    this.chain = [];
    return chain.join('~~'); // Returns local variable 'chain'
  },
  /**
   * Checks position for no valid values
   * @param {*} position
   * @returns {boolean}
   */
  isNoValidPosition(position) {
    return position <= 0 || typeof position !== 'number' || position >= this.getLength();
  }
};

module.exports = chainMaker;
