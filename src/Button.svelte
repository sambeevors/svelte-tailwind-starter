<script>
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<button
  on:click={handleClick}
  class="bg-red-600 text-white px-8 py-4 rounded-full leading-none antialiased">
  Clicked
  <strong>{count}</strong>
  {count === 1 ? 'time' : 'times'}
</button>
