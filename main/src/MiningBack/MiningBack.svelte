<script lang="ts">
</script>

{@html '{{FrontSide}}'}

<hr id="answer" />

{@html '{{Reading}}'}
<br />
<div style="font-size: 25px;">{@html '{{Glossary}}'}</div>
<div class="main_image">{@html '{{Picture}}'}</div>
<br />
<div style="font-size: 25px;">{@html '{{Sentence}}'}</div>

<p />
<div style="font-size: 20px;">{@html '{{Graph}}'}</div>

<p>______</p>
{@html '{{Audio}}'}
{@html '{{SentenceAudio}}'}

<style lang="scss">
  @use 'MiningBack';
  .card {
    width: 100%;
    height: 100%;
  }
</style>
