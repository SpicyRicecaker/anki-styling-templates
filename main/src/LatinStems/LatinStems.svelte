<script lang="ts">
</script>

<div class="card">
  <div class="body">
    <div class="rootActual">
      <span class="root">
        {@html '{{Root}}'}
      </span>
    </div>
    <div class="type">
      {@html '{{type::Meaning in English}}'}
    </div>
  </div>
</div>

<style lang="scss">
  @use 'LatinStems';
  .card {
    width: 100%;
    height: 100%;
  }
</style>
