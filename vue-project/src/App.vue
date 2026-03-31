//---------------------------------------------------------------------------------------------------
//-----------------------------------Script--------------------------------------------------------
//---------------------------------------------------------------------------------------------------
<script setup lang="ts">
import { ref, computed } from 'vue'

const images = [
    {
        src: 'https://petapixel.com/assets/uploads/2022/12/what-is-unsplash-800x420.jpg',
        alt: 'Image_1',
    },
    {
        src: 'https://petapixel.com/assets/uploads/2022/12/image13-1-800x536.jpg',
        alt: 'Image_2',
    },
    {
        src: 'https://petapixel.com/assets/uploads/2022/12/image11-1-800x534.jpg',
        alt: 'Image_3',
    },
];


const currentSliderIndex = ref(0);
const showModal = ref(false);
const currentImage = computed(() => images[currentSliderIndex.value]);

function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}

const nextSlide = () => {
    currentSliderIndex.value = (currentSliderIndex.value + 1) % images.length;
};

const prevSlide = () => {
    currentSliderIndex.value = (currentSliderIndex.value - 1 + images.length) % images.length;
};

</script>

//---------------------------------------------------------------------------------------------------
//-----------------------------------Template--------------------------------------------------------
//---------------------------------------------------------------------------------------------------
<template>
  <!-- Banner -->
  <div class="banner">
    <img class="banner-image" src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop" alt="Banner" />
    <!-- DP Image overlaid on banner -->
    <picture>
      <source srcset="/pk_10.webp" type="image/webp" />
      <img class="dp_image" src="/pk_10_sm.jpg" alt="DP"
           width="150" height="150"
           fetchpriority="high" decoding="async" />
    </picture>
  </div>

  <!-- Header -->
  <h1>Karthik.P Resume</h1>

  <!-- LinkedIn link -->
  <div class="linkedin_row">
    <a class="linkedin_link" href="https://www.linkedin.com/in/pkarthikbit/" target="_blank" rel="noopener">
      <svg class="linkedin_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
      linkedin.com/in/pkarthikbit
    </a>
  </div>

  <div class="header_row">
      <!-- Paragraph -->
      <p class="header_bio">
        Specialist in, <br />
        - AUTOSAR and Bosch Motoronic CAN/ Eth Diagnostic stack <br />
        - Diagnostic protocols UDSonCAN, GMLAN (GMW3110), OBDonCAN (ISO 15031), <br />
        - OBDonUDS (SAE J1979-2), DoIP (ISO 13400) <br />
      </p>
  </div>

  <h2>Work Experience</h2>
  <h3>Bosch Global Software Technologies, Coimbatore, IN<br />
      2012 - present</h3>

  <!-- Experience table -->
  <table class="resume_table">
    <thead>
      <tr>
          <th>Role</th>
          <th>Duration</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Technical Specialist</td>
          <td>Sep 2025 – Present<br />(7 mos)</td>
          <td>Implementation of Diagnostic stack (CAN &amp; Eth) in High Performance Computer as part of SDV.</td>
        </tr>
        <tr>
          <td>Technical Lead</td>
          <td>Dec 2023 – Aug 2025<br />(1 yr 9 mos)</td>
          <td>
            For Maybach projects:<br />
            - Functional System Co-ordinator for OBDonUDS (SAE J1979-2) modules.<br />
            - Requirement clarification, test planning, top level requirement analysis, design preparation.<br />
            - System testing &amp; joint acceptance testing with Maybach.<br />
            - Expertise in Maybach specific OBDonUDS implementation in Bosch Proprietary Software Architecture.<br />
            -  Also responsible for the cost estimations and Failure Mode & Effects Analysis (FMEA).
          </td>
        </tr>
        <tr>
          <td>Technical Lead</td>
          <td>Oct 2023 – Dec 2023<br />(3 mos)</td>
          <td>BMW projects: Development of own CAN stack on ECU side and a Python based tool on Tester side as a replacement of BOSCH internal tool.</td>
        </tr>
        <tr>
          <td>Technical Lead</td>
          <td>Feb 2023 – Sep 2023<br />(8 mos)</td>
          <td>
            For Software Defined Vehicle:<br />
            - Implemented CAN stack and IPC for TI's SoC TDA4VM.<br />
            - Implemented QNX Hypervisor for Linux Based CAN Datalogger &amp; QNX based Gateway Functionality.
          </td>
        </tr>
        <tr>
          <td>Senior Software Engineer</td>
          <td>Mar 2016 – Jan 2023<br />(6 yrs 11 mos)</td>
          <td>
            For General Motors projects:<br />
              - Project system designer for GM (General Motors) Global B ECM (Engine Control Module) projects <br />
              -Expertise in implementation of <br />
              GM specific requirements in UDSonCAN (Unified Diagnostic Services on Controller Area Network) and <br />
              GMLAN (General Motors Local Area Network) in AUTOSAR architecture
          </td>
        </tr>
        <tr>
          <td>Software Developer</td>
          <td>Jul 2012 – Feb 2016<br />(3 yrs 8 mos)</td>
          <td>
            For Jaguar Land Rover projects:<br />
            - Developer of off-board diagnostic requirements in Bosch's in-house software architecture.<br />
            - Developer of automated code generator based on Perl platform.<br />
            - Python based test automation for all diagnostic services.
          </td> 
        </tr>
      </tbody>
  </table>

  <h2>Onsite support</h2>
  <h3>Bosch Engineering GmbH, Abstatt, DE</h3>

  <p>
    On-site travels to Germany to support the running, <br />
    <br />
    Jaguar Land Rover projects <br />
    - 2015 (May to October) <br />
    <br />
    General Motors projects <br />
    - 2016 (October) <br />
    - 2017 (September to December) <br />
    - 2018 (June to July) <br />
    - 2019 (January to February) <br />
    - 2019 (June to December) <br />
    - 2022 (October) <br />
    <br />
    Maybach projects <br />
    - 2024 (October to November) <br />
  </p>

  <h2>Image Carousel</h2>
  <!-- Image Carousel -->
  <div class="carousel">
    <div class="carousel-images">
      <img
        class="carousel-image-list"
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        :alt="image.alt"
        v-show="index === currentSliderIndex"
        @click="openModal"
        style="cursor: pointer;"
      />
      <div class="carousel-controls">
        <button class="carousel-arrow" @click="prevSlide">&#8592;</button>
        <button class="carousel-arrow" @click="nextSlide">&#8594;</button>
      </div>
    </div>
    <!-- Modal for enlarged image -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <img
          :src="currentImage?.src"
          :alt="currentImage?.alt"
          class="modal-image"
        />
        <button class="modal-close" @click="closeModal">&times;</button>
      </div>
    </div>
  </div>

