<script setup lang="ts">
const state = reactive({
  code: ''
})
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        title="Подвердите действие"
        description=""
        icon="i-lucide-mail"
      >
        <template #description>
          <div class="mb-12 mt-1 text-base text-pretty text-(--ui-text-muted)">
            Введите код подтверждения, отправленный на вашу почту. ✉️
          </div>
          <UForm
            class="space-y-5"
            :state="state"
          >
            <UFormField
              name="code"
            >
              <UPinInput
                size="xl"
                otp
              />
            </UFormField>

            <UButton
              type="submit"
              block
              size="xl"
              to="/"
            >
              Отправить
            </UButton>
          </UForm>
        </template>
        <template #footer>
          <p class="text-sm mb-2">
            Не получили письмо? Проверьте папку <span class="font-medium">"Спам"</span> или
            <ULink
              to="#"
              class="text-(--ui-primary) font-medium"
            >отправьте код повторно</ULink>.
          </p>
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
