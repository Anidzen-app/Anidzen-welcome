<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const toast = useToast()

const fields = [{
  name: 'email',
  type: 'text' as const,
  label: 'Электронная почта',
  size: 'xl',
  placeholder: 'Введите ваш email',
  required: true
}]

const schema = z.object({
  email: z.string().email('Некорректный email')
})

type Schema = z.output<typeof schema>

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Отправлено', payload)
  toast.success('Инструкция по сбросу пароля отправлена на вашу почту.')
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        title="Восстановление пароля"
        description="Введите ваш email для восстановления доступа к аккаунту."
        icon="i-lucide-lock"
        :fields="fields"
        :submit="{
          label: 'Отправить',
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
