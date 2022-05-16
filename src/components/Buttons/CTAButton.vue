<template>
    <div class="cta-wrapper">
        <router-link to="/about-yan">
          <button class="check-theme-btn" @mouseenter="animate">
              <i class='bx-fw bx bxs-navigation'></i> Tentang Yan
          </button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'CTAButton',
    methods: {
        animate () {
            // add class to icon
            const icon = document.querySelector('.check-theme-btn i')
            if(!icon.classList.contains('bx-tada')) {
                icon.classList.add('bx-tada')
            } else {
                icon.classList.remove('bx-tada')
            }

            const btn = document.querySelector('.check-theme-btn')

            btn.addEventListener('mouseleave', () => {
                icon.classList.remove('bx-tada')
            })
        }
    }
}
</script>

<style scoped>
.check-theme-btn {
    border: none;
    outline: none;
    width: 230px;
    background: #FFFFFF;
    border: 2px solid transparent;
    padding: 0.5rem 1rem;
    color: var(--primary-color);
    font-weight: 500;
    border-radius: 13px;
    transition: all 0.35s ease;
}

.check-theme-btn:hover {
    background: #ffffff31;
    backdrop-filter: blur(10px);
    border: 2px solid #FFFFFF;
    color: #FFFFFF;
}

@media screen and (max-width: 868px) {
    .check-theme-btn {
        background: var(--cta-mb-bg);
        color: var(--cta-mb-color);
    }
}
</style>