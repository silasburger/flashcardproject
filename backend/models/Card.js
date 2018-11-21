const db = require('../db');

/**
 * Related functions for cards
 */
class Card {
  /**
   * Get all cards from the cards table in database
   */
  static async getAll() {
    const res = await db.query(
      `SELECT question, answer 
       FROM cards`);
      return res.rows;
  }
}

module.exports = Card;