<script lang="ts">
</script>

<div class="card">
  <div class="body">
    <div class="frontActual">
      <span class="front">
        {@html '{{Front}}'}
      </span>
    </div>
    <div class="type">
      {@html '{{type::Back}}'}
    </div>
  </div>
</div>

<style lang="scss">
  @use 'BasicReversedTypeStyles';
  
  .card {
    width: 100%;
    height: 100%;
  }
</style>
