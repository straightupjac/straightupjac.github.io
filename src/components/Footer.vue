<template>
  <v-footer
    class=footer-section
    padless
  >
    <v-card
      flat
      tile
      width=100%
      class="secondary"
    >
    <v-card-title class="ml-10 mr-10">
      Like what you see?
    </v-card-title>
      <v-card-text class="ml-10 mr-10 footer-body">
        Let's connect
        <v-btn
          v-for="icon in icons"
          :key="icon.link"
          :href="icon.link"
          target="_blank"
          class="mx-4"
          icon
        >
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
        <v-btn
          href="https://medium.com/@straightupjac"
          target="_blank"
          class="mx-4"
          icon
        >
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M4.37 7.3a.75.75 0 0 0-.25-.65L2.25 4.4v-.34h5.8l4.48 9.83l3.94-9.83H22v.34l-1.6 1.53c-.13.1-.2.28-.17.45v11.24c-.03.17.04.35.17.45l1.56 1.53v.34h-7.84v-.34l1.61-1.57c.16-.15.16-.2.16-.44V8.5L11.4 19.9h-.6L5.57 8.5v7.64c-.07.32.06.64.29.86l2.1 2.57v.33H2v-.33L4.1 17a.94.94 0 0 0 .27-.86V7.3z" fill="#626262"/></svg>
        </v-btn>
      </v-card-text>
      <v-card-text class="mr-10 ml-10">
        <p>{{ new Date().getFullYear() }} — <a href='http://jaclynchan.me/' target="_blank" style="color:#88b1b1;text-decoration: none;"> Jaclyn Chan</a></p>
      </v-card-text>
    </v-card>
  </v-footer>
</template>


<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
      {icon: "mdi-linkedin", link: "https://www.linkedin.com/in/jaclyndchan/",},
      {icon: "mdi-instagram", link: "https://www.instagram.com/straightupraspberry", },
      {icon: "mdi-twitter", link: "https://twitter.com/straightupjac"},
      {icon: "mdi-github", link: "https://github.com/straightupjac"},
      {icon: "mdi-email", link: "mailto:jdc.jaclyn@gmail.com"},
    ],
  }),
};
</script>