</template>

//---------------------------------------------------------------------------------------------------
//-----------------------------------Style--------------------------------------------------------
//---------------------------------------------------------------------------------------------------
<style scoped>

/* To have all the font in MAC format */
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* Banner */
.banner {
  width: 100%;
  position: relative;
  margin-bottom: 90px;
}

.banner-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

/* Header styles */
h1 {
  text-align: center;
  margin-bottom: 0.5rem;
}

.linkedin_row {
  text-align: center;
  margin-bottom: 1.5rem;
}

.linkedin_link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #0A66C2;
  text-decoration: none;
  font-size: 14px;
}

.linkedin_link:hover {
  text-decoration: underline;
}

.linkedin_logo {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

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
  position: absolute;
  bottom: -75px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #fff;
  object-fit: cover;
}

/* Table styles */
.resume_table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
}

.resume_table th,
.resume_table td {
  border: 1px solid #d1d1d1;
  padding: 8px 12px;
  text-align: left;
}

.resume_table th {
  background-color: #f0f0f0;
  font-weight: 600;
}

.resume_table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.carousel-images {
  position: relative;
  display: inline-block;
}

.carousel-image-list {
  width: 7.5cm;
  height: 5cm;
  object-fit: cover;
  display: block;
}

.carousel-controls {
  display: flex;
  justify-content: space-between;
  width: 7.5cm;
  margin-top: 6px;
}

.carousel-arrow {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #444;
  padding: 0 4px;
  line-height: 1;
}

.carousel-arrow:hover {
  color: #000;
}

/* Modal styles for enlarged image */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-content {
  position: relative;
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.3);
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal-image {
  max-width: 80vw;
  max-height: 70vh;
  border-radius: 8px;
  object-fit: contain;
}
.modal-close {
  position: absolute;
  top: 8px;
  right: 12px;
  background: none;
  border: none;
  font-size: 2rem;
  color: #333;
  cursor: pointer;
}

</style>
