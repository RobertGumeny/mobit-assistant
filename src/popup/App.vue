<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand href="#">MOBIT Assistant</b-navbar-brand>
    </b-navbar>
    <div class="page">
      <b-tabs>
        <b-tab title="BookMobit">
          <BookMobit />
        </b-tab>
        <b-tab title="Trigger Events">
          <AchieveTriggerEvent />
        </b-tab>
        <b-tab title="Google Reviews">
          <GoogleReviews />
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import BookMobit from "@/components/BookMobit.vue";
import AchieveTriggerEvent from "@/components/AchieveTriggerEventGoal.vue";
import GoogleReviews from "@/components/GoogleReviews.vue";

export default {
  name: "App",
  components: { BookMobit, AchieveTriggerEvent, GoogleReviews },
};
</script>

<style>
html {
  min-width: 500px;
}
.page {
  padding: 20px;
}
</style>
