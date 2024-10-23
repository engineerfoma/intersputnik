import StreamDetail from '@/components/StreamDetail'
import { type Videos } from '@/types/streams'
import { videos } from '@/service/api.service'

interface ParamsPathProps {
  id: string // Здесь slug должен соответствовать тому, что вы используете в URL
}

interface ParapmsProps {
  currentObj: Videos
  otherStreams: Videos[]
}

export async function getStaticPaths() {
  const { data } = await videos.get()
  if (data.error) {
    return {
      notFound: true,
    }
  }

  // Генерируем пути для каждого пользователя
  const paths = data.data.map((el: Videos) => ({
    params: { id: el.id },
  }))

  return { paths, fallback: false } // fallback: false означает, что 404 будет возвращен для несуществующих путей
}

export async function getStaticProps({ params }: { params: ParamsPathProps }) {
  const { data } = await videos.get()
  if (data.error) {
    return {
      notFound: true,
    }
  }
  const currentObj = data.data.find((el: Videos) => el.id === params.id) || null
  const otherStreams =
    data.data.filter((el: Videos) => el.id !== params.id) || null

  return { props: { currentObj, otherStreams } } // Передаем данные в компонент
}

const SingleStream = ({ currentObj, otherStreams }: ParapmsProps) => {
  return (
    <>
      <StreamDetail
        currentObj={currentObj}
        otherStreams={otherStreams}
      />
    </>
  )
}

export default SingleStream
