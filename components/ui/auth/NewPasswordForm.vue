<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const toast = useToast()

const fields = [
  {
    name: 'password',
    label: 'Новый Пароль',
    size: 'xl',
    type: 'password' as const,
    placeholder: 'Введите ваш новый пароль',
    required: true
  },
  {
    name: 'password_confirmation',
    label: 'Повторите Пароль',
    size: 'xl',
    type: 'password' as const,
    placeholder: 'Повторите ваш новый пароль',
    required: true
  }
]

const schema = z.object({
  password: z.string().min(8, 'Пароль должен содержать минимум 8 символов'),
  password_confirmation: z.string().min(8, 'Пароль должен содержать минимум 8 символов')
}).refine(data => data.password === data.password_confirmation, {
  message: 'Пароли не совпадают',
  path: ['password_confirmation']
})

type Schema = z.output<typeof schema>

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Отправлено', payload)
  toast.success('Пароль успешно обновлён.')
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        title="Создание нового пароля"
        description="Введите новый пароль для восстановления доступа к аккаунту."
        icon="i-lucide-lock"
        :fields="fields"
        :submit="{
          label: 'Сохранить новый пароль',
          size: 'xl'
        }"
        @submit="onSubmit"
      >
        <template #footer>
          <p class="text-sm mb-2">
            Вспомнили пароль?
            <ULink
              to="/auth/sign-in"
              class="text-(--ui-primary) font-medium"
            >Войдите</ULink>.
          </p>
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
