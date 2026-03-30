<script setup lang="ts">
import { ref } from 'vue'

</script>

<template>
  <!-- Header -->
  <h1>Karthik.P Resume</h1>

  <div class="header_row">
      <!-- DP Image -->
      <img class="dp_image" src="/pk_10.jpg" alt="DP" />

      <!-- Paragraph -->
      <p class="header_bio">
        Specialist in, <br />
        - AUTOSAR and Bosch Motoronic CAN/ Eth Diagnostic stack <br />
        - Diagnostic protocols UDSonCAN, GMLAN (GMW3110), OBDonCAN (ISO 15031), <br />
        - OBDonUDS (SAE J1979-2), DoIP (ISO 13400) <br />
      </p>
  </div>
</template>

<style scoped>
.header_row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header_bio {
  flex: 1;        /* takes up remaining space on the left */
  margin-right: 1rem;
}

.dp_image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  flex-shrink: 0; /* prevents image from being squished */
}

</style>
