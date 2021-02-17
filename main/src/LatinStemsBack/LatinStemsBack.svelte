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
    {@html '{{#Pic}}'}
    {@html '{{Pic}}'}
    {@html '{{/Pic}}'}
    <div class="extra">
      from <span class="origin">{@html '{{Origin language}}'}</span> via
      <span class="etymology">{@html '{{Etymology (root origin)}}'}</span>
    </div>

    <div class="examples">
      <span class="extra">e.g. </span>{@html '{{English examples}}'}
    </div>
  </div>
</div>

<style lang="scss">
  @use 'LatinStemsBack';
  .card {
    width: 100%;
    height: 100%;
  }
</style>
