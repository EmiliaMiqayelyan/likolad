<template>
  <div class="landing">
    <div class="flex justify-content-between">
      <div class="content relative flex flex-column">
        <div class="flex flex-column row-gap-5">
          <div class="flex gap-3">
            <span class="text-5xl font-medium">Welcome to the</span>
            <span class="about-text text-5xl font-medium">World of Likolad</span>
          </div>
          <p class="text-base font-normal" style="width: 48rem">
            Experience Likolad: the ultimate chocolate delight brought to you by our passionate Master Chocolatier.
            Since 2021, our exquisite creations have provided moments of bliss for you to savour.
          </p>

          <NuxtLink to="/account">
            <button class="space-btn w-15rem border-none border-round-md h-3rem font-bold text-base cursor-pointer">
              My space
            </button>
          </NuxtLink>
          <p class="mt-6 font-medium">
            The finer details make all the difference in chocolate making. The same
            is true in life։ small gestures of kindness make a big difference.
          </p>
        </div>

        <NuxtLink to="/my-chocolates">
          <button
              class="chocolate-btn border-1 border-round-lg w-18rem font-medium mt-5 text-base absolute cursor-pointer">
            Create my chocolate
          </button>
        </NuxtLink>
      </div>

      <LazySlidersSlider class="w-full"/>
    </div>

    <div class="discover">
      <div class="discover-sweets flex justify-content-center align-items-center flex-column">
        <div>
          <span class="about-text text-4xl font-medium">We </span>
          <span class="text-4xl font-medium">are</span>
        </div>

        <div class="w-full mt-6">
          <div class="flex justify-content-between">
            <div>
              <div>
                <span class="text-2xl">The advantage of </span>
                <span class="about-text text-2xl">Likolad</span>
              </div>

              <p class="text-sm mt-6" style="width: 40rem">
                A combination of the highest ingredients, unparalleled care
                and mastery that is reflected in the making
                of each chocolate, resulting in a smooth and shiny product. That's what makes us stand out, unique and
                in the center of attention.
              </p>
            </div>
            <div>
              <img src="@/assets/discover-img1.svg" alt=""/>
            </div>
          </div>

          <hr class="discover-hr my-6"/>

          <div class="flex justify-content-between">
            <div>
              <img src="@/assets/discover-img2.svg" alt=""/>
            </div>
            <div class="flex flex-column align-items-end">
              <div>
                <span class="about-text text-2xl">Royalads </span>
                <span class="text-2xl">chocolatier product</span>
              </div>

              <p class="text-sm mt-6 text-right" style="width: 40rem">
                Likolad's first product, which was obtained as a result of
                many experiments, evaluating the taste, beauty and aesthetics. It is made from high quality Belgian
                chocolate raw materials, selected ingredients and most importantly with great care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="about-us py-8 flex justify-content-center flex-column align-items-center">
      <div class="flex gap-3">
        <span class="text-5xl font-medium">What</span>
        <span class="about-text text-5xl font-medium">we do</span>
      </div>
      <div class="mt-6 flex justify-content-between w-full">
        <div class="flex flex-column row-gap-4 align-items-center about-section border-1 border-round-lg p-5">
          <h2 class="font-bold">Title</h2>
          <img src="@/assets/about3.svg" alt=""/>
          <p class="w-14rem text-center line-height-3">Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.</p>
        </div>

        <div class="flex flex-column row-gap-4 align-items-center about-section border-1 border-round-lg p-5">
          <h2 class="font-bold">Title</h2>
          <img src="@/assets/about2.svg" alt=""/>
          <p class="w-14rem text-center line-height-3">Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.</p>
        </div>

        <div class="flex flex-column row-gap-4 align-items-center about-section border-1 border-round-lg p-5">
          <h2 class="font-bold">Title</h2>
          <img src="@/assets/about1.svg" alt=""/>
          <p class="w-14rem text-center line-height-3">Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.</p>
        </div>
      </div>
    </div>

    <LazySlidersTestimonialSlider/>

    <div class="collections py-8 flex justify-content-center flex-column align-items-center">
      <div class="flex gap-3">
        <span class="about-text text-5xl font-medium">Our Chocolate</span>
        <span class="text-5xl font-medium">collections</span>
      </div>

      <div class="flex justify-content-between w-full mt-6">
        <img src="@/assets/collections1.svg" alt=""/>
        <img src="@/assets/collections2.svg" alt=""/>
        <img src="@/assets/collections3.svg" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
.landing {
  line-height: 24px;
}

.discover {
  padding: 4% 14%;
}

.content {
  padding-left: 14%;
  padding-top: 12%;
}

.space-btn {
  background-color: var(--orange);
  color: var(--brown);
}

.chocolate-btn {
  border-color: var(--dark-orange);
  background: none;
  color: var(--dark-orange);
  height: 40px;
  bottom: 0;
}

.about-text {
  color: var(--dark-orange);
}

.about-us, .testimonials, .collections {
  padding-left: 14%;
  padding-right: 14%;
}

.about-section, .discover-hr {
  border-color: #EEC574;
}
</style>