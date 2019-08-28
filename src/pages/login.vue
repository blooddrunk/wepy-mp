<template>
  <div
    class="login tw-flex tw-flex-col tw-items-center tw-h-screen tw-bg-cover"
    style="background-image: url(/static/images/bg.jpg);"
  >
    <div
      class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-mt-20 tw-w-40 tw-h-40 tw-rounded-full tw-bg-white"
    >
      <img class="tw-w-24 tw-h-24" src="/static/images/logo.png" />
    </div>

    <form class="tw-self-stretch tw-px-12 tw-mt-10">
      <div class="tw-flex tw-items-center tw-border tw-border-solid  tw-border-white tw-py-2">
        <input
          class="tw-appearance-none tw-bg-transparent tw-border-none tw-w-full tw-text-white tw-mr-3 tw-py-1 tw-px-2 tw-leading-normal"
          v-model="mobile"
          placeholder-class="tw-text-white"
          type="text"
          placeholder="手机号码"
          aria-label="手机号码"
          @input="handleMobileInput"
        />
      </div>

      <div
        class="tw-flex tw-items-center tw-border tw-border-solid  tw-border-white tw-py-2 tw-mt-2"
      >
        <input
          class="tw-appearance-none tw-bg-transparent tw-border-none tw-w-full tw-text-white tw-mr-3 tw-py-1 tw-px-2 tw-leading-normal"
          v-model="captcha"
          placeholder-class="tw-text-white"
          type="text"
          placeholder="验证码"
          aria-label="验证码"
        />
        <span
          :class="{ 'tw-underline': canSendMessage }"
          class="login__captcha tw-flex-shrink-0 tw-text-white tw-py-1 tw-px-2 tw-text-xs"
          @tap="getCaptcha"
        >
          {{ captchaText }}
        </span>
      </div>

      <div v-if="error" class="tw-mt-2 tw-text-xs tw-text-red-500">
        {{ error }}
      </div>

      <button
        class="tw-mt-12 tw-border tw-border-solid tw-border-blue-600  tw-text-blue-600 tw-p-2 tw-text-base tw-bg-transparent"
      >
        登 录
      </button>
    </form>
  </div>
</template>

<script>
import wepy from '@wepy/core';

function ProgressCountdown(timeleft, bar, text) {
  return new Promise((resolve, reject) => {
    var countdownTimer = setInterval(() => {
      timeleft--;

      document.getElementById(bar).value = timeleft;
      document.getElementById(text).textContent = timeleft;

      if (timeleft <= 0) {
        clearInterval(countdownTimer);
        resolve(true);
      }
    }, 1000);
  });
}

wepy.page({
  data: {
    mobile: '13323332333',
    captcha: '',
    error: '',

    captchaText: '获取验证码',
    canSendMessage: true,
  },

  computed: {},

  methods: {
    handleMobileInput() {
      this.error = '';
    },

    checkMobile() {
      if (!this.mobile) {
        this.error = '请输入手机号';
        return false;
      } else if (!/^1\d{10}$/.test(this.mobile)) {
        this.error = '手机号格式错误';
        return false;
      }

      return true;
    },

    async getCaptcha() {
      if (this.checkMobile()) {
        this.canSendMessage = false;

        await this.initiateCountDown(60);
        this.captchaText = '获取验证码';
        this.canSendMessage = true;
      }
    },

    async initiateCountDown(timeleft) {
      return new Promise((resolve, reject) => {
        const countdownTimer = setInterval(() => {
          timeleft--;

          this.captchaText = `${timeleft}s后再次获取`;

          if (timeleft <= 0) {
            clearInterval(countdownTimer);
            resolve(true);
          }
        }, 1000);
      });
    },
  },
});
</script>

<style lang="scss">
.login {
  &__captcha {
    &::after {
      border: none;
      border-bottom: 1px solid white;
    }
  }
}
</style>
