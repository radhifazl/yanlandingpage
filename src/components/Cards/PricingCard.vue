<template>
  <div class="pricing-card">
      <div class="price-content p-3 px-2">
        <div class="price-type text-center">
            <h4>
                {{ type }}
            </h4>
        </div>

        <ul class="price-features mt-4">
            <slot />
        </ul>
      </div>

      <div class="price-label text-center">
          <h5>
              {{ price }}
          </h5>
      </div>
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

.price-label {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-top: 0.5rem;
    background: var(--primary-color);
}

.price-label h5 {
    font-weight: 600;
    color: #FFFFFF;
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