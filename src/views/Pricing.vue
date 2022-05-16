<template>
  <div class="pricing-container page-container">
      <PageTitle :title="'Pilihan Harga YAN'" class="pricing-page-title"/>

      <div class="pricing-card-wrapper mt-5">
          <PricingCard :type="'Basic'" :price="'RP 75.000,00'">
              <li class="price-ft-list" v-for="basicFT in basicFeatures" :key="basicFT">
                  {{ basicFT }}
              </li>
          </PricingCard>
          <PricingCard :type="'Regular'" :price="'RP 125.000,00'">
              <li class="price-ft-list" v-for="regFT in regularFeatures" :key="regFT">
                  {{ regFT }}
              </li>
          </PricingCard>
          <PremiumCard :type="'Premium'" :price="'RP 150.000,00'"/>
      </div>
  </div>
</template>

<script>
import PageTitle from '@/components/Title/PageTitle.vue'
import PricingCard from '@/components/Cards/PricingCard.vue'
import PremiumCard from '@/components/Cards/PremiumCard.vue'
export default {
    name: 'PricingView',
    components: { PageTitle, PricingCard, PremiumCard },
    data() {
        return {
            basicFeatures: [
                '1x Revisi / Garansi',
                'Fitur Terbatas',
                'Google Maps',
                'Background Music',
                '3 Hari Masa Aktif',
            ],
            regularFeatures: [
                '3x Revisi / Garansi',
                'Penambahan Fitur',
                'Background Music',
                '7 Hari Masa Aktif',
                'Google Maps',
                'Hitung Mundur Acara',
                'Galeri Pengantin',
                'Buku Tamu'
            ]
        }
    }
}
</script>

<style scoped>
.pricing-card-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.price-ft-list {
    font-weight: 500;
    color: var(--card-list-color);
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
    background: url('../assets/icons/check.svg');
    background-size: 100%;
    background-position: center;
}

@media screen and (max-width: 868px) {
    .pricing-card-wrapper {
        flex-direction: column;
        gap: 1rem;
    }
}
</style>