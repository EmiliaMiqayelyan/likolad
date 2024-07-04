<template>
  <div class="history">
    <div class="discover-sweets flex justify-content-center align-items-center flex-column pt-8">
      <div class="w-full sm:mt-6 mt-4">
        <div
            class="flex justify-content-between md:align-items-center align-items-start md:flex-row flex-column-reverse row-gap-3">
          <div>
            <div>
              <span class="text-2xl">Title</span>
            </div>

            <p class="history_text text-sm md:mt-6 mt-3">
              A victorious spirit. A chocolate revolution. The perfect combination. This is the story of how Likolad
              came to be.
            </p>
          </div>
          <div>
            <img class="history_images" src="@/assets/history-img1.svg" alt=""/>
          </div>
        </div>

        <hr class="discover-hr my-6"/>

        <div
            class="flex justify-content-between md:align-items-center align-items-end md:flex-row flex-column row-gap-3">
          <div>
            <img class="history_images" src="@/assets/history-img2.svg" alt=""/>
          </div>
          <div class="flex flex-column align-items-end">
            <p class="history_text text-sm md:mt-6 mt-3 text-right">
              It all started with the creating of Liko's unique chocolates in Armenia. The business grew constantly
              thanks to Liko's entrepreneurial spirit and passion for chocolate. Liko soon became a renowned among
              chocolate manufacturers.
            </p>
          </div>
        </div>

        <hr class="discover-hr my-6"/>

        <div
            class="flex justify-content-between md:align-items-center align-items-start md:flex-row flex-column-reverse row-gap-3">
          <div>
            <p class="history_text text-sm md:mt-6 mt-3">
              A combination of the highest ingredients, unparalleled care
              and mastery that is reflected in the making
              of each chocolate, resulting in a smooth and shiny product. That's what makes us stand out, unique and
              in the center of attention.
            </p>
          </div>
          <div>
            <img class="history_images" src="@/assets/history-img3.svg" alt=""/>
          </div>
        </div>

        <hr class="discover-hr my-6"/>

        <div
            class="flex justify-content-between md:align-items-center align-items-end md:flex-row flex-column row-gap-3">
          <div>
            <img class="history_images" src="@/assets/history-img4.svg" alt=""/>
          </div>
          <div class="flex flex-column align-items-end">
            <p class="history_text text-sm md:mt-6 mt-3 text-right">
              Likolad's first product, which was obtained as a result of
              many experiments, evaluating the taste, beauty and aesthetics. It is made from high quality Belgian
              chocolate raw materials, selected ingredients and most importantly with great care.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
.history {
  padding: 4rem 14%;
}

.history_text {
  width: 90%
}

@media only screen and (max-width: 1320px) {
  .history {
    padding: 3rem 6%;
  }
}

@media only screen and (max-width: 475px) {
  .history_images {
    width: 100%;
  }

  .history_text {
    width: 100%
  }
}
</style>