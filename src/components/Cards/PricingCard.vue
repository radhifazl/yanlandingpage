<template>
  <div class="pricing-card">
      <div class="price-content p-3 px-2">
        <div class="price-type text-center">
            <h4>
                {{ type }}
            </h4>
        </div>

        <ul class="price-features mt-4">
            <slot name="priceList"/>
        </ul>
      </div>

      <slot name="priceLabel"/>
  </div>
</template>

<script>

export default {
    name: 'PricingCard',
    props: [
        'type',
        'price',
    ]
}
</script>

<style scoped>
.pricing-card {
    width: 350px;
    height: 450px;
    border: 3px solid var(--primary-color);
    border-radius: 10px;
    box-shadow: var(--card-boxshadow);
    position: relative;
}

.price-type h4 {
    font-weight: 600;
    color: var(--primary-color);
}

@media screen and (max-width: 868px) {
    .pricing-card {
        width: 100%;
        height: 400px;
    }
}
</style>