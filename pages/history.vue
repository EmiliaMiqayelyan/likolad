<template>
  <div class="history">
    <div class="discover-sweets flex justify-content-center align-items-center flex-column pt-8">
      <div class="w-full sm:mt-6 mt-4">
        <div
            class="flex justify-content-between md:align-items-center align-items-start md:flex-row flex-column-reverse row-gap-3">
          <div>
            <div>
              <span class="text-2xl">{{ $t('history.historyTitle') }}</span>
            </div>

            <p class="history_text text-sm md:mt-6 mt-3">
              {{ $t('history.historyText1') }}
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
              {{ $t('history.historyText2') }}
            </p>
          </div>
        </div>

        <hr class="discover-hr my-6"/>

        <div
            class="flex justify-content-between md:align-items-center align-items-start md:flex-row flex-column-reverse row-gap-3">
          <div>
            <p class="history_text text-sm md:mt-6 mt-3">
              {{ $t('history.historyText3') }}
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
              {{ $t('history.historyText4') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
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