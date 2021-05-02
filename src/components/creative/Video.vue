<template>
  <v-card elevation=0 class=video>
    <youtube player-width="450" player-height="320" :video-id="videoID"></youtube>
    <v-card-title>
      {{title}}
    </v-card-title>
    <v-card-subtitle>
      {{date}}
    </v-card-subtitle>
    <v-card-text>
      {{description}}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Video",
  props: {
    videoID: {
      type: String,
      required:true,
    },
    title: {
      type: String,
      required:true,
    },
    date: {
      type: String,
      required:true,
    },
    description: {
      type: String,
      required:true,
    },
  }
}
</script>

<style scoped>
.video {
  width: 450px;
}
</style>
