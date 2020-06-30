<template>
  <div>
    <h5>create component</h5>
    <table class="center">
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>80</td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/table.scss';
</style>

<script>
export default {
  layout: 'session',
}
</script>
