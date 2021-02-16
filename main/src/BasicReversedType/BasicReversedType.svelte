<script lang="ts">
</script>

<div class="card">
  <div class="front">
    {@html '{{Front}}'}
  </div>

  <div class="type">
    {@html '{{type::Back}}'}
  </div>
</div>

<style lang="scss">
  @use 'BasicReversedTypeStyles';
  .card {
    width: 100%;
    height: 100%;
  }
</style>