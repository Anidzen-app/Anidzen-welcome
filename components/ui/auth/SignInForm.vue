<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const toast = useToast()

const fields = [{
  name: 'email',
  type: 'text' as const,
  label: 'Электронная почта',
  size: 'xl',
  placeholder: 'Введите вашу почту',
  required: true
}, {
  name: 'password',
  label: 'Пароль',
  size: 'xl',
  type: 'password' as const,
  placeholder: 'Введите ваш пароль'
}, {
  name: 'remember',
  size: 'xl',
  label: 'Запомнить меня',
  type: 'checkbox' as const
}]

const providers = [{
  label: 'Google',
  icon: 'i-simple-icons-google',
  size: 'xl',
  onClick: () => {
    toast.add({ title: 'Google', description: 'Вход через Google' })
  }
}]

const schema = z.object({
  email: z.string().email('Некорректный email'),
  password: z.string().min(8, 'Пароль должен содержать минимум 8 символов')
})

type Schema = z.output<typeof schema>

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Отправлено', payload)
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        title="Вход"
        description="Введите свои учетные данные для доступа к аккаунту."
        icon="i-lucide-user"
        :fields="fields"
        separator="или"
        :providers="providers"
        :submit="{
          label: 'Отправить',
          size: 'xl'
        }"
        @submit="onSubmit"
      >
        <template #password-hint>
          <NuxtLink
            to="/"
            class="text-(--ui-primary) font-medium"
          >Забыли пароль?</NuxtLink>
        </template>

        <template #footer>
			<p class="text-sm mb-2">
				Нет аккаунта?
				<ULink to="/auth/sign-up" class="text-(--ui-primary) font-medium">Создайте</ULink>.
			</p>
          Входя в систему, вы соглашаетесь с нашими <ULink
            to="#"
            class="text-(--ui-primary) font-medium"
          >Условиями использования</ULink>.
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
