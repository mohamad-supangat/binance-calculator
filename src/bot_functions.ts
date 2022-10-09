function imr(leverage: float) {
  return 1 / leverage;
}

function inital_margin(qty: float, entry_price: float, imr: float) {
  return qty * entry_price * imr;
}

/**
 * Menghitung data keuntungan
 *
 * @param type - -1 untuk short dan 1 untuk long
 * @param exit_price - harga jual / close posisi
 * @param entry_price - harga entry / open posisi
 * @param qty - quantity order
 */
function pnl(type: int, exit_price: float, entry_price: float, qty: float) {
  if (type == 1) {
    return (exit_price - entry_price) * qty;
  } else {
    return (entry_price - exit_price) * qty;
  }
}

/**
 * Menghitung hasil ROE% berapa perssen laba / rugi
 *
 * @param pnl - hasil dari fungsi pnl
 * @param inital_margin - hasil dari fungsi inital_margin
 * @returns
 */
function roe(pnl: float, inital_margin: float) {
  return pnl / inital_margin;
}

function target_price(type: int, entry_price: float, roe) {}

function generate_qty_order({ order_amount, price, leverage }) {
  let qty = (Number.parseFloat(order_amount) / price) * leverage;

  return qty;
}

function generate_target_price({ target_profit, type, open_price, qty }) {
  let target_price;
  if (type == "buy") {
    target_price =
      Number.parseFloat(open_price) +
      Number.parseFloat(target_profit) / Number.parseFloat(qty);
  } else {
    target_price =
      Number.parseFloat(open_price) -
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
