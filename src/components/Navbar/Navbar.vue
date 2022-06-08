<template>
    <div class="navbar">
        <div class="nav-logo">
            <a href="/#home" class="logo-link">
                <div class="logo">
                        
                </div>
            </a>

            <div class="menu-toggle d-lg-none" @click="openMenu" :class="{open: isOpen}">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>

        <div class="nav-menu" :class="{open: isOpen}">
            <ul class="nav-list">
                <div class="nav-list-link">
                    <li class="nav-item">
                        <a href="/#home" class="nav-link active">Home</a>
                    </li>
                    
                    <li class="nav-item">
                        <a href="/#fitur" class="nav-link">Fitur</a>
                    </li>
                    
                    <li class="nav-item">
                        <a href="/#tema" class="nav-link">Tema</a>
                    </li>
                    
                    <li class="nav-item">
                        <a href="/#harga" class="nav-link">Harga</a>
                    </li>
                    
                    <li class="nav-item">
                        <a href="/#contact" class="nav-link">Contact Us</a>
                    </li>
                    
                    <li class="nav-item">
                        <ThemeButton @emitEvent="changeMode">
                            {{ mode }} Mode
                        </ThemeButton>
                    </li>
                </div>
                
                <li class="nav-item d-lg-block d-none">
                    <div class="nav-medsos" style="display: flex; gap: 0.5rem;">
                        <a href="">
                            <img src="../../assets/icons/whatsapp.svg" alt="Whatsapp">
                        </a>
                        <a href="">
                            <img src="../../assets/icons/instagram.svg" alt="Instagram">
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { linkAction } from "./Navbar.js";
import ThemeButton from "../Buttons/ThemeButton.vue";

export default {
    name: 'NavbarComp',
    components: {
        ThemeButton
    },
    data () {
        return {
            isOpen: false
        }
    },
    props: {
        mode: {
            type: String,
        }
    },
    mounted () {
        linkAction()
    },
    methods: {
        openMenu () {
            if(this.isOpen) {
                this.isOpen = false
            } else {
                this.isOpen = true
            }
        },
        changeMode () {
            //emit change mode event
            this.$emit('changeMode', this.mode)
        },
    }
}
</script>

<style scoped>
.navbar {
    position: fixed;
    top: -0.5%;
    left: 0;
    width: 100%;
    height: 4rem;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    transition: 0.35s ease-in-out;
    z-index: 1000;
    transition: all 0.35s ease;
}

.navbar.scrolled {
    background: var(--nav-bg);
    box-shadow: var(--nav-boxshadow);
}

.nav-logo {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.logo-link {
    width: 250px;
    height: 100%;
}

.logo {
    width: 100%;
    height: 100%;
    background: url(../../assets/images/logo/logo.svg) no-repeat left;
    background-size: contain;
    margin-top: -0.3rem;
    transition: background 0.35s ease-in-out;
}

.navbar.scrolled .logo {
    background: url(../../assets/images/logo/logo-alt.svg) no-repeat left;
}

.menu-toggle {
    width: 28px;
    height: 25px;
    cursor: pointer;
    margin-top: 0.5rem;
}

.menu-toggle .bar {
    width: 100%;
    height: 13%;
    background: #FFFFFF;
    display: block;
    margin-bottom: 0.3rem;
    transition: all 0.35s ease-in-out;
}

.navbar.scrolled .menu-toggle .bar {
    background: var(--secondary-color);
}

.open .bar:nth-child(1) {
    transform: rotate(45deg) translateY(0.7rem);
}

.open .bar:nth-child(2) {
    transform: translateX(-3rem);
    opacity: 0;
}

.open .bar:nth-child(3) {
    transform: rotate(-45deg) translateY(-0.7rem);
}

.nav-menu {
    height: 100%;
}

.nav-menu .nav-list, .nav-list-link {
    display: flex;
    align-items: center;
    height: 100%;
}

.nav-item {
    margin-right: 0.7rem;
}

.nav-link {
    font-size: 1.2rem;
    color: var(--secondary-color);
    transition: 0.25s ease;
}

.nav-link:hover {
    color: var(--primary-color);
}

.nav-link.active {
    color: var(--primary-color);
}

@media screen and (max-width: 768px) {
    .nav-menu {
        width: 80%;
        height: 100%;
        background: var(--nav-glassbg);
        box-shadow: var(--nav-glassboxshadow);
        backdrop-filter: blur( 0px );
        -webkit-backdrop-filter: blur( 0px );
        border: var(--nav-glassborder);
        position: fixed;
        top: 0;
        left: -100%;
        opacity: 0;
        transition: all 0.35s ease-in-out;
    }

    .nav-menu.open {
        width: 80%;
        backdrop-filter: blur( 8px );
        -webkit-backdrop-filter: blur( 8px );
        left: 0;
        opacity: 1;
    }

    .nav-logo {
        width: 100%;
    }

    .nav-menu .nav-list, .nav-list-link {
        flex-direction: column;
        align-items: flex-start;
        margin-top: 3.5rem;
        margin-left: -1rem;
    }

    .nav-link {
        color: var(--nav-color);
    }

    .nav-item {
        margin-bottom: 1.5rem;
        font-weight: 500;
    }
}
</style>