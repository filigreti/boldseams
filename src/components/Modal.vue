<template>
  <main>
    <div style="z-index: 300" :class="top" class="modal bg">
      <div class="size">
        <div class="modal-top">
          <div class="modal-title">
            <slot name="header"></slot>
          </div>

          <svg
            width="12"
            height="12"
            class="close"
            @click="close"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1.20857L10.7914 0L6 4.79143L1.20857 0L0 1.20857L4.79143 6L0 10.7914L1.20857 12L6 7.20857L10.7914 12L12 10.7914L7.20857 6L12 1.20857Z"
              fill="white"
            />
          </svg>
        </div>

        <main class="mode-body">
          <slot />
        </main>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    top: {
      default: 'pt-24'
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  mounted() {
    document.body.style.setProperty("overflow", "hidden");
  },
  destroyed() {
    document.body.style.removeProperty("overflow");
  },
};
</script>

<style>
.light {
  box-shadow: 0px 0px 20px rgba(22, 120, 176, 0.12);
}
.bg {
  background: rgba(0, 0, 0, 0.6);
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
}
.size {
  width: 40rem;
  margin: auto;
  background: white;
  margin-top: 2rem;
  border-radius: 5px 5px 0px 0px;
  box-sizing: border-box;
  overflow: hidden;
}
.modal-top {
  height: 2.5rem;
  background: linear-gradient(180deg, #0ca2d9 9.38%, #0082c8 100%);
  box-shadow: 0px 2px 2px rgba(50, 50, 71, 0.06),
    0px 2px 4px rgba(50, 50, 71, 0.06);
  border-radius: 5px 5px 0px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  color: white;
}
.modal-title {
  font-size: 0.85rem;
}
.mode-body {
  display: flex;
  padding: 0 1rem;
  width: 100%;
}
.close {
  cursor: pointer;
}
</style>