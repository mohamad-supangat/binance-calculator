function generate_qty_order({ order_amount, price, leverage }) {
  let qty = (Number.parseFloat(order_amount) / price) * leverage;

  return qty;
}

function generate_target_price({ target_profit, type, price, qty }) {
  let target_price;
  if (type == "buy") {
    target_price =
      Number.parseFloat(price) +
      Number.parseFloat(target_profit) / Number.parseFloat(qty);
  } else {
    target_price =
      Number.parseFloat(price) -
      Number.parseFloat(target_profit) / Number.parseFloat(qty);
  }

  return target_price;
}

function generate_spread_price({ spread, price, type }) {
  const discount = (price * spread) / 100;

  let target_price = type == "buy" ? price - discount : price + discount;
  return target_price;
}

export { generate_qty_order, generate_target_price, generate_spread_price };
