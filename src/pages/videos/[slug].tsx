import {
  sectionMainSliders1,
  sectionMainSliders2,
  sectionMainSliders3,
  sectionMainSliders4,
} from '@/StaticData/data'
import VideoDetail from '@/components/VideoDetail'

interface ParamsPathProps {
  slug: string // Здесь slug должен соответствовать тому, что вы используете в URL
}

interface oneMovie {
  id: number
  image: string
  slug: string
  title: string
  movieTime: string
  path: string
  category: string
  categorySlug: string
  created_at: string
}

interface ParapmsProps {
  currentObj: oneMovie
  otherVideo: oneMovie[]
}
const data = [
  ...sectionMainSliders1,
  ...sectionMainSliders2,
  ...sectionMainSliders3,
  ...sectionMainSliders4,
]

export async function getStaticPaths() {
  // Получаем список пользователей (например, из API)
  // const res = await fetch('https://api.example.com/users');
  // const users = await res.json();

  // Генерируем пути для каждого пользователя
  const paths = data.map((el) => ({
    params: { slug: el.slug },
  }))

  return { paths, fallback: false } // fallback: false означает, что 404 будет возвращен для несуществующих путей
}

export async function getStaticProps({ params }: { params: ParamsPathProps }) {
  // Получаем данные для конкретного пользователя
  // const res = await fetch(`https://api.example.com/users/${params.slug}`)
  // const user = await res.json()
  const currentObj = data.find((el) => el.slug === params.slug) || null
  const otherVideo =
    data.filter(
      (el) => el.slug !== params.slug && el.category === currentObj?.category
    ) || null

  return { props: { currentObj, otherVideo } } // Передаем данные в компонент
}

const SingleVideo = ({ currentObj, otherVideo }: ParapmsProps) => {
  return (
    <VideoDetail
      currentObj={currentObj}
      otherVideo={otherVideo}
    />
  )
}

export default SingleVideo
