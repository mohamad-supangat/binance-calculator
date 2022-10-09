<script setup lang="ts">
import { ref, computed } from "vue";
import Calculator from "../calculator.ts";

const data = ref({
  type: "buy",
  price: 1,
  order_amount: 1,
  balance: 10,
  target_profit: 1,
  leverage: 10,
});

const calculator = computed(() => {
  return new Calculator(
    data.value.type == "sell" ? -1 : 1,
    data.value.leverage,
    data.value.price,
    data.value.order_amount,
    data.value.target_profit
  );
});
</script>
<template lang="pug">
.row
  .col-12.col-md-6
    .card
      .card-body
        form
          .form-group
            label Type
            select.form-control(v-model='data.type')
              option buy
              option sell
          .form-group
            label Harga (usdt)
            input.form-control(v-model='data.price')
          .form-group
            label Jumlah Order (usdt)
            input.form-control(v-model='data.order_amount')
          .form-group
            label Balance
            input.form-control(v-model='data.balance')
          .form-group
            label Target Profit %
            input.form-control(v-model='data.target_profit')
          .form-group
            label leverage (x)
            input.form-control(v-model='data.leverage')
  .col-12.col-md-6
    .card
      .card-body
        form
          .form-group
            label QTY
            div {{ calculator.qty() }}

          .form-group
            label Target Price
            div {{ calculator.exit_price() }}

          .form-group
            label PNL
            div {{ calculator.pnl() }}

          .form-group
            label Initial Margin
            div {{ calculator.inital_margin() }}


</template>
