<template>
  <div>
    <b-container>
      <b-row>
        <h4 class="mt-3">Google Reviews</h4>
      </b-row>
      <b-row>
        <div style="display: none">
          <input
            id="pac-input"
            class="controls"
            type="text"
            placeholder="Enter a location"
          />
        </div>
        <div id="map"></div>
        <div id="infowindow-content">
          <span id="place-name" class="title"></span><br />
          <strong>Place ID:</strong> <span id="place-id"></span><br />
          <span id="place-address"></span><br />
          <input
            type="button"
            id="url-gen"
            onclick="genURL()"
            value="Generate Google Review URL"
          />
          <label id="url-gen-label" for="url-gen">Generate</label>
        </div>
        <input type="text" value="" id="copyTextArea" style="display: hidden" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "GoogleReviews",
  mounted() {},
  methods() {},
  computed: {},
};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
