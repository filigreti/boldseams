<template>
  <main>
    <label class="relative w-auto main-label">
      <input
        :disabled="disabled"
        class="main-input"
        placeholder=" "
        @input="$emit('input', $event.target.value)"
        :value="value"
        :type="type"
      />
      <span class="text-xs leading-5 text-primaryBlue main-span">{{
        placeholder
      }}</span>
    </label>
  </main>
</template>

<script>

export default {
  props: ['placeholder', 'disabled', 'value', 'type'],
}
</script>

<style scoped>
.main-label {
  position: relative;
  width: 100%;
}
.main-span {
  pointer-events: none;
  position: absolute;
  left: 1rem;
  top: 0;
  transition: 0.2s;
  transition-timing-function: ease;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  opacity: 0.5;
  font-size: 0.85rem;
  font-family: "Lato";
  padding-top: 2px;
}

.main-input {
  border: 0.7px solid #c4c4c4;
  border-radius: 4px;
  padding: 0.8rem 0 0.8rem 1.2rem;
  font-family: "Lato";
  color: #333333;
}
.main-input:focus + span,
.main-input:not(:placeholder-shown) + span {
  opacity: 1;
  transform: scale(0.75) translateY(-100%) translateX(-30px);
  left: 1.6rem;
  top: -0.45rem;
  background: white;
  padding: 0 5px;
  font-size: 0.9rem;
  text-transform: uppercase;
}
.main-input:focus + .main-input:-webkit-autofill + span {
  opacity: 0;
}
.main-input:-webkit-autofill .main-input:placeholder-shown {
  opacity: 0 !important;
}
</style>