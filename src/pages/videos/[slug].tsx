import {
  sectionMainSliders1,
  sectionMainSliders2,
  sectionMainSliders3,
  sectionMainSliders4,
} from '@/StaticData/data'
import VideoDetail from '@/components/detail'

interface ParamsPathProps {
  slug: string // Здесь slug должен соответствовать тому, что вы используете в URL
}

interface ParapmsProps {
  currentObj: {
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

  return { props: { currentObj } } // Передаем данные в компонент
}

const SingleVideo = ({ currentObj }: ParapmsProps) => {
  return <VideoDetail currentObj={currentObj} />
}

export default SingleVideo
