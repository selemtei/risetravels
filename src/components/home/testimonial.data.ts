import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Detailed attention to details',
    content: 'Everything went very smooth and perfect.',
    user: {
      id: 1,
      name: 'John Joseph',
      professional: 'Businessman',
      photo: 'male-avatar.png',
    },
  },
  {
    id: 2,
    title: 'Best Customer service!',
    content: 'They do care and provide the best customer experience you could possibly imagine.',
    user: {
      id: 1,
      name: 'William Daudi',
      professional: 'Director',
      photo: 'male-avatar.png',
    },
  }
]
