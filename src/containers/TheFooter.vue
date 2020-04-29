<template>
  <CFooter :fixed="false" v-if="show_footer">
    <div>
      <a href="#" target="_blank">Sergeli</a>
      <span class="ml-1">&copy; {{ new Date().getFullYear() }}</span>
    </div>
    <div class="ml-auto">
      <span class="mr-1">Powered by</span>
      <a href="#" target="_blank">OSG</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  props: {
    show_footer: {
      type: Boolean,
      default: false
    }
  },
  name: "TheFooter"
};
</script>
