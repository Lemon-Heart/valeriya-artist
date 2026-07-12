import { ref, computed } from 'vue'
import { useLoading } from '@/composables/useLoading'

export default function ReviewController () {
  const { loading, loadingOn, loadingOff } = useLoading()

  const reviews = ref([])
  const errMess = ref('')
  const successMess = ref('')

  const authToken = ref(localStorage.getItem('auth_token') || '')
  const isAuth = computed(() => authToken.value)

  const setError = (error) => {
    errMess.value = error
    setTimeout(() => (errMess.value = ''), 3000)
  }

  const setSuccess = (message) => {
    successMess.value = message
    setTimeout(() => (successMess.value = ''), 3000)
  }

  const getReviews = async () => {
    loadingOn()
    try {
      const response = await fetch('https://valeriya-artist.art/api/reviews', {
        method: 'GET'
      })

      if (response.ok) {
        const res = await response.json()
        reviews.value = res
      } else {
        setError('Не удалось загрузить отзывы')
      }
    } catch (error) {
      setError('Ошибка при загрузке отзывов')
    } finally {
      loadingOff()
    }
  }

  const addReview = async (formData) => {
    const reviewText = formData.get('review_text')
    if (!reviewText || !reviewText.trim()) {
      setError('Введите текст отзыва')
      return false
    }

    if (!isAuth.value) {
      setError('Необходимо авторизоваться')
      return false
    }

    loadingOn()
    try {
      const response = await fetch('https://valeriya-artist.art/api/reviews', {
        method: 'POST',
        headers: {
          Authorization: authToken.value
        },
        body: formData
      })

      const res = await response.json()

      if (response.ok) {
        setSuccess(res.mess || 'Отзыв отправлен на модерацию')
        return true
      } else {
        setError(res.err || 'Ошибка при отправке отзыва')
        return false
      }
    } catch (error) {
      setError('Ошибка при отправке отзыва')
      return false
    } finally {
      loadingOff()
    }
  }

  return {
    loading,
    reviews,
    errMess,
    successMess,
    isAuth,
    getReviews,
    addReview
  }
}
