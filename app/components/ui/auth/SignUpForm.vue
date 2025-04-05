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
  name: 'name',
  type: 'text' as const,
  label: 'Никнейм',
  size: 'xl',
  placeholder: 'Введите ваш никнейм',
  required: true
}, {
  name: 'password',
  label: 'Пароль',
  size: 'xl',
  type: 'password' as const,
  placeholder: 'Введите ваш пароль',
  required: true
}, {
  name: 'password_confirmation',
  label: 'Повторите пароль',
  size: 'xl',
  type: 'password' as const,
  placeholder: 'Повторите ваш пароль',
  required: true
}]

const providers = [{
  label: 'Google',
  icon: 'i-simple-icons-google',
  size: 'xl',
  onClick: () => {
    toast.add({ title: 'Google', description: 'Регистрация через Google' })
  }
}]

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
  navigateTo('/otp/verify')
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        title="Регистрация"
        description="Создайте аккаунт и погрузитесь в мир аниме! 🚀"
        icon="i-lucide-user-plus"
        separator="или"
        :fields="fields"
        :providers="providers"
        :submit="{
          label: 'Зарегистрироваться',
          size: 'xl'
        }"
        @submit="onSubmit"
      >
        <template #footer>
          <p class="text-sm mb-2">
            Уже есть аккаунт?
            <ULink
              to="/auth/sign-in"
              class="text-(--ui-primary) font-medium"
            >Войдите</ULink>.
          </p>
          Регистрируясь, вы соглашаетесь с нашими
          <ULink
            to="/docs/terms-of-use"
            class="text-(--ui-primary) font-medium"
          >Условиями использования</ULink>
          и <ULink
            to="/docs/privacy-policy"
            class="text-(--ui-primary) font-medium"
          >Политикой конфиденциальности</ULink>. и <ULink
            to="/docs/for-copyright-holders"
            class="text-(--ui-primary) font-medium"
          >Для правообладателей</ULink>.
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
