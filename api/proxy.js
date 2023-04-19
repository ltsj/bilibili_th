const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const response = await axios.get('https://api.bilibili.tv/intl/gateway/web/v2/ogv/timeline', {
      params: {
        s_locale: 'zh_SG',
        platform: 'web',
      },
      headers: {
        'Content-Type': 'application/json',
        'X-Real-IP': '泰国 IP 地址', // 使用泰国 IP 地址
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response.status).json({ error: error.message });
  }
};
