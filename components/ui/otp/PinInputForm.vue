<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  email: z.string().email('Некорректный email'),
  name: z.string().min(3, 'Никнейм должен содержать минимум 3 символа'),
  password: z.string().min(8, 'Пароль должен содержать минимум 8 символов'),
  password_confirmation: z.string()
}).refine(data => data.password === data.password_confirmation, {
  message: 'Пароли не совпадают',
  path: ['password_confirmation']
})

type Schema = z.output<typeof schema>

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Регистрация отправлена', payload)
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        title="Подвердите действие"
        description=""
        icon="i-lucide-mail"
      >
        <template #description>
          <div class="mb-12 mt-1 text-base text-pretty text-(--ui-text-muted)">
            Введите код подтверждения, отправленный на вашу почту. ✉️
          </div>
          <UForm>
            <UPinInput
              size="xl"
              otp
            />
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
