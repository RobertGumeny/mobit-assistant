<template>
  <div>
    <b-container>
      <b-row>
        <h4 class="mt-3">Achieve Trigger Event</h4>
      </b-row>
      <b-form-row>
        <b-form @submit.prevent="onSubmit">
          <b-form-group label="Campaign ID" label-for="campaignId">
            <b-form-input
              v-model="form.campaignId"
              type="text"
              required
              placeholder="122844"
              name="campaignId"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group label="Goal Name" label-for="goalId">
            <b-form-input
              v-model="form.goalId"
              type="text"
              required
              placeholder="210796"
              name="goalId"
            >
            </b-form-input>
          </b-form-group>
          <b-button block type="submit" variant="success" class="mt-4"
            >Achieve Trigger Event</b-button
          >
        </b-form>
      </b-form-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "AchieveTriggerEvent",
  data() {
    return {
      form: {},
    };
  },
  mounted() {},
  computed: {},
};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
