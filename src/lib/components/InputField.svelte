<script>
  import { fade } from "svelte/transition";

  export let label = "";
  export let value = "";
  export let placeholder = "";
  export let onchange = (e) => {};
  export let errorMsg = "";
  export let imageSrc = "";
  export let imageAlt = "";

  let isFocused = false;
  let isError = false;
</script>

<div class="flex flex-col relative">
  {#if isFocused || value}
    <p
      transition:fade={{ duration: 200 }}
      class="text-sm mb-1 {value && !isFocused
        ? 'text-[#5E6366]'
        : 'text-[#5570F1]'} {isError ? 'text-[#F57E77]' : ''}"
    >
      {label}
    </p>
  {/if}

  <div class="relative">
    <input
      type="text"
      bind:value
      placeholder={isFocused || value ? "" : placeholder || label}
      class="w-full p-2 pl-[2.5rem] text-[#5E6366] border border-gray-300 rounded-lg outline-none focus:border-[#5570F1]"
      on:focus={() => (isFocused = true)}
      on:blur={() => (isFocused = false)}
      on:input={(e) => onchange(e)}
    />
    <div
      class="flex items-center justify-center h-full absolute top-0 left-0 px-2 rounded-l-lg"
    >
      {#if imageSrc}
        <img src={imageSrc} alt={imageAlt} class="w-6 h-6 object-contain" />
     
      {/if}
    </div>
  </div>
  {#if errorMsg}
    <p transition:fade={{ duration: 200 }} class="text-xs text-[#F57E77]">
      {errorMsg}
    </p>
  {/if}
</div>
