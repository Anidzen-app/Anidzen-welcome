export default defineAppConfig({
  ui: {
    colors: {
      primary: 'red',
      neutral: 'neutral'
    },
    toast: {
      slots: {
        root: 'relative group overflow-hidden bg-(--ui-bg) shadow-lg rounded-[calc(var(--ui-radius)*2)] ring ring-(--ui-border) p-4flex gap-2.5 focus:outline-none',
        wrapper: 'w-0 flex-1 flex flex-col',
        title: 'text-base font-medium text-(--ui-text-highlighted)',
        description: 'text-sm text-(--ui-text-muted)',
        icon: 'shrink-0 size-5',
        avatar: 'shrink-0',
        avatarSize: '2xl',
        actions: 'flex gap-1.5 shrink-0',
        progress: 'absolute inset-x-0 bottom-0 h-1 z-[-1]',
        close: 'p-0'
      },
      orientation: {
        horizontal: {
          root: 'items-center',
          actions: 'items-center'
        },
        vertical: {
          root: 'items-start',
          actions: 'items-start mt-2.5'
        }
      }
    }
  }
})
