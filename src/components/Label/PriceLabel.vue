<template>
    <div class="price-label text-center">
        <h5>
            {{ price }}
        </h5>
    </div>
</template>

<script>
import { firestore } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export default {
 props: ["priceType"],
 data () {
     return {
         price: ''
     }
 },
 methods: {
     async getPrices () {
         const docRef = doc(firestore, 'prices', 'yanpage_prices', `${this.priceType}_price`, 'prices')

         await getDoc(docRef)
           .then((prices) => {
               this.price = prices.data().price
           })
     }
 },
 mounted () {
     this.getPrices()
 }
}
</script>

<style scoped>
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
    text-transform: uppercase;
}
</style>