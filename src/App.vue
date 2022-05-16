<template>
  <router-view/>
</template>

<style>
html, body {
  padding: 0;
  margin: 0;
}

:root {
  --bg: #ffffff;
  --primary-color: #6357EB;
  --secondary-color: #6D6D6D;
  --white: #ffffff;

  /* NAVBAR VARIABLES */
  --nav-bg: #FCFCFC;
  --navmenu-bg: #3F3D56;
  --nav-color: #5a5a5a;
  --nav-boxshadow: 0px 5px 10px rgba(105, 105, 105, 0.25);
  --nav-boxshadow-transparent: 0px 5px 10px rgba(105, 105, 105, 0);

  /* NAV MENU GLASSMORPHISM */
  --nav-glassbg: rgba(255, 255, 255, 0.35);
  --nav-glassborder: 1px solid rgba( 255, 255, 255, 0.18 );
  --nav-glassboxshadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );

  /* CARD VARIABLES */
  --card-title-color: #606060;
  --orange-color: #FF6A16;

  /* MODE TOGGLE */
  --toggle-bg: #e9e9e9ab;
  --toggle-color: #212121;

  /* HOME CTA */
  --cta-mb-bg: var(--primary-color);
  --cta-mb-color: #FFFFFF;

  /* FEATURES */
  --feature-boxshadow: 0px 10px 15px 5px rgba(163, 163, 163, 0.53);
  --feature-title-color: #606060;

  /* CARD */
  --card-list-color: #6357EB;
  --card-boxshadow: 0px 15px 25px rgba(63, 62, 62, 0.25);
  --premiumcard-bg: #6357EB;
  --premiumcard-border: #FFFFFF;
  --premiumcard-label: #FFFFFF;
  --premiumcard-label-color: #6357EB;
  --premiumcard-color: #FFFFFF;

  /* MESSAGE BOX */
  --send-btn-bg: transparent;
  --submit-btn-color: #FFFFFF;
  --submit-btn-bg: #FFFFFF;
  --message-box-bg: #FFFFFF;
  --message-box-color: #1C1C1C;
  --message-box-btn-bg: #FFFFFF;
  --message-box-btn-bg-hover: #ebebeb;
  --message-box-btn-color: #6357EB;
  --message-box-btn-color-hover: #6c5ff7;
}

:root.Dark {
  --bg: #1c1c1c;
  --secondary-color: #D1D1D1;
  --nav-color: #e6e6e6;
  --nav-bg: #212121;
  --white: #121212;

  /* NAV MENU GLASSMORPHISM */
  --nav-boxshadow: 0px 5px 10px rgba(8, 8, 8, 0.25);
  --nav-glassbg: rgba(53, 53, 53, 0.35);
  --nav-glassborder: 1px solid rgba(56, 56, 56, 0.18);
  --nav-glassboxshadow: 0 8px 32px 0 rgba(12, 15, 49, 0.37);
  
  /* MODE TOGGLE */
  --toggle-bg: #1C1C1C;
  --toggle-color: #D1D1D1;

  /* CTA */ 
  --cta-mb-bg: #FFFFFF;
  --cta-mb-color: var(--primary-color);

  /* FEATURES */ 
  --feature-title-color: #EBEBEB;
  --feature-boxshadow: 0px 10px 15px 5px rgba(2, 2, 2, 0.53);

  /* CARD */
  --card-list-color: #D1D1D1;
  --card-boxshadow: 0px 5px 25px rgba(8, 8, 8, 0.25);
  --premiumcard-bg: #1E1E1E;
  --premiumcard-border: #6357EB;
  --premiumcard-label: #6357EB;
  --premiumcard-label-color: #FFFFFF;
  --premiumcard-color: #D1D1D1;

  /* MESSAGE BOX */
  --send-btn-bg: #1C1C1C;
  --submit-btn-bg: #1C1C1C;
  --submit-btn-color: #D1D1D1;
  --message-box-bg: #1C1C1C;
  --message-box-color: #ffffff;
  --message-box-btn-bg: #1C1C1C;
  --message-box-btn-bg-hover: #2b2b2b;
  --message-box-btn-color: #D1D1D1;
  --message-box-btn-color-hover: #ececec;
}

.page-container {
  background: var(--bg);
  transition: all 0.35s ease-in-out;
}
</style>