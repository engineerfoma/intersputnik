//custom hook
import { useBreadcrumb } from '@/utilities/usePage'

//components
import ViewAll from '@/components/ViewAll'

//statics
import {
  sectionMainSliders1,
  sectionMainSliders2,
  sectionMainSliders3,
  sectionMainSliders4,
} from '@/StaticData/data'

interface ParamsPathProps {
  categorySlug: string // Здесь slug должен соответствовать тому, что вы используете в URL
}

interface CurrentObject {
  id: number
  image: string
  slug: string
  title: string
  movieTime: string
  path: string
  category: string
  created_at: string
  categorySlug: string
}


interface ParapmsProps {
  currentObj: CurrentObject[]
}
const data = [
  ...sectionMainSliders1,
  ...sectionMainSliders2,
  ...sectionMainSliders3,
  ...sectionMainSliders4,
]

export async function getStaticPaths() {
  const paths = data.map((el) => ({
    params: { categorySlug: el.categorySlug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: ParamsPathProps }) {
  const currentObj =
    data.filter((el) => {
      return el.categorySlug === params.categorySlug}) || null
  console.log(currentObj)

  return { props: { currentObj } }
}

const ViewCategory = ({ currentObj }: ParapmsProps) => {
  useBreadcrumb('View All in Category')

  return (
    <>
      <ViewAll currentObj={currentObj} />
    </>
  )
}

export default ViewCategory
