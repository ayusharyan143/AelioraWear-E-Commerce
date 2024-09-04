const Razorpay = require('razorpay');

KEY_ID = "OqWo4EPDkq6CH9"
KEY_SECRET = "uhasdfhpaisdufoash"

const razorpay = new Razorpay({
  key_id: KEY_ID,
  key_secret: KEY_SECRET,
});

module.exports = razorpay ;