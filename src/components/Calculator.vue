<script setup lang="ts">
import { ref, computed } from "vue";
import {
  generate_qty_order,
  generate_target_price,
  generate_spread_price,
} from "../bot_functions.ts";

const data = ref({
  type: "buy",
  price: 1,
  order_amount: 1,
  balance: 10,
  target_profit: 1,
  leverage: 10,
});

const qty = computed(() => {
  return generate_qty_order({
    order_amount: data.value.order_amount,
    price: data.value.price,
    leverage: data.value.leverage,
  });
});

const spread_price = computed(() => {
  return generate_spread_price({
    spread: data.value.target_profit,
    type: data.value.type,
    price: data.value.price,
  });
});

const target_price = computed(() => {
  return generate_target_price({
    target_profit: data.value.target_profit,
    type: data.value.type,
    price: data.value.price,
    qty: qty.value,
  });
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
            div {{ qty }}

            <!---->
          <!-- .form-group -->
          <!--   label Spread Price -->
          <!--   div {{ spread_price }} -->
          <!---->

          .form-group
            label Target Price
            div {{ target_price }}


</template>
