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
    ],
}
</script>

<style scoped>
.pricing-card {
    width: 350px;
    height: 500px;
    border: 3px solid var(--premiumcard-border);
    border-radius: 10px;
    box-shadow: var(--card-boxshadow);
    position: relative;
    background: var(--premiumcard-bg);
    transition: all 0.35s ease-in-out;
}

.price-label {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-top: 0.5rem;
    background: var(--premiumcard-label);
    transition: all 0.35s ease-in-out;
}

.price-label h5 {
    font-weight: 600;
    color: var(--premiumcard-label-color);
    transition: all 0.35s ease-in-out;
}

.price-type h4 {
    font-weight: 600;
    color: #FFFFFF;
}

.price-ft-list {
    font-weight: 500;
    color: var(--premiumcard-color);
    transition: all 0.35s ease-in-out;
    margin-bottom: 0.3rem;
    position: relative;
}

.price-ft-list::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -10%;
    width: 20px;
    height: 20px;
    background: url('../../assets/icons/check-white.svg');
    background-size: 100%;
    background-position: center;
}

@media screen and (max-width: 868px) {
    .pricing-card {
        width: 100%;
        height: 100%;
        padding-bottom: 2rem;
    }
}
</style>