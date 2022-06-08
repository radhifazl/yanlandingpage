<template>
  <div class="pricing-container page-container">
      <PageTitle :title="'Pilihan Harga YAN'" class="pricing-page-title"/>

      <div class="pricing-card-wrapper mt-5">
          <PricingCard :type="'Basic'" :price="basicPrice">
              <template v-slot:priceList>
                <li class="price-ft-list" v-for="basic in basicPriceList" :key="basic">
                    {{ basic.name }}
                </li>
              </template>
              
              <template v-slot:priceLabel>
                  <PriceLabel :priceType="'basic'"/>
              </template>
          </PricingCard>
          <PricingCard :type="'Regular'" :price="regularPrice">
              <template v-slot:priceList>
                <li class="price-ft-list" v-for="reg in regularPriceList" :key="reg">
                    {{ reg.name }}
                </li>
              </template>
              
              <template v-slot:priceLabel>
                  <PriceLabel :priceType="'regular'"/>
              </template>
          </PricingCard>
          <PremiumCard :type="'Premium'" :price="premiumPrice">
              <template v-slot:priceList>
                <li class="price-pr-list" v-for="prem in premiumPriceList" :key="prem">
                    {{ prem.name }}
                </li>
              </template>
              
              <template v-slot:priceLabel>
                  <PriceLabel :priceType="'premium'"/>
              </template>
          </PremiumCard>
      </div>
  </div>
</template>

<script>
import PageTitle from '@/components/Title/PageTitle.vue'
import PricingCard from '@/components/Cards/PricingCard.vue'
import PremiumCard from '@/components/Cards/PremiumCard.vue'
import PriceLabel from "@/components/Label/PriceLabel.vue";
import { firestore } from "@/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export default {
    name: 'PricingView',
    components: { PageTitle, PricingCard, PremiumCard, PriceLabel },
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
            ],
            premiumFeatures: [
                'Bebas Revisi',
                'Bebas Memilih Fitur',
                'Background Music',
                'Aktif Selamanya',
                'Google Maps',
                'Hitung Mundur Acara',
                'Galeri Pengantin',
                'Amplop Digital',
                'Buku Tamu',
                'Embed Video YouTube',
                'Pilihan Tema Website Banyak',
                'Request Fitur'
            ],
            basic: [],
            basicPriceList: [],
            basicPrice: '',
            regular: [],
            regularPriceList: [],
            regularPrice: '',
            premium: [],
            premiumPriceList: [],
            premiumPrice: '',
        }
    },
    methods: {
        getPrice () {
            const basicPriceCollection = collection(firestore, 'prices', 'yanpage_prices', 'basic')
            getDocs(basicPriceCollection)
              .then((docs) => {
                  docs.forEach(doc => {
                      this.basicPriceList.push({
                          id: doc.id,
                          ...doc.data()
                      })
                  })
              })

              console.log(this.basicPriceList)
              
            const regularPriceCollection = collection(firestore, 'prices', 'yanpage_prices', 'regular')
            getDocs(regularPriceCollection)
              .then((docs) => {
                  docs.forEach(doc => {
                      this.regularPriceList.push({
                          id: doc.id,
                          ...doc.data()
                      })
                  })
              })

            console.log(this.regularPriceList)
              
            const premiumPriceCollection = collection(firestore, 'prices', 'yanpage_prices', 'premium')
            getDocs(premiumPriceCollection)
              .then((docs) => {
                  docs.forEach(doc => {
                      this.premiumPriceList.push({
                          id: doc.id,
                          ...doc.data()
                      })
                  })
              })

            console.log(this.premiumPriceList)
        }
    },
    mounted () {
        this.getPrice()
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

.price-pr-list {
    font-weight: 500;
    color: var(--premiumcard-color);
    transition: all 0.35s ease-in-out;
    margin-bottom: 0.3rem;
    position: relative;
}

.price-pr-list::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -10%;
    width: 20px;
    height: 20px;
    background: url('@/assets/icons/check-white.svg');
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