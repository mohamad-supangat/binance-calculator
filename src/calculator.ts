class Calculator {
  type: number;
  leverage: number;
  entry_price: number;
  balance_amount: number;
  roe: number;

  constructor(
    type: number,
    leverage: number,
    entry_price: number,
    balance_amount: number,
    roe: number
  ) {
    this.type = type;
    this.leverage = leverage;
    this.entry_price = entry_price;
    this.balance_amount = balance_amount;
    this.roe = roe;
  }

  qty(): number {
    return (this.balance_amount / this.entry_price) * this.leverage;
  }

  imr(): number {
    return 1 / this.leverage;
  }

  inital_margin(): number {
    return this.qty() * this.entry_price * this.imr();
  }

  // roe() {
  //   return this.pnl() / this.inital_margin();
  // }

  exit_price(): number {
    if (this.type == 1) {
      return this.entry_price * (this.roe / this.leverage + 1);
    } else {
      return this.entry_price * (1 - this.roe / this.leverage);
    }
  }

  /**
   * Menghitung data keuntungan
   */
  pnl(): number {
    if (this.type == 1) {
      return (this.exit_price() - this.entry_price) * this.qty();
    } else {
      return (this.entry_price - this.exit_price()) * this.qty();
    }
  }
}
