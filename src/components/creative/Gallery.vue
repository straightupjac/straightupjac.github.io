<template>
  <div>
    <v-container>
    <v-row no-gutters>
      <v-col md=10>
        <h2>Gallery</h2>
      </v-col>
      <v-spacer/>
      <v-btn
        tile @click=" $router.push('/creative')"
        elevation=0 class="mt-4 site-btn">
        Back
      </v-btn>
    </v-row>
    <div class="pa-gallery-player-widget" style="width:100%; height:480px; display:none;"
      data-link="https://photos.app.goo.gl/3iD3kUWTfqpefMD66"
      data-title="Bellas"
      data-description="12 new photos added to shared album">
      <object data="https://lh3.googleusercontent.com/Md1yYaFL_e0LBCA1iAxyUvmmLcxQa8CxQfylz9WVNiW_PrrlgL4UR-k7gAMj-7cq9kmLBx4SdEt9E0efX1GAnZWfJvL2i_SwPq8ZCBlKuzdZ7qoAGK77XqCDHMKcFFmH0aDZv8NXpm4=w640-h1080"></object>
      <object data="https://lh3.googleusercontent.com/4Wr8pEVA2iJSwsjVZvQI2pdNbBTFzVHpcrWb7zBRLvt0R2Vp4FOWePT9X_Sv5kM-vVULzlDF4l74zWdGI1b-ET_TD7RgBJWbrdKHmFi0pDual9P8WrtwN522ktO4DA-Yg7nRIGV_2Ns=w640-h1080"></object>
      <object data="https://lh3.googleusercontent.com/liYZ3WSieQb1VvJrfrPRZOW0aJeJfK6MM7ZVGN063Mio4JAnQo7gnzHtm4XEeQUzsAClzLHBxW1kxEfExSIphCFskDBMof50bJC7LS6B2VWQlVC_6dYNhwvcdt0oQ0UL_O8DHiJmjJM=w640-h1080"></object>
      <object data="https://lh3.googleusercontent.com/NZENDDIynJwyY4G97wrjwRd2FaxBvSxDP1KqZMbs3XQH3RV9nzMeH43ukaPw32sva30-mYWnuz5lXArpYAr1TuQAEMQiSDpTIn9O1rIz5gtj_E2KJUBmmMcQMpmRTSxTA-VAvzi5ypI=w640-h1080"></object>
      <object data="https://lh3.googleusercontent.com/jFEVZAJ8VTsCdoaha-T9gMsMCoeQRlhncr1FGXMhtlqUWEYiT3uOfuBIi_V_bsj6TJCeKlPl-JjMBtTT6PeUNtYfwBFKo5N_rbOWphnhKvVooWDN6Pa8UQcKFg5o-eXvQkvd6ZwFLRY=w640-h1080"></object>
      <object data="https://lh3.googleusercontent.com/p3Et0UW98_6-_VDqeBfsIc-0rJFJKsiqA9hw4lS-LSGpMqWgLdmzanl20NbK6xqcxSn425cKvhJXdepd2KB2Or-NdGlwdRFzqPKLGWMRLSqs326BfPM26b_bOJfJs5btoZZwC5SOW48=w640-h1080"></object>
      <object data="https://lh3.googleusercontent.com/jzpyL69hgf2jUwkjYi0NdLHmohpMmBmNRNx8qM3dhTykq0o38QdbrAj30iupfGeHOhDt9GF3i3QVI_xLfHtey-2L2UtqD0RWGETjFBZIVPbA4bil-nkJqpPlQmFZ1n1SoZZY5pbotmc=w640-h1080"></object>
      <object data="https://lh3.googleusercontent.com/V1dMFn5tAvwZDBXYeYqY0YcR5u400PNflRR0DGaoT8YIhHuNE3du6C8OshB38T3a-OJGst7y8u8xyCF_X9TZNDc31dEYcP3tCsZI8Xcp9os6uQVxdIGFXgkvl1--JJMP5I6NQl5Llgo=w640-h1080"></object>
      <object data="https://lh3.googleusercontent.com/UeD7rv5GzuHv2tMYfpnqzYp1OYfKiL7FjjYSW6lLG_l2q4PlVirCsmSQtAPRkgIzQwrGJ3Mb-n7zA7L4oVZodtOPMJAr8UYuQRLK9xTzWjNuV8oSpBoIUPLK2MtHfhgenceb1nq7wOI=w640-h1080"></object>
      <object data="https://lh3.googleusercontent.com/DMnz2u_Os2aWstiytIMetFk9CdjuiEKXAsGjpouxbTA1zU_h4eS4VrppR5po0J_EZTKFzF62rnbqe-5IrvQUnQyt3_OZLOLEkxDNYZf562nDH7n_lxHvZRtXWeCnZWP42wZnY4J8kMo=w640-h1080"></object>
      <object data="https://lh3.googleusercontent.com/dx5cv653V2BKRCuDXZR_d1F0ji4vwgsdylMux80X6YpXFzoEwilkTNXThoiuzbVyGj286wYY2p1qdXR1_ZbdRNfOEKHr6Dj_VG_OjE7KhsZ40LO7CH4PhpaGRzYoqWTE-zq9Gdr3cOE=w640-h1080"></object>
      <object data="https://lh3.googleusercontent.com/vdpIewobpCVKz1u2HFNIBq6Eh2lh6_AvzOALucDfvJyGyqmtIAKYBaG1_V_qZdsY757o7Z_PDQcdrGghyTCApu1epw8OsqopbvVvhHurpDYF8UwLwhmUSgGJ7jL7PBLxMDKM4I27_Gg=w640-h1080"></object>
    </div>
    </v-container>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js" async></script>

<script>
export default {
  name: "Gallery",
}
</script>

<style>

</style>