import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

class RememberlyAPI {
  static async getCards() {
    const res = await axios({
      methods: 'GET',
      url: `${BASE_URL}/cards`
    });
    return res.data;
  }
}

export default RememberlyAPI;